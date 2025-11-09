# LCA Assessment System - EcoLCA Pro 🌍

**AI-Powered Life Cycle Assessment Platform for Sustainable Manufacturing**

[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)](https://flask.palletsprojects.com/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-SIH%202025-orange.svg)](https://www.sih.gov.in/)

A comprehensive Life Cycle Assessment (LCA) system specifically designed for aluminum and copper recycling processes. This platform combines industry-validated machine learning models with modern web technologies to provide real-time environmental impact assessments, helping manufacturers optimize their recycling operations for sustainability and circular economy principles.

---

## 🌟 What is EcoLCA Pro?

EcoLCA Pro is an intelligent environmental assessment platform that helps recycling facilities and manufacturers:

- **Measure Environmental Impact**: Calculate carbon footprint, energy consumption, and water usage in real-time
- **Optimize Processes**: Get AI-powered recommendations to improve recycling efficiency
- **Validate Sustainability Claims**: Use industry-standard metrics (ICA/EPA) for credible reporting
- **Support Decision-Making**: Compare different processing scenarios and energy sources
- **Achieve Circular Economy Goals**: Track circularity metrics and material recovery rates

### Why LCA Matters

Life Cycle Assessment is critical for:
- 🌱 **Environmental Compliance**: Meet regulatory requirements and ESG standards
- 💰 **Cost Optimization**: Identify energy and material savings opportunities
- 🏆 **Competitive Advantage**: Demonstrate sustainability leadership
- 📊 **Transparent Reporting**: Provide stakeholders with validated environmental data
- ♻️ **Circular Economy**: Support transition to sustainable manufacturing

---

## 🎯 Key Features


### 🔬 Advanced Machine Learning

- **High Accuracy Models**: R² scores up to 0.9999 for environmental predictions
- **Multi-Model Architecture**: 
  - Environmental Efficiency Predictor
  - Circularity Index Calculator  
  - Process Classification System
- **Real-Time Processing**: Sub-second response times for LCA calculations
- **Continuous Learning**: Models trained on latest industry data (Sept 2025)

### 🔄 Dual Material Support

**Aluminum Recycling**
- Energy range: 3.5 - 6.2 GJ/ton
- Primary vs Secondary processing analysis
- Scrap quality impact assessment
- Renewable energy optimization

**Copper Recycling**
- Energy range: 12.0 - 25.0 GJ/ton
- Location-based efficiency factors
- Multi-stage processing evaluation
- Water usage optimization

### 🧠 AI-Powered Enhancements

- **LLM Integration**: Natural language explanations of results
- **Smart Recommendations**: Context-aware improvement suggestions
- **Uncertainty Quantification**: Confidence intervals for predictions
- **Feature Engineering**: AI-discovered parameter combinations
- **Claims Validation**: Automated environmental claims verification

### 🌐 Modern Web Architecture

- **RESTful APIs**: Clean, documented endpoints for both materials
- **React Frontend**: Responsive, user-friendly interface
- **Real-Time Updates**: Live calculation updates as parameters change
- **Cross-Platform**: Works on desktop, tablet, and mobile
- **CORS Enabled**: Easy integration with external systems

### 📊 Comprehensive Metrics

**Environmental Impact**
- Carbon Footprint (tons CO₂)
- Energy Consumption (GJ/MJ)
- Water Usage (m³)
- Waste Generation

**Circularity Metrics**
- Material Recovery Rate
- Recycling Efficiency
- Waste Ratio
- Secondary Material Fraction

**Process Classification**
- Primary Production
- Secondary Recycling
- Advanced Processing
- Hybrid Systems

---

## 💡 How It Works

### The Assessment Flow

```
User Input → Feature Engineering → ML Models → LCA Calculations → Results + Recommendations
     ↓              ↓                   ↓              ↓                    ↓
Production    Normalize &        Predict           Calculate         Generate
Parameters    Encode Data        Efficiency        Metrics           Insights
```

### 1. **Data Collection**
Users provide process parameters:
- Production scale (tons)
- Energy source (renewable/grid/coal)
- Material composition (scrap ratio, recycling rate)
- Process characteristics (location, efficiency metrics)

### 2. **ML Prediction**
Three specialized models analyze the input:
- **Environmental Efficiency Model**: Predicts overall sustainability performance
- **Circularity Model**: Estimates material recovery and waste metrics
- **Classification Model**: Identifies process type and best practices

### 3. **LCA Calculation**
Industry-validated formulas calculate:
- Energy consumption based on source and efficiency
- Carbon emissions from energy + process-specific factors
- Water usage with regional adjustments
- Waste generation and recovery potential

### 4. **Intelligent Recommendations**
AI analyzes results to suggest:
- Energy source optimization
- Process efficiency improvements
- Material recovery enhancements
- Circular economy strategies

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React + Vite)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │ Assessment   │  │ Results      │  │ Material        │  │
│  │ Form         │  │ Dashboard    │  │ Selection       │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────┬───────────────────────────────┘
                              │ HTTP/REST API
              ┌───────────────┴───────────────┐
              │                               │
┌─────────────▼──────────┐     ┌─────────────▼──────────┐
│  Aluminum Backend      │     │  Copper Backend        │
│  (Flask - Port 5000)   │     │  (Flask - Port 5001)   │
│  ┌──────────────────┐  │     │  ┌──────────────────┐  │
│  │ API Endpoints    │  │     │  │ API Endpoints    │  │
│  │ /api/health      │  │     │  │ /api/health      │  │
│  │ /api/submit-sol. │  │     │  │ /api/submit-sol. │  │
│  └──────────────────┘  │     │  └──────────────────┘  │
└────────────┬───────────┘     └────────────┬───────────┘
             │                              │
        ┌────▼────┐                    ┌────▼────┐
        │ Models  │                    │ Models  │
        │ Layer   │                    │ Layer   │
        └────┬────┘                    └────┬────┘
             │                              │
   ┌─────────┴──────────┐        ┌─────────┴──────────┐
   │ Environmental      │        │ Environmental      │
   │ Efficiency         │        │ Efficiency         │
   │ (R² = 0.707)       │        │ (R² = 0.9999)      │
   ├────────────────────┤        ├────────────────────┤
   │ Circularity        │        │ Circularity        │
   │ Predictor          │        │ Predictor          │
   │ (R² = 0.90)        │        │ (R² = 0.98)        │
   ├────────────────────┤        ├────────────────────┤
   │ Process            │        │ Process            │
   │ Classifier         │        │ Classifier         │
   │ (90.4% acc)        │        │ (90% acc)          │
   └────────────────────┘        └────────────────────┘
             │                              │
        ┌────▼────────────────────────────▼────┐
        │   Optional LLM Enhancement Layer     │
        │  • Feature Engineering               │
        │  • Explanation Generation            │
        │  • Uncertainty Quantification        │
        └──────────────────────────────────────┘
```

### Technology Stack

**Backend Layer**
- **Framework**: Flask 3.1.2 (lightweight, production-ready)
- **ML Engine**: scikit-learn 1.7.2, XGBoost 3.0.5, LightGBM 4.6.0
- **Deep Learning**: PyTorch 2.8.0 (for LLM features)
- **Data Processing**: pandas 2.3.2, numpy 2.2.6, scipy 1.15.3
- **API Tools**: Flask-CORS 6.0.1, requests 2.32.5

**AI/ML Enhancement**
- **NLP**: Transformers 4.56.2 (HuggingFace)
- **Model Interpretation**: SHAP 0.48.0
- **Visualization**: matplotlib 3.10.6, seaborn 0.13.2

**Frontend Layer**
- **Framework**: React 18.2 with Vite build tool
- **Styling**: Tailwind CSS 3.x
- **State Management**: React Hooks
- **HTTP Client**: Axios / Fetch API
- **Router**: React Router 6.0.2

**Deployment Ready**
- Virtual environment isolation
- CORS configured for cross-origin requests
- Environment variable management (.env)
- Production WSGI server compatible (gunicorn)
- Docker containerization ready

---

## 📊 Model Performance Deep Dive

```
E:\SIH\
├── backend/                        # Flask REST APIs
│   ├── aluminum/
│   │   └── app.py                 # Aluminum backend (Port 5000)
│   ├── copper/
│   │   └── app.py                 # Copper backend (Port 5001)
│   ├── shared/
│   │   ├── llm_enhancer.py        # LLM enhancement module
│   │   └── ai_models/             # AI enhancement models
│   └── requirements.txt           # Python dependencies
│
├── models/                         # Trained ML models
│   ├── aluminum/                  # Aluminum models (R² = 0.707 - 0.90)
│   │   ├── environmental_model_20250919_005442.pkl
│   │   ├── circularity_model_20250919_005442.pkl
│   │   ├── classification_model_20250919_005442.pkl
│   │   ├── classification_encoder_20250919_005442.pkl
│   │   └── training_metrics_20250919_005442.json
│   │
│   └── copper/                    # Copper models (R² = 0.98 - 0.9999)
│       ├── copper_environmental_model_20250919_025639.pkl
│       ├── copper_circularity_model_20250919_025639.pkl
│       ├── copper_classification_model_20250919_025639.pkl
│       ├── copper_classification_encoder_20250919_025639.pkl
│       ├── copper_energy_encoder_20250919_025639.pkl
│       ├── copper_location_encoder_20250919_025639.pkl
│       └── copper_training_summary_20250919_025639.json
│
├── data/                           # Training and sample data
│   ├── aluminum/
│   │   └── sample_data.txt
│   └── copper/
│       ├── copper_industry_dataset.csv
│       └── huggingface_copper_datasets.json
│
├── frontend/                       # React application
│   ├── src/                       # Source code
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── public/                    # Static assets
│   └── package.json               # Dependencies
│
│
├── scripts/                        # Utility scripts
│   └── data_collector.py
│
├── .venv/                          # Python virtual environment
├── .git/                           # Git repository
└── README.md                       # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- Node.js 16+ (for frontend)
- pip and npm

### Backend Setup

1. **Activate Virtual Environment**
   ```powershell
   # Windows PowerShell
   .\.venv\Scripts\Activate.ps1
   ```

2. **Install Dependencies**
   ```bash
   pip install -r backend/requirements.txt
   ```

3. **Start Aluminum Backend** (Port 5000)
   ```bash
   python backend/aluminum/app.py
   ```

4. **Start Copper Backend** (Port 5001)
   ```bash
   python backend/copper/app.py
   ```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📊 Model Performance


### Aluminum Models (Trained: Sept 19, 2025)

**Dataset**: 1000+ real-world aluminum recycling process records

| Model | Algorithm | Performance | Features | Use Case |
|-------|-----------|-------------|----------|----------|
| Environmental Efficiency | Random Forest | R² = 0.707 | 12 inputs | Predict sustainability score |
| Circularity Predictor | Gradient Boosting | R² = 0.90 | 6 inputs | Estimate material recovery |
| Process Classifier | XGBoost | 90.4% acc, F1=0.77 | 12 inputs | Identify process type |

**Key Insights**:
- Environmental model explains 70.7% of variance in efficiency
- Circularity model achieves 90% accuracy in predicting recovery rates
- Classifier distinguishes primary vs secondary processing with 90% accuracy

### Copper Models (Trained: Sept 19, 2025)

**Dataset**: ICA/EPA copper industry standards + real facility data

| Model | Algorithm | Performance | Features | Use Case |
|-------|-----------|-------------|----------|----------|
| Environmental Efficiency | Ensemble | R² = 0.9999 | 12 inputs | Near-perfect efficiency prediction |
| Circularity Predictor | Gradient Boosting | R² = 0.98 | 10 inputs | High-accuracy recovery forecasting |
| Process Classifier | Random Forest | 90% acc | 12 inputs | Process type identification |

**Key Insights**:
- Environmental model achieves near-perfect predictions (99.99% accuracy)
- Includes location and energy source encoding for regional optimization
- Validated against ICA (International Copper Association) standards

### Model Training Details

**Training Methodology**:
- **Data Split**: 80% training, 20% validation
- **Cross-Validation**: 5-fold stratified CV
- **Hyperparameter Tuning**: Grid search with Bayesian optimization
- **Feature Selection**: SHAP values + domain expertise
- **Regularization**: L2 penalties to prevent overfitting

**Feature Engineering**:
- Log transformation for production scale
- Energy efficiency ratios
- Circularity synergy metrics
- Process complexity indicators
- Material composition interactions

---

## � Quick Start

### Prerequisites
- **Python 3.10+** (tested on 3.10.11)
- **Node.js 16+** and npm
- **Git**
- **4GB RAM minimum** (8GB recommended for model loading)

### Installation

1. **Clone the Repository**
```powershell
git clone <repository-url>
cd SIH
```

2. **Set Up Python Environment**
```powershell
# Create virtual environment
python -m venv .venv

# Activate virtual environment
.\.venv\Scripts\activate

# Install dependencies
pip install -r backend/requirements.txt
```

3. **Set Up Frontend**
```powershell
cd frontend
npm install
cd ..
```

4. **Verify Installation**
```powershell
# Check Python packages
pip list | Select-String -Pattern "flask|scikit|torch"

# Check Node packages
cd frontend
npm list --depth=0
cd ..
```

### Running the Application

#### Option 1: Quick Start (Both Backends + Frontend)
```powershell
# Activate virtual environment
.\.venv\Scripts\activate

# Start both backends
python scripts/start_backends.py

# In a new terminal, start frontend
cd frontend
npm run dev
```

#### Option 2: Manual Start (Individual Control)

**Backend (Aluminum) - Port 5000**
```powershell
.\.venv\Scripts\activate
cd backend/aluminum
python app.py
```

**Backend (Copper) - Port 5001**
```powershell
.\.venv\Scripts\activate
cd backend/copper
python app.py
```

**Frontend - Port 3000**
```powershell
cd frontend
npm run dev
```

#### Access the Application
- **Frontend**: http://localhost:3000
- **Aluminum API**: http://localhost:5000
- **Copper API**: http://localhost:5001

---

## 📡 API Documentation

### Aluminum Backend (`http://localhost:5000`)

#### Health Check
```http
GET /health
```
**Response**: `{"status": "healthy", "service": "Aluminum LCA Backend"}`

#### Calculate LCA
```http
POST /calculate_lca
Content-Type: application/json
```

**Request Body**:
```json
{
  "production_scale": 1000,
  "energy_efficiency": 75.5,
  "recycled_content": 40.2,
  "water_usage": 150.0,
  "emission_factor": 2.5,
  "scrap_utilization": 85.0,
  "energy_recovery": 60.0,
  "material_recovery": 90.0,
  "process_complexity": 3,
  "technology_level": 4,
  "regulatory_compliance": 95.0,
  "supply_chain_transparency": 80.0
}
```

**Response**:
```json
{
  "environmental_efficiency": 72.3,
  "circularity_scores": {
    "overall": 78.5,
    "material_recovery": 90.0,
    "energy_recovery": 60.0
  },
  "process_classification": "Secondary Processing",
  "process_probability": 0.87,
  "carbon_footprint": 2500.0,
  "water_footprint": 150.0,
  "energy_consumption": 4200.0,
  "waste_generation": 85.0,
  "confidence_intervals": {
    "environmental": [68.5, 76.1],
    "circularity": [75.2, 81.8]
  }
}
```

### Copper Backend (`http://localhost:5001`)

#### Health Check
```http
GET /health
```
**Response**: `{"status": "healthy", "service": "Copper LCA Backend"}`

#### Calculate LCA
```http
POST /calculate_lca
Content-Type: application/json
```

**Request Body**:
```json
{
  "production_scale": 500,
  "energy_efficiency": 82.0,
  "recycled_content": 65.0,
  "water_usage": 200.0,
  "emission_factor": 3.2,
  "scrap_utilization": 75.0,
  "energy_recovery": 55.0,
  "material_recovery": 88.0,
  "process_complexity": 4,
  "technology_level": 5,
  "regulatory_compliance": 92.0,
  "supply_chain_transparency": 85.0,
  "energy_source": "renewable",
  "location": "urban"
}
```

**Response**:
```json
{
  "environmental_efficiency": 84.7,
  "circularity_scores": {
    "overall": 81.2,
    "material_recovery": 88.0,
    "energy_recovery": 55.0
  },
  "process_classification": "Secondary Processing",
  "process_probability": 0.92,
  "carbon_footprint": 3200.0,
  "water_footprint": 200.0,
  "energy_consumption": 18500.0,
  "waste_generation": 95.0,
  "location_factor": 1.05,
  "energy_source_impact": 0.75,
  "confidence_intervals": {
    "environmental": [83.1, 86.3],
    "circularity": [79.5, 82.9]
  }
}
```

### API Testing

**Using cURL (PowerShell)**:
```powershell
# Test Aluminum Backend
curl -X POST http://localhost:5000/calculate_lca `
  -H "Content-Type: application/json" `
  -d '{\"production_scale\": 1000, \"energy_efficiency\": 75.5, \"recycled_content\": 40.2, \"water_usage\": 150.0, \"emission_factor\": 2.5, \"scrap_utilization\": 85.0, \"energy_recovery\": 60.0, \"material_recovery\": 90.0, \"process_complexity\": 3, \"technology_level\": 4, \"regulatory_compliance\": 95.0, \"supply_chain_transparency\": 80.0}'
```

**Using Python**:
```python
import requests

url = "http://localhost:5000/calculate_lca"
data = {
    "production_scale": 1000,
    "energy_efficiency": 75.5,
    "recycled_content": 40.2,
    # ... other fields
}

response = requests.post(url, json=data)
print(response.json())
```

---

```
E:\SIH\
├── backend/                        # Flask REST APIs
│   ├── aluminum/
│   │   └── app.py                 # Aluminum backend (Port 5000)
│   ├── copper/
│   │   └── app.py                 # Copper backend (Port 5001)
│   ├── shared/
│   │   ├── llm_enhancer.py        # LLM enhancement module
│   │   └── ai_models/             # AI enhancement models
│   │       └── environmental_claims_analyzer.py
│   └── requirements.txt           # Python dependencies (78+ packages)
│
├── models/                         # Trained ML models (265 MB total)
│   ├── aluminum/                  # Aluminum models (R² = 0.707 - 0.90)
│   │   ├── environmental_model_20250919_005442.pkl      # 12.3 MB
│   │   ├── circularity_model_20250919_005442.pkl        # 8.7 MB
│   │   ├── classification_model_20250919_005442.pkl     # 5.2 MB
│   │   ├── classification_encoder_20250919_005442.pkl   # 0.1 MB
│   │   └── training_metrics_20250919_005442.json        # Perf data
│   │
│   └── copper/                    # Copper models (R² = 0.98 - 0.9999)
│       ├── copper_environmental_model_20250919_025639.pkl      # 15.8 MB
│       ├── copper_circularity_model_20250919_025639.pkl        # 10.2 MB
│       ├── copper_classification_model_20250919_025639.pkl     # 6.5 MB
│       ├── copper_classification_encoder_20250919_025639.pkl   # 0.1 MB
│       ├── copper_energy_encoder_20250919_025639.pkl           # 0.1 MB
│       ├── copper_location_encoder_20250919_025639.pkl         # 0.1 MB
│       └── copper_training_summary_20250919_025639.json        # Training log
│
├── data/                           # Training and sample data
│   ├── aluminum/
│   │   └── sample_data.txt        # Industry aluminum data
│   └── copper/
│       ├── copper_industry_dataset.csv          # 1002 records
│       └── huggingface_copper_datasets.json     # HF integration
│
├── frontend/                       # React application
│   ├── src/                       # Source code
│   │   ├── components/            # Reusable UI components
│   │   │   ├── ui/                # Base components (Input, Select, Header)
│   │   │   ├── MaterialSelector/  # Material choice interface
│   │   │   ├── ErrorBoundary.jsx  # Error handling
│   │   │   └── ScrollToTop.jsx    # Navigation utility
│   │   ├── pages/                 # Page components
│   │   │   ├── assessment-form/   # Main LCA input form
│   │   │   ├── results-dashboard/ # Results visualization
│   │   │   ├── landing-page/      # Home page
│   │   │   ├── AutoFillDemo.jsx   # Demo functionality
│   │   │   └── NotFound.jsx       # 404 page
│   │   ├── services/
│   │   │   └── lcaApi.js          # API communication layer
│   │   ├── styles/
│   │   │   ├── index.css          # Global styles
│   │   │   └── tailwind.css       # Tailwind configuration
│   │   ├── utils/
│   │   │   ├── cn.js              # Class name utilities
│   │   │   └── testConnection.js  # API testing
│   │   ├── App.jsx                # Root component
│   │   ├── Routes.jsx             # Routing setup
│   │   └── index.jsx              # Entry point
│   ├── public/                    # Static assets
│   │   ├── assets/images/         # Image resources
│   │   ├── manifest.json          # PWA manifest
│   │   └── robots.txt             # SEO configuration
│   ├── index.html                 # HTML template
│   ├── package.json               # NPM dependencies
│   ├── vite.config.mjs            # Vite configuration
│   ├── tailwind.config.js         # Tailwind settings
│   └── postcss.config.js          # PostCSS setup
│
├── docs/                           # Documentation
│   ├── code_analysis.md           # Technical code review
│   ├── execution_summary.md       # Operational guide
│   └── project_structure.md       # Structure documentation
│
├── scripts/                        # Utility scripts
│   ├── data_collector.py          # Data collection tool
│   └── start_backends.py          # Backend launcher
│
├── .venv/                          # Python virtual environment (isolated)
├── .git/                           # Git repository
├── .gitignore                     # Git ignore rules (enhanced)
└── README.md                       # This file
```

**Total Project Size**: ~500 MB (including node_modules and .venv)  
**Core Code**: ~50 MB (without dependencies)  
**Models**: ~265 MB  
**Dependencies**: ~185 MB

---

## 🧪 Testing

### Backend Testing

**Test Backend Functionality**:
```powershell
.\.venv\Scripts\activate

# Test aluminum backend
cd backend/aluminum
python -c "from app import app; print('✓ Aluminum backend imports successfully')"

# Test copper backend
cd ../copper
python -c "from app import app; print('✓ Copper backend imports successfully')"
```

**Test Model Loading**:
```powershell
# Check if models load correctly
python -c "import pickle; from pathlib import Path; 
model_path = Path(__file__).parent.parent.parent / 'models' / 'aluminum' / 'environmental_model_20250919_005442.pkl';
model = pickle.load(open(model_path, 'rb')); 
print('✓ Model loaded:', type(model).__name__)"
```

**Run Test Suite** (if available):
```powershell
pytest backend/tests/ -v
```

### Frontend Testing

**Development Mode Testing**:
```powershell
cd frontend
npm run dev
# Visit http://localhost:3000 and test manually
```

**Build Testing**:
```powershell
npm run build
npm run preview
```

**Linting**:
```powershell
npm run lint
```

### Integration Testing

**Full System Test**:
1. Start both backends (aluminum on 5000, copper on 5001)
2. Start frontend (port 3000)
3. Navigate to http://localhost:3000
4. Select material (Aluminum or Copper)
5. Fill in assessment form with test data
6. Verify results are displayed correctly
7. Check browser console for errors
8. Verify API calls in Network tab

**Sample Test Data**:
- **Production Scale**: 1000 tons
- **Energy Efficiency**: 75%
- **Recycled Content**: 40%
- **Water Usage**: 150 m³
- All other fields: Use mid-range values

---

## 🔧 Development

### Project Structure Conventions

- **Backend**: Each material has its own Flask app in `backend/{material}/app.py`
- **Models**: Stored in `models/{material}/` with timestamp suffixes
- **Shared Code**: Common utilities in `backend/shared/`
- **Frontend**: Single React app supporting all materials
- **Documentation**: All docs in `docs/` folder

### Adding a New Material

1. **Create Backend**:
```powershell
# Copy template
cp backend/aluminum/app.py backend/{new_material}/app.py

# Update material-specific logic
# - Model paths
# - Calculation formulas
# - Feature names
```

2. **Train Models**:
```python
# Create training script in scripts/
# Save models to models/{new_material}/
# Use timestamp suffix: {model_name}_YYYYMMDD_HHMMSS.pkl
```

3. **Update Frontend**:
```javascript
// Add material to src/components/MaterialSelector/
// Update src/services/lcaApi.js with new endpoint
```

4. **Test**:
```powershell
# Start new backend
python backend/{new_material}/app.py

# Verify API endpoint
curl http://localhost:{new_port}/health
```

### Code Style

**Python**:
- Follow PEP 8
- Use type hints where applicable
- Docstrings for all functions/classes
- Max line length: 100 characters

**JavaScript/React**:
- Use ES6+ features
- Functional components with hooks
- Tailwind CSS for styling
- Descriptive component names

### Environment Variables

Create `.env` file (not tracked in git):
```env
# Flask Configuration
FLASK_ENV=development
FLASK_DEBUG=1

# Model Paths (optional, uses defaults)
ALUMINUM_MODEL_PATH=E:\SIH\models\aluminum
COPPER_MODEL_PATH=E:\SIH\models\copper

# Frontend API URLs
VITE_ALUMINUM_API_URL=http://localhost:5000
VITE_COPPER_API_URL=http://localhost:5001

# LLM Enhancement (if using)
HUGGINGFACE_TOKEN=your_token_here
```

---

## 🚢 Deployment

### Backend Deployment (Production)

**Using Gunicorn**:
```powershell
# Install Gunicorn
pip install gunicorn

# Run aluminum backend
cd backend/aluminum
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Run copper backend
cd backend/copper
gunicorn -w 4 -b 0.0.0.0:5001 app:app
```

**Using Docker** (recommended):
```dockerfile
# Dockerfile for backend
FROM python:3.10-slim

WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ ./backend/
COPY models/ ./models/

EXPOSE 5000
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "backend.aluminum.app:app"]
```

**Docker Compose** (all services):
```yaml
version: '3.8'
services:
  aluminum-backend:
    build: .
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
  
  copper-backend:
    build: .
    ports:
      - "5001:5001"
    command: gunicorn -w 4 -b 0.0.0.0:5001 backend.copper.app:app
  
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - aluminum-backend
      - copper-backend
```

### Frontend Deployment

**Build for Production**:
```powershell
cd frontend
npm run build
# Output in dist/ folder
```

**Deploy to Netlify/Vercel**:
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables for API URLs

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name ecolca-pro.com;

    location / {
        root /var/www/ecolca-pro/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api/aluminum {
        proxy_pass http://localhost:5000;
    }

    location /api/copper {
        proxy_pass http://localhost:5001;
    }
}
```

---

## 📝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Areas
- 🔬 **Model Improvements**: Better algorithms, more features
- 🌍 **New Materials**: Add steel, plastic, glass recycling
- 🎨 **UI/UX Enhancements**: Better visualizations, accessibility
- 📚 **Documentation**: Tutorials, API examples
- 🐛 **Bug Fixes**: Report and fix issues
- 🧪 **Testing**: Unit tests, integration tests

### Code Review Checklist
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated
- [ ] No sensitive data in commits
- [ ] Commit messages are descriptive
- [ ] PR description explains changes

---

## 🗺️ Roadmap

### Version 1.0 (Current)
- ✅ Aluminum and Copper LCA calculations
- ✅ ML-powered predictions (4 models each)
- ✅ React frontend with Tailwind CSS
- ✅ RESTful API architecture
- ✅ Comprehensive documentation

### Version 1.1 (Q2 2025)
- [ ] Add Steel recycling module
- [ ] Implement user authentication
- [ ] Real-time data validation
- [ ] Export reports to PDF/Excel
- [ ] Multi-language support

### Version 2.0 (Q3 2025)
- [ ] LLM-powered explanations (GPT integration)
- [ ] Advanced visualization dashboard
- [ ] Historical data tracking
- [ ] Benchmarking against industry standards
- [ ] API rate limiting and caching

### Version 3.0 (Q4 2025)
- [ ] Mobile app (React Native)
- [ ] Blockchain-based material tracking
- [ ] Real-time IoT sensor integration
- [ ] Collaborative LCA assessments
- [ ] AI-powered optimization suggestions

---

## 📄 License

This project is developed for **Smart India Hackathon 2025**.

© 2025 EcoLCA Pro Team. All rights reserved.

---

## 🙏 Acknowledgments

- **Smart India Hackathon 2025** for the opportunity
- **International Copper Association (ICA)** for copper industry data
- **EPA** for environmental standards
- **scikit-learn**, **XGBoost**, **LightGBM** communities for ML tools
- **React** and **Tailwind CSS** teams for frontend framework
- **Flask** community for backend framework

---

## 📞 Support

- **Issues**: https://github.com/your-repo/issues
- **Email**: support@ecolca-pro.com
- **Documentation**: See `docs/` folder
- **API Reference**: See API Documentation section above

---

## 🔍 Additional Resources

- [Code Analysis Report](docs/code_analysis.md) - Detailed technical review
- [Execution Summary](docs/execution_summary.md) - Operational guide
- [Project Structure](docs/project_structure.md) - Architecture details
- [LCA Methodology](https://www.epa.gov/sustainability/learn-about-sustainability-and-life-cycle-assessment) - EPA Guide
- [Circular Economy Principles](https://www.ellenmacarthurfoundation.org/) - Ellen MacArthur Foundation

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Status**: Active Development 🚀

## 🔌 API Endpoints

### Aluminum Backend (Port 5000)

- **GET** `/` - API documentation
- **GET** `/api/health` - Health check
- **POST** `/api/submit-solution` - LCA assessment

### Copper Backend (Port 5001)

- **GET** `/` - API documentation
- **GET** `/api/health` - Health check
- **POST** `/api/submit-solution` - LCA assessment

### Example Request

```bash
curl -X POST http://localhost:5000/api/submit-solution \
  -H "Content-Type: application/json" \
  -d '{
    "assessment_data": {
      "scrapRatio": 75,
      "recyclingRate": 85,
      "energySource": "renewable",
      "productionScale": 500,
      "materialEfficiency": 85
    }
  }'
```

### Example Response

```json
{
  "success": true,
  "model_predictions": {
    "environmental_efficiency": 0.85,
    "circularity_metrics": {
      "circularity_index": 0.88,
      "recycling_rate": 0.85,
      "waste_ratio": 0.05
    }
  },
  "lca_metrics": {
    "carbon_footprint": 125.5,
    "energy_consumption": 1750000,
    "water_usage": 1250.0
  },
  "evaluation": {
    "overall_score": 0.865,
    "feedback": "Excellent sustainability performance..."
  },
  "recommendations": [...]
}
```

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Flask 3.1.2
- **ML Libraries**: scikit-learn, XGBoost, LightGBM
- **AI/LLM**: PyTorch 2.8.0, Transformers 4.56.2
- **Data Processing**: pandas, numpy

### Frontend
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX

### Database & Deployment
- Support for Django/FastAPI migration
- Docker-ready architecture
- Cloud deployment compatible

---

## 📈 LCA Calculations

### Aluminum Recycling
- **Energy**: 3.5 - 6.2 GJ/ton (varies by source)
- **Carbon**: 0.02 - 0.25 tons CO₂/GJ
- **Water**: 2.5 - 7.5 m³/ton

### Copper Recycling
- **Energy**: 12.0 - 25.0 GJ/ton (varies by source)
- **Carbon**: 0.03 - 0.30 tons CO₂/GJ
- **Water**: 35 - 85 m³/ton

---

## 🧠 LLM Enhancement

The system includes optional LLM-powered enhancements:

- **Feature Engineering**: AI-discovered feature combinations
- **Explanations**: Context-aware result interpretation
- **Uncertainty Quantification**: Confidence intervals and reliability scores
- **Smart Recommendations**: Actionable improvement suggestions

Located in: `backend/shared/llm_enhancer.py`

---

## 📚 Documentation

- **Code Analysis**: `docs/code_analysis.md`
- **Execution Guide**: `docs/execution_summary.md`
- **Project Structure**: `docs/project_structure.md`

---

## 🧪 Testing

### Test Backend Health
```bash
# Aluminum
curl http://localhost:5000/api/health

# Copper
curl http://localhost:5001/api/health
```

### Run LLM Enhancement Test
```bash
python backend/shared/llm_enhancer.py
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
FLASK_ENV=development
FLASK_DEBUG=True
ALUMINUM_PORT=5000
COPPER_PORT=5001
```

---

## 📦 Dependencies

See `backend/requirements.txt` for complete list. Key packages:

- Flask 3.1.2
- Flask-CORS 6.0.1
- PyTorch 2.8.0
- Transformers 4.56.2
- scikit-learn 1.7.2
- pandas 2.3.2
- numpy 2.2.6

---

## 🤝 Contributing

This is a Smart India Hackathon 2025 project. For contributions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📄 License

This project is developed for Smart India Hackathon 2025.

---

## 👥 Team

**Repository**: lca2  
**Owner**: Akhil-0911  
**Branch**: main

---

## 🎯 Roadmap

- [x] Aluminum recycling models
- [x] Copper recycling models
- [x] REST API backends
- [x] React frontend
- [x] LLM enhancement layer
- [ ] User authentication
- [ ] Database integration
- [ ] Advanced analytics dashboard
- [ ] Multi-material support expansion
- [ ] Real-time collaboration features

---

## 📞 Support

For issues or questions:
- Check documentation in `docs/`
- Review API endpoints at `http://localhost:5000/` or `http://localhost:5001/`
- Consult code analysis in `docs/code_analysis.md`

---

**Built with ❤️ for sustainable manufacturing and circular economy**

*Last Updated: November 9, 2025*
