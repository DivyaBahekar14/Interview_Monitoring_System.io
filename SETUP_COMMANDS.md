# Setup Commands

Run these commands from the project root in PowerShell.

## 1. Install prerequisites

- Node.js 18 or newer
- Python 3.10 or newer
- A MongoDB connection string in `.env` as `MONGO_URI=...`

## 2. Install dependencies

```powershell
npm install
python -m pip install -r python_backend\requirements.txt
```

## 3. Start the application

Open three PowerShell terminals in the project root.

### Terminal 1: React frontend

```powershell
npm run frontend
```

Open http://127.0.0.1:5173 in your browser.

### Terminal 2: Node.js API

```powershell
npm run backend
```

The API runs on http://127.0.0.1:4000.

### Terminal 3: Python system monitor

```powershell
python python_backend\app.py
```

The system-status service runs on http://127.0.0.1:5000.

## Run all services together

```powershell
npm run dev
```

If the Python service does not start through this command, start it separately with `python python_backend\app.py`.

## Verify services

```powershell
Invoke-WebRequest http://127.0.0.1:5173 -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:4000 -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:5000/health -UseBasicParsing
```

## Build the frontend

```powershell
npm run build
```

## Common fixes

```powershell
# Reinstall frontend dependencies
Remove-Item -Recurse -Force node_modules
npm install

# Reinstall Python monitoring dependencies
python -m pip install -r python_backend\requirements.txt
```

If port 5173, 4000, or 5000 is already in use, close the process using that port or choose another port before starting the service.
