#!/bin/bash
echo "=========================================================="
echo " Starting Customized Learning Space Server"
echo " (This is required for Spotify & Password functionality)"
echo "=========================================================="
echo ""
echo "Please open your browser and navigate to: http://localhost:8000"
echo ""
echo "Press Ctrl+C in this terminal to stop the server."
echo "=========================================================="
python3 -m http.server 8000
