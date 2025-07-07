# Unstyle API

The Node.js/TypeScript web scraping API that powers the unstyle.dev frontend. It uses Puppeteer to scrape CSS initialValues from the MDN Web Docs and returns them as a structured JSON payload.

:fist: See [unstyle-frontend](https://github.com/mattladd23/unstyle-frontend) for Unstyle's motivation and purpose!

## :key: Features

- :white_check_mark: Ethically scrapes CSS initial values from MDN web docs
- :white_check_mark: Built with TypeScript and ES Modules
- :white_check_mark: Outputs structured JSON for frontend application
- :white_check_mark: JSON data is saved to Amazon S3
- :white_check_mark: JSON payload is deployed serverlessly using AWS Lambda and API Gateway

## :wrench: Tech Stack

- TypeScript
- Node.js
- Puppeteer
- Vitest

:cloud: See [unstyle-lambda](https://github.com/mattladd23/unstyle-lambda) for Unstyle's full AWS Tech Stack

## :computer: Develop

### Prerequisites

- Node.js installed (ideally >v18.18.0 LTS)

### Getting started

1. Clone the repo using your protocol of choice.
2. Go into the repo `cd unstyle-api`.
3. Install Yarn globally `npm install --global yarn`.
4. Install Node.js dependencies `yarn install`.
5. Run the local development server `yarn dev`.
6. Go to [http://localhost:3001/api/get](http://localhost:3001/api/get) to get full output.
7. Go to [http://localhost:3001/api/update](http://localhost:3001/api/update) to create a test json output.
8. (optional) clean tree and remove redundant test files `yarn clean`.
9. Build TypeScript code for production `yarn build`.
10. Test production JavaScript code in the browser `yarn start`.
11. Run Vitest for unit and integration testing `yarn test`.
