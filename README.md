# login-register-mern

Welcome to the login-register-mern project! This project demonstrates the implementation of a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring user authentication and various user management functionalities.

## Project Overview

In this project, we will create a MERN Stack App with a login sys. We'll cover the creation of login, registration, profile, and reset password routes, and explore how to send emails from the Node.js backend application.

## Getting Started

To work with this project, follow the steps outlined below:

1. Download Project: Clone or download the project from the provided link.
2. Configuration:

* Client Configuration:
    * Navigate to the client folder.
    * Create a new file named .env.
    * Inside the .env file, add the following code:

        REACT_APP_SERVER_DOMAIN='<server_domain>'  # example: 'http://localhost:8080'

* Server Configuration:
    * Navigate to the server folder.
    * Create a new file named config.js.
    * Inside the config.js file, add the following code:

        export default {
            JWT_SECRET: "<secret>",
            EMAIL: "<your_testing_email>",
            PASSWORD: "<your_testing_email_password>",
            ATLAS_URI: "<MONGODB_ATLAS_URI>"
        }
    
    Note: The ATLAS_URI is essential for the project to function correctly.

3. Environment Variables: Ensure all variables mentioned above (REACT_APP_SERVER_DOMAIN, JWT_SECRET, EMAIL, PASSWORD, ATLAS_URI) are set in your project. Make sure to set the ATLAS_URI variable to your MongoDB Atlas URI. Failure to set ATLAS_URI will result in the project not functioning properly.

4. Start Project: After configuring the environment variables, you can start the project by running both the client and server components.

# Conclusion 

By following these instructions, you should have the login-register-mern project up and running. Feel free to explore the codebase and customize it to fit your requirements. If you encounter any issues or have any questions, please refer to the project documentation or reach out to the project maintainers for assistance.