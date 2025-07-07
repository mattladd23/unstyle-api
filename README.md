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
