# Unstyle API

The Node.js/TypeScript web scraping API that powers [unstyle.dev](https://unstyle.dev/). It uses Puppeteer to scrape CSS initial values from the MDN Web Docs and returns them as a structured JSON payload.

:fist: See [unstyle-frontend](https://github.com/mattladd23/unstyle-frontend) for Unstyle's motivation and purpose!

## :key: Features

- :white_check_mark: Ethically scrapes CSS initial values from MDN web docs
- :white_check_mark: Built with TypeScript and ES Modules
- :white_check_mark: Outputs structured JSON for frontend application
- :white_check_mark: JSON data is saved to Amazon S3
- :white_check_mark: JSON payload is deployed serverlessly using AWS Lambda and API Gateway

## :hammer: Tech Stack

- TypeScript
- Node.js
- Puppeteer
- Vitest

:cloud: See [unstyle-lambda](https://github.com/mattladd23/unstyle-lambda) for Unstyle's full AWS Tech Stack

## :wrench: How It Works

1. `/api/update` triggers a Puppeteer-powered scrape of MDN CSS docs.
2. Scraped data is transformed into a structured JSON payload.
3. `/api/get` serves the latest JSON payload via API Gateway + Lambda.
4. Data is uploaded to Amazon S3.

## :computer: Develop

### Prerequisites

- Node.js installed (ideally >v20.18.0 LTS)

### Getting Started

1. Clone the repo using your protocol of choice.
2. Go into the repo `cd unstyle-api`.
3. Install Yarn globally `npm install --global yarn`.
4. Install Node.js dependencies `yarn install`.
5. Run the local development server `yarn dev`.
6. Go to [http://localhost:3001/api/get](http://localhost:3001/api/get) to get full output.
7. Go to [http://localhost:3001/api/update](http://localhost:3001/api/update) to create a test json output.

### Scripts

- `yarn dev` - starts local TypeScript Node server
- `yarn build` - transpiles source TypeScript code into production JavaScript code
- `yarn start` - starts local Node.js server with production code
- `yarn clean` - cleans tree and removes redundant temporary files
- `yarn test` - runs Vitest for unit and integration testing

---

Built by [Matt Ladd](https://www.linkedin.com/in/matt-ladd-216644121/) - always learning, always building. Any feedback is greatly appreciated :relaxed:.
