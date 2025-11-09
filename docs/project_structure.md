#  LCA System - Reorganized Structure

**Updated:** November 9, 2025

##  Final Directory Structure

```
E:\SIH\
 backend/          # All API services
│   ├── aluminum/     # Aluminum API (Port 5000)
│   ├── copper/       # Copper API (Port 5001)
    shared/       # Shared modules
    requirements.txt
 models/           # ML models by material
    aluminum/
    copper/
 data/             # Training datasets
    aluminum/
    copper/
 frontend/         # React application (simplified!)
    src/
    public/
    package.json
 docs/             # All documentation
 README.md
```

##  Latest Changes

### Frontend Simplified 
**Before:** frontend/ecolca_pro/  
**After:** frontend/ (direct access)

##  Quick Start

**Backends:**
```bash
python backend/aluminum/app.py  # Port 5000
python backend/copper/app.py    # Port 5001
```

**Frontend:**
```bash
cd frontend
npm run dev
```
