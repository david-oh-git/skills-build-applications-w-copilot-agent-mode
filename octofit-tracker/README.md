# 🐙 OctoFit Tracker

A modern multi-tier application for tracking fitness goals, built with GitHub Copilot.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite
├── backend/           # Node.js + Express + TypeScript
└── README.md
```

## Technology Stack

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Port**: 5173

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Port**: 8000
- **Database ORM**: Mongoose

### Database
- **Database**: MongoDB
- **Port**: 27017

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB running locally or MongoDB Atlas connection string

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend API will be available at `http://localhost:8000`

### MongoDB Setup

Make sure MongoDB is running on `localhost:27017` or update the `MONGODB_URI` in your `.env` file.

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/health` - API health check endpoint

## Development

The frontend is configured with a proxy to route `/api` requests to the backend at `http://localhost:8000`.

## Environment Variables

See `.env.example` files in frontend and backend directories for available configuration options.

## License

ISC
