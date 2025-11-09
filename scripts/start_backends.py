#!/usr/bin/env python3
"""
Quick Start Script for LCA Backend Services
==========================================

This script starts both aluminum and copper backend services.
"""

import subprocess
import sys
import os
from pathlib import Path

def main():
    print("🚀 Starting LCA Backend Services")
    print("=" * 50)
    
    # Get project root
    project_root = Path(__file__).parent.parent
    
    # Python executable
    python_exe = project_root / ".venv" / "Scripts" / "python.exe"
    if not python_exe.exists():
        python_exe = "python"  # Fallback to system python
    
    # Backend paths
    aluminum_app = project_root / "backend" / "aluminum" / "app.py"
    copper_app = project_root / "backend" / "copper" / "app.py"
    
    print("\n📋 Services to start:")
    print(f"  • Aluminum API: {aluminum_app}")
    print(f"  • Copper API: {copper_app}")
    
    print("\n" + "=" * 50)
    print("Choose an option:")
    print("  1. Start Aluminum Backend (Port 5000)")
    print("  2. Start Copper Backend (Port 5001)")
    print("  3. Start Both (in separate windows)")
    print("  4. Exit")
    
    choice = input("\nEnter choice (1-4): ").strip()
    
    if choice == "1":
        print("\n🔬 Starting Aluminum Backend...")
        subprocess.run([str(python_exe), str(aluminum_app)])
    
    elif choice == "2":
        print("\n🔶 Starting Copper Backend...")
        subprocess.run([str(python_exe), str(copper_app)])
    
    elif choice == "3":
        print("\n🚀 Starting both backends...")
        if sys.platform == "win32":
            # Windows
            subprocess.Popen(["start", "cmd", "/k", f"{python_exe} {aluminum_app}"], shell=True)
            subprocess.Popen(["start", "cmd", "/k", f"{python_exe} {copper_app}"], shell=True)
            print("✅ Both backends started in separate windows")
        else:
            # Unix/Linux/Mac
            subprocess.Popen(["gnome-terminal", "--", str(python_exe), str(aluminum_app)])
            subprocess.Popen(["gnome-terminal", "--", str(python_exe), str(copper_app)])
            print("✅ Both backends started in separate terminals")
    
    elif choice == "4":
        print("\n👋 Goodbye!")
        return
    
    else:
        print("\n❌ Invalid choice!")
        return

if __name__ == "__main__":
    main()
