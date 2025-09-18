#!/usr/bin/env python3
"""
Environmental Claims Analyzer for LCA System
==========================================

Integrates HuggingFace environmental claims classifier with your LCA system.
"""

import os
from transformers import pipeline
import pandas as pd
import numpy as np
from datetime import datetime

class EnvironmentalClaimsAnalyzer:
    """
    Analyze and validate environmental claims using the HuggingFace 
    climatebert/environmental-claims model.
    """
    
    def __init__(self, model_path=None):
        """Initialize the environmental claims analyzer"""
        if model_path is None:
            model_path = r"D:\SIH\ai_models\environmental-claims"
        
        print("🔬 Loading Environmental Claims Classifier...")
        try:
            self.classifier = pipeline(
                "text-classification", 
                model=model_path,
                tokenizer=model_path
            )
            print("✅ Environmental Claims Classifier loaded successfully!")
        except Exception as e:
            print(f"❌ Error loading model: {e}")
            self.classifier = None
    
    def analyze_claim(self, text):
        """
        Analyze a single environmental claim
        
        Args:
            text (str): Environmental claim to analyze
            
        Returns:
            dict: Analysis result with label, confidence, and interpretation
        """
        if self.classifier is None:
            return {"error": "Model not loaded"}
        
        try:
            result = self.classifier(text)
            
            # Extract result
            label = result[0]['label']
            confidence = result[0]['score']
            
            # Interpret result
            is_environmental_claim = label.lower() == 'yes'
            confidence_level = self._get_confidence_level(confidence)
            
            return {
                "text": text,
                "is_environmental_claim": is_environmental_claim,
                "confidence": confidence,
                "confidence_level": confidence_level,
                "raw_result": result[0],
                "timestamp": datetime.now().isoformat()
            }
            
        except Exception as e:
            return {"error": f"Analysis failed: {e}"}
    
    def analyze_multiple_claims(self, claims_list):
        """
        Analyze multiple environmental claims
        
        Args:
            claims_list (list): List of environmental claims
            
        Returns:
            list: List of analysis results
        """
        results = []
        for claim in claims_list:
            result = self.analyze_claim(claim)
            results.append(result)
        
        return results
    
    def analyze_lca_report(self, report_text):
        """
        Extract and analyze environmental claims from an LCA report
        
        Args:
            report_text (str): Full LCA report text
            
        Returns:
            dict: Comprehensive analysis of environmental claims in the report
        """
        # Split report into sentences for individual analysis
        sentences = self._split_into_sentences(report_text)
        
        # Analyze each sentence
        sentence_results = []
        environmental_claims = []
        
        for sentence in sentences:
            if len(sentence.strip()) > 20:  # Skip very short sentences
                result = self.analyze_claim(sentence)
                sentence_results.append(result)
                
                if result.get('is_environmental_claim', False) and result.get('confidence', 0) > 0.7:
                    environmental_claims.append(result)
        
        # Summary statistics
        total_sentences = len(sentence_results)
        claim_sentences = len(environmental_claims)
        claim_percentage = (claim_sentences / total_sentences * 100) if total_sentences > 0 else 0
        
        # Average confidence for claims
        avg_confidence = np.mean([claim['confidence'] for claim in environmental_claims]) if environmental_claims else 0
        
        return {
            "total_sentences_analyzed": total_sentences,
            "environmental_claims_found": claim_sentences,
            "claim_percentage": claim_percentage,
            "average_claim_confidence": avg_confidence,
            "detailed_claims": environmental_claims,
            "all_sentence_results": sentence_results,
            "analysis_timestamp": datetime.now().isoformat()
        }
    
    def validate_lca_assessment_claims(self, assessment_data):
        """
        Validate environmental claims in LCA assessment data
        
        Args:
            assessment_data (dict): LCA assessment with text descriptions
            
        Returns:
            dict: Validation results for the assessment
        """
        validation_results = {}
        
        # Common fields that might contain environmental claims
        claim_fields = [
            'process_description',
            'environmental_benefits',
            'sustainability_claims',
            'impact_reduction_claims',
            'circular_economy_benefits',
            'carbon_footprint_claims'
        ]
        
        for field in claim_fields:
            if field in assessment_data and assessment_data[field]:
                result = self.analyze_claim(assessment_data[field])
                validation_results[field] = result
        
        # Overall assessment
        validated_claims = [r for r in validation_results.values() if r.get('is_environmental_claim', False)]
        avg_confidence = np.mean([r['confidence'] for r in validated_claims]) if validated_claims else 0
        
        validation_results['summary'] = {
            'total_fields_checked': len(validation_results),
            'validated_claims': len(validated_claims),
            'average_confidence': avg_confidence,
            'overall_credibility': self._assess_credibility(avg_confidence, len(validated_claims))
        }
        
        return validation_results
    
    def _get_confidence_level(self, confidence):
        """Get human-readable confidence level"""
        if confidence >= 0.9:
            return "Very High"
        elif confidence >= 0.8:
            return "High"
        elif confidence >= 0.7:
            return "Medium"
        elif confidence >= 0.6:
            return "Low"
        else:
            return "Very Low"
    
    def _split_into_sentences(self, text):
        """Simple sentence splitting"""
        import re
        sentences = re.split(r'[.!?]+', text)
        return [s.strip() for s in sentences if s.strip()]
    
    def _assess_credibility(self, avg_confidence, num_claims):
        """Assess overall credibility of environmental claims"""
        if num_claims == 0:
            return "No Claims"
        elif avg_confidence >= 0.9 and num_claims >= 3:
            return "Highly Credible"
        elif avg_confidence >= 0.8 and num_claims >= 2:
            return "Credible"
        elif avg_confidence >= 0.7:
            return "Moderately Credible"
        else:
            return "Low Credibility"

# Example usage and testing
def test_environmental_claims_analyzer():
    """Test the Environmental Claims Analyzer"""
    print("🧪 Testing Environmental Claims Analyzer")
    print("=" * 50)
    
    # Initialize analyzer
    analyzer = EnvironmentalClaimsAnalyzer()
    
    if analyzer.classifier is None:
        print("❌ Cannot test - model not loaded")
        return
    
    # Test aluminum recycling claims
    aluminum_claims = [
        "Our aluminum recycling process reduces CO2 emissions by 95% compared to primary production",
        "This facility achieves 99% material recovery efficiency",
        "Zero liquid discharge manufacturing process",
        "Carbon neutral aluminum recycling with renewable energy",
        "Circular economy approach reduces waste by 85%",
        "The weather is nice today",  # Non-environmental claim
        "Advanced melting technology improves energy efficiency by 40%"
    ]
    
    print("🔍 Analyzing aluminum recycling claims:")
    results = analyzer.analyze_multiple_claims(aluminum_claims)
    
    for result in results:
        if 'error' not in result:
            status = "✅ Environmental Claim" if result['is_environmental_claim'] else "❌ Not Environmental"
            confidence = result['confidence']
            level = result['confidence_level']
            text = result['text'][:60] + "..." if len(result['text']) > 60 else result['text']
            print(f"   {status} ({confidence:.3f} - {level}): {text}")
    
    # Test LCA report analysis
    sample_lca_report = """
    This aluminum recycling process demonstrates excellent environmental performance. 
    The process reduces carbon footprint by 4.2 tons CO2 equivalent per ton of aluminum.
    Energy consumption is 95% lower than primary aluminum production.
    The facility achieves zero waste to landfill through comprehensive recycling.
    Material recovery efficiency exceeds 98% for all input streams.
    The process uses renewable energy sources for 80% of power requirements.
    Today is a sunny day.
    Advanced sorting technology ensures high-quality recycled aluminum output.
    """
    
    print(f"\n📄 Analyzing sample LCA report:")
    report_analysis = analyzer.analyze_lca_report(sample_lca_report)
    
    print(f"   • Total sentences: {report_analysis['total_sentences_analyzed']}")
    print(f"   • Environmental claims: {report_analysis['environmental_claims_found']}")
    print(f"   • Claim percentage: {report_analysis['claim_percentage']:.1f}%")
    print(f"   • Average confidence: {report_analysis['average_claim_confidence']:.3f}")
    
    print(f"\n🎯 Top environmental claims found:")
    for i, claim in enumerate(report_analysis['detailed_claims'][:3], 1):
        text = claim['text'][:80] + "..." if len(claim['text']) > 80 else claim['text']
        print(f"   {i}. {text} (confidence: {claim['confidence']:.3f})")

if __name__ == "__main__":
    test_environmental_claims_analyzer()