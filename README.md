# Partner Seat Booking System

A comprehensive web application for managing theatre seat allocations for international partners. Built with React, TypeScript, Supabase, and Tailwind CSS.

## Features

### For Partners
- **Secure Authentication**: JWT-based login with role-based access
- **Interactive Seat Map**: Visual seat selection with real-time availability
- **Quota Management**: Track and manage seat allocations
- **Booking History**: View and manage current bookings
- **Real-time Updates**: Live seat availability across all connected clients

### For Administrators
- **Partner Management**: Create and manage partner accounts
- **Quota Control**: Set and adjust seat quotas with automatic over-quota resolution
- **Visual Seat Map Editor**: Professional drag-and-drop seat map creation with row rotation
- **Venue Configuration**: Import JSON seat maps or create custom layouts visually
- **Dashboard Analytics**: Monitor system usage and booking statistics
- **Audit Trail**: Complete logging of all system actions
- **Seat Assignment**: Manual seat reassignment capabilities

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Zustand
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **Infrastructure**: Docker, Nginx
- **Development**: Vite, ESLint, Prettier, Jest
- **Deployment**: Docker Compose, GitHub Actions
- **Visualization**: SVG-based seat maps with interactive editing

## Quick Start

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose
- Supabase account

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/simcc-repository/theater-booking-system.git
cd theater-booking-system
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Architecture

### State Management
The application uses Zustand for global state management with separate stores:
- **Auth Store**: Authentication state and user management
- **Booking Store**: Seat reservations and booking logic
- **Admin Store**: Administrative operations
- **Events Store**: Event management and quotas

### Real-time Features
- Live seat availability updates
- Automatic reservation cleanup
- Real-time booking notifications
- Session expiry management

### Visual Seat Map Editor
Professional-grade seat map editor with:
- Drag and drop functionality
- Row rotation controls
- Grid snapping
- Undo/redo system
- JSON import/export

## Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## Deployment

### Docker
```bash
docker-compose up -d
```

### Manual
```bash
npm run build
# Deploy dist/ folder to your web server
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue on GitHub or contact the development team.