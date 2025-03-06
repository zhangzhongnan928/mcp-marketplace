# MCP Marketplace

A marketplace for Model Context Protocol (MCP) services that integrates with Claude and other AI assistants.

## About

MCP Marketplace is a platform that allows developers to create and publish Model Context Protocol (MCP) services that can be easily integrated with AI assistants like Claude and Cursor. It provides a simplified workflow for users to discover, purchase, and immediately use these services within their AI assistants.

## Project Status

This project includes both the original UI mockup and an Apple-inspired redesign that follows Apple's design language and aesthetic:

### Original Design
- Uses more traditional UI components and layout
- Located in the default app routes and components

### Apple-Inspired Redesign
- Minimalist and clean aesthetic
- Premium feel with ample white space
- Subtle hover effects and transitions
- High-quality imagery and typography
- Located in `-apple.tsx` files

## UI Design Highlights

### Apple-Inspired Design Features
- **Color Palette**: Clean whites, subtle grays, and sparing use of blue as an accent color
- **Typography**: Clean, modern font hierarchy with appropriate spacing
- **Component Styling**: 
  - Subtle rounded corners (8-12px radius)
  - Soft shadows for depth
  - Minimal borders
  - Subtle hover interactions
  - Cards with clean separation
- **Layout**:
  - Grid-based with consistent spacing
  - Strategic use of negative space
  - Modern asymmetrical layouts when appropriate

## Features

- Discover MCP services across various categories
- One-click integration with Claude and other MCP-compatible AI assistants
- Secure authentication and authorization
- Developer tools for creating and publishing MCP services
- Usage analytics and billing management

## Project Structure

### Original Design
- `/app` - Next.js application routes and pages
  - `/` - Home page
  - `/discover` - Browse available MCP services
  - `/service/[id]` - Detailed view of a specific service
  - `/about` - Information about MCP Marketplace
  - `/developers` - Information for developers
- `/components` - Reusable React components
  - `Navbar.tsx` - Navigation header
  - `Footer.tsx` - Site footer
  - `IntegrationButton.tsx` - One-click integration UI component

### Apple-Inspired Redesign
- `/app/layout-apple.tsx` - Apple-inspired layout
- `/app/home-apple.tsx` - Apple-inspired home page
- `/app/discover/page-apple.tsx` - Apple-inspired discover page
- `/app/service/[id]/page-apple.tsx` - Apple-inspired service detail page
- `/components` - New Apple-inspired components
  - `NavbarApple.tsx` - Apple-inspired navigation header
  - `FooterApple.tsx` - Apple-inspired footer
  - `IntegrationButtonApple.tsx` - Apple-inspired integration button
  - `ServiceCardApple.tsx` - Apple-inspired service card component

## Screenshots

*(Screenshots will be added once the initial implementation is deployed)*

## Design Inspiration

The Apple-inspired redesign draws inspiration from:
- Apple.com
- Stripe.com
- Airbnb.com
- Square.com

## Next Steps

- Implement user authentication and account management
- Create developer portal for publishing new services
- Implement search and filtering for service discovery
- Add user reviews and ratings for services
- Integrate with payment processing
- Develop the backend API for service management
- Create MCP service SDK for developers

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zhangzhongnan928/mcp-marketplace.git
cd mcp-marketplace

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS, Headless UI
- **Icons**: Heroicons
- **Authentication**: (To be implemented)
- **Deployment**: (To be determined)

## License

MIT
