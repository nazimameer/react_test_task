# Craxino Next.js Project

This repository contains the Craxino Next.js application, a sophisticated web platform built with Next.js 14 and MongoDB. It focuses on robust form submission and data validation, demonstrating modern web development practices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Environment Setup](#environment-setup)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Craxino Next.js Project offers a cutting-edge user experience in data submission and validation, leveraging Next.js, MongoDB, and Redux. It is designed to showcase advanced features such as unique email and phone number validation, secure password handling, and efficient state management.

## Features

### Form Submission and Validation

- **User Data Submission**: Interactive interface for user data entry.
- **Data Validation**: Comprehensive validation rules for user inputs:
  - **Email**: Must be unique.
  - **Phone Number**: Must be unique.
  - **DOB**: Validates date format.
  - **Password**: Enforces a strong password policy.

### Data Persistence

- **MongoDB**: Secure storage and retrieval of user data.

### Redux for State Management

- **Redux**: Efficient state management throughout the application.

### View Saved Data

- **Data Access**: Users can view and interact with their saved data.

## Environment Setup

Set up the required environment variables in a `.env` file:

MONGODB_URI=YOUR_MONGODB_URI
NEXT_PUBLIC_DOMAIN=YOUR_DOMAIN

## Installation

Install all necessary dependencies:

npm i

## Running the Project

To launch the development server:

npm run dev


## Contributing

Contributions are welcome. Please adhere to the project's code standards and ensure all tests are passed before submitting a pull request.

## License

This project is under the MIT License. For more details, see the [LICENSE](LICENSE) file.

---

For any queries or issues related to the Craxino Next.js Project, please open an issue on this repository.
