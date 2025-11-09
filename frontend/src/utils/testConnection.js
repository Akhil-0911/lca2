/**
 * Frontend-Backend Connection Test
 * ================================
 * 
 * Quick test to verify your React frontend can connect to Flask backend
 */

import { LCAAssessmentAPI } from '../services/lcaApi.js';

export const testBackendConnection = async () => {
  console.log('🧪 Testing Backend Connection...');
  
  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing health check...');
    const health = await LCAAssessmentAPI.checkHealth();
    console.log('✅ Health check passed:', health);
    
    // Test 2: Get domains
    console.log('2️⃣ Testing domains endpoint...');
    const domainsResponse = await fetch('http://localhost:5000/api/domains');
    const domains = await domainsResponse.json();
    console.log('✅ Domains retrieved:', domains);
    
    // Test 3: Get a sample problem
    console.log('3️⃣ Testing problem endpoint...');
    const problemResponse = await fetch('http://localhost:5000/api/problems/aluminum_production');
    const problem = await problemResponse.json();
    console.log('✅ Problem retrieved:', problem);
    
    // Test 4: Submit mock assessment
    console.log('4️⃣ Testing assessment submission...');
    const mockAssessment = {
      metalType: 'aluminum',
      processRoute: 'primary_production',
      productionScale: '1000',
      recycledContent: 30,
      energySource: 'renewable',
      transportMode: 'truck',
      endOfLifeScenario: 'recycling',
      scrapRatio: 10,
      recyclingRate: 80,
      wasteRatio: 5,
      materialEfficiency: 85
    };
    
    const result = await LCAAssessmentAPI.submitAssessment(mockAssessment);
    console.log('✅ Assessment submitted:', result);
    
    return {
      success: true,
      message: 'All tests passed! Frontend connected to backend successfully.',
      results: { health, domains, problem, assessment: result }
    };
    
  } catch (error) {
    console.error('❌ Connection test failed:', error);
    return {
      success: false,
      message: `Connection failed: ${error.message}`,
      error: error
    };
  }
};

export const runQuickTest = () => {
  testBackendConnection().then(result => {
    if (result.success) {
      alert('🎉 Backend Connection Successful!\nCheck console for details.');
    } else {
      alert(`❌ Backend Connection Failed:\n${result.message}`);
    }
  });
};

// You can call this in your React component to test the connection
export default testBackendConnection;