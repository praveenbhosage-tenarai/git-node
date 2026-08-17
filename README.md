# git-node
Simple Node.js app with a Dockerfile and minimal routes.

**Prerequisites:**
- Node.js (v18+)
- npm
- Docker (optional, recommended for running the app in a container)
- MongoDB if you use the models: mongodb://localhost:27017/Employees

**Quick start (local)**
1. Install dependencies:
```bash
npm install
```
2. Run the app (development, uses nodemon):
```bash
npm run start
```
The app listens on port 8000.

Check the root route:
```bash
curl http://127.0.0.1:8000/
```

Create an employee with a POST request:
```bash
curl -sS -X POST http://127.0.0.1:8000/addemployee \
  -H 'Content-Type: application/json' \
  -d '{"empName":"Alice","empPass":"secret"}'
```

**Run with Docker**
1. Build the image:
```bash
sudo docker build -t git-node:latest .
```
2. Run the container (host networking so it can reach local MongoDB):
```bash
sudo docker run -d --name git-node --network host git-node:latest
```
3. View logs:
```bash
sudo docker logs -f git-node
```

**Files of interest**
- [index.js](index.js) — app entry
- [Dockerfile](Dockerfile) — image build
- [controllers/controller.js](controllers/controller.js) — minimal route handlers

**Rebuild after edits**
Rebuild the image and restart the container:
```bash
sudo docker build -t git-node:latest .
sudo docker rm -f git-node 2>/dev/null || true
sudo docker run -d --name git-node --network host git-node:latest
```

License: MIT