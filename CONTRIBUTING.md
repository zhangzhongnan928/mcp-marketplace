# Contributing to MCP Marketplace

Thank you for your interest in contributing to the MCP Marketplace! This project aims to create an open ecosystem for Model Context Protocol (MCP) services that can be easily integrated with AI assistants like Claude and Cursor.

We welcome contributions from everyone, regardless of your experience level. This document will guide you through the contribution process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Community Governance](#community-governance)
- [Reward System](#reward-system)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Ways to Contribute

There are many ways to contribute to the MCP Marketplace project:

### For Developers
- **Code contributions**: Implement new features, fix bugs, or improve performance
- **Code reviews**: Review pull requests from other contributors
- **Documentation**: Improve technical documentation or create tutorials
- **Testing**: Write tests, report bugs, or verify fixes

### For MCP Service Creators
- **Service development**: Create new MCP services for the marketplace
- **Service testing**: Test service integration with different AI assistants
- **Best practices**: Share knowledge and best practices for service development

### For UX/UI Contributors
- **Design improvements**: Enhance the user interface and experience
- **Accessibility**: Ensure the platform is accessible to all users
- **User research**: Conduct user research and provide insights

### For Community Contributors
- **Community support**: Help answer questions in forums or discussions
- **Content creation**: Write blog posts, create videos, or social media content
- **Translation**: Help translate the platform into different languages
- **Governance participation**: Participate in governance discussions and decisions

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn
- Git

### Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mcp-marketplace.git
   cd mcp-marketplace
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the application

### Project Structure
- `/app` - Next.js application routes and pages
- `/components` - Reusable React components
- `/public` - Static files (images, fonts, etc.)
- `/styles` - Global styles and theme definitions
- `/types` - TypeScript type definitions
- `/utils` - Utility functions and helpers
- `/lib` - Library code and API clients
- `/docs` - Documentation files

## Development Workflow

1. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

2. Make your changes, following the project's coding standards

3. Write or update tests for your changes

4. Ensure all tests pass:
   ```bash
   npm run test
   # or
   yarn test
   ```

5. Make sure your code follows the project's style guide:
   ```bash
   npm run lint
   # or
   yarn lint
   ```

6. Commit your changes with a descriptive commit message:
   ```bash
   git commit -m "Add feature: your feature description"
   # or
   git commit -m "Fix: issue you fixed"
   ```

7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Create a pull request to the main repository

## Pull Request Process

1. Fill out the pull request template completely
2. Link any related issues using keywords (e.g., "Fixes #123")
3. Make sure your PR passes all CI checks
4. Request reviews from relevant team members
5. Address any review comments or feedback
6. Once approved, a maintainer will merge your PR

## Community Governance

The MCP Marketplace uses a decentralized governance model where community members can participate in decision-making. See our [Decentralized Governance](docs/DecentralizedGovernance.md) document for more details.

As a contributor, you can:

1. Join governance discussions on our forums
2. Vote on proposals (if you hold governance tokens)
3. Submit improvement proposals
4. Participate in working groups

## Reward System

We believe in recognizing and rewarding contributions. As outlined in our governance model:

1. Code contributions, documentation, testing, and other valuable contributions are eligible for rewards
2. Contributors earn reputation in the system based on the quality and impact of their work
3. Reputation and contributions may translate to governance tokens in the future
4. Regular contributors may be invited to join working groups or take on leadership roles

## Communication Channels

- **GitHub Issues**: For bug reports, feature requests, and specific tasks
- **GitHub Discussions**: For general discussions about the project
- **Discord**: For real-time communication with the community (link to be added)
- **Weekly Community Calls**: Join our open community calls to discuss progress and plans

## Questions?

If you have any questions or need help, please:

1. Check the existing documentation
2. Search for similar questions in GitHub Issues or Discussions
3. Ask in the appropriate communication channel

Thank you for contributing to the MCP Marketplace! Your efforts help build a better platform for everyone.
