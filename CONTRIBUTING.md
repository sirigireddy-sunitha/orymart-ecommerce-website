# Contributing to OryMart E-commerce

Welcome to the OryMart E-commerce project! We're excited to have you on board. This document outlines the process for contributing to our project.

## Branching Strategy

We follow a simplified Git Flow workflow:

- `main` - Production-ready code
- `develop` - Integration branch for features (default branch)
- `feature/*` - Feature branches (e.g., `feature/user-authentication`)
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hotfix branches for critical production issues

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/orymart-ecommerce-website.git
   cd orymart-ecommerce-website
   ```
3. Set up the upstream:
   ```bash
   git remote add upstream https://github.com/sirigireddy-sunitha/orymart-ecommerce-website.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

1. Always start from an up-to-date develop branch:
   ```bash
   git checkout develop
   git pull upstream develop
   ```

2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. Push your branch to your fork:
   ```bash
   git push -u origin feature/your-feature-name
   ```

5. Create a Pull Request (PR) from your fork's branch to `sirigireddy-sunitha:develop`

6. After your PR is approved, it will be merged into `develop`

## Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that don't affect the meaning of the code (white-space, formatting, etc.)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools and libraries

## Code Review Process

1. All code must be reviewed before merging to `develop`
2. At least one approval is required before merging
3. All automated tests must pass
4. Code should follow the project's coding standards

## Getting Help

If you need help or have questions, please open an issue in the repository.
