# README

# Email Referrer

**Invite users to your platform with ease!** Email Referrer is a web application that helps you invite any user to start using your platform by just entering the email.

## Setup

### Prerequisites

- Developer environment with:
    - Ruby `$(cat .ruby-version)` installed.
    - Node.js `$(cat .nvmrc)` installed.
- MySQL database running

### Step-by-step setup

1. Clone the repository: `git clone git@github.com:mayankagnihotri7/EmailReferrals.git`
2. Run the setup script: `bin/setup`
   - This script installs all required dependencies for Ruby and React, and creates the `database.yml` file if it doesn't exist.
3. Start the app in development mode: `bin/dev`
   - This opens the app at http://localhost:3000 for development with features like live reloading.

## Tests and CI

Run `bin/ci` to execute all tests and checks for the app. This includes unit tests, integration tests, and code quality checks.
