Craxino Next.js Project
Welcome to the GitHub repository for the Craxino Next.js Project, a modern web application built using Next.js 14. This project is designed to demonstrate a robust form submission and data validation system with a backend powered by MongoDB. You can view the live deployment of this project at https://craxino.vercel.app/.

Features
Form Submission: Users can submit their data through a user-friendly interface.
Data Validation: Ensures data integrity with specific validation rules:
Email: Must be unique.
Phone Number: Must be unique.
DOB: Must follow a valid date format.
Password: Alphanumeric with a minimum of 6 characters, including at least one uppercase letter and one number.
Data Persistence: Submitted data is securely stored in MongoDB.
Redux for State Management: Utilizes Redux for efficient and reliable state handling across the application.
View Saved Data: Users can access a link to view the form populated with their saved data.
Environment Setup
Before running the project, you need to set up the following environment variables in a .env file:

makefile
Copy code
MONGODB_URI=YOUR_MONGODB_URI
NEXT_PUBLIC_DOMAIN=YOUR_DOMAIN
Replace YOUR_MONGODB_URI with your MongoDB connection string and YOUR_DOMAIN with the domain where your application is hosted.

Installation
To install all dependencies, run the following command in your terminal:

css
Copy code
npm i
Running the Project
To start the development server, execute:

arduino
Copy code
npm run dev
Contributing
Contributions to this project are welcome. Please ensure that your code adheres to the existing code style and that all tests pass before submitting a pull request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Support
If you encounter any issues or have questions, please file an issue on the GitHub issue tracker.

Thank you for checking out the Craxino Next.js Project. We hope this project serves as a valuable resource for your development endeavors.
