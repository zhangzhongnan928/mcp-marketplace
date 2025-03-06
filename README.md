# MCP Marketplace

A marketplace for Model Context Protocol (MCP) services that integrates with Claude and other AI assistants.

## About

MCP Marketplace is a platform that allows developers to create and publish Model Context Protocol (MCP) services that can be easily integrated with AI assistants like Claude and Cursor. It provides a simplified workflow for users to discover, purchase, and immediately use these services within their AI assistants.

## Project Status

This is a front-end mockup to validate the user experience for an MCP marketplace. It demonstrates the core user journeys:

1. Discovering available MCP services
2. Viewing detailed information about services
3. One-click integration with Claude and other AI assistants
4. Information for developers interested in creating MCP services

## Features

- Discover MCP services across various categories
- One-click integration with Claude and other MCP-compatible AI assistants
- Secure authentication and authorization
- Developer tools for creating and publishing MCP services
- Usage analytics and billing management

## Project Structure

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
- `/public` - Static files
  - `logo.svg` - MCP Marketplace logo

## Screenshots

*(Screenshots will be added once the initial implementation is deployed)*

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
