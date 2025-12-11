1. Setup MongoDB on your local PC by first creating an account at MongoDB website and then downloading the community server ''MongoDB Compass'' and installing the .msi file from the link below.
https://www.mongodb.com/try/download/community

2. Do these initial installations into git bash (or other terminal you use) by copy-pasteing the line of code below.
mkdir -p boardgame-site && cd boardgame-site && npm init -y && npm install express dotenv express-handlebars mongoose express-session cookie-parser bcrypt express-async-errors morgan && npm install --save-dev nodemon jest supertest && cp ../.env.example .env && echo "Project setup complete. Edit .env", then run: npm run dev

3. Start the server locally by navigating to the boardgame-site directory (cd .\boardgame-site\) and using the command npm start, then CTRL + Click on the http://localhost:3000 link after the server is running.



PROJECT ASSESSMENT SUMMARY – BOARD GAME HOBBYIST WEBSITE


Server-side application
The project is a full Node.js + Express web application running completely on the server.


Clear project structure
Routes, controllers, models, views, public assets, and configuration files are arranged in a modular fashion.


Persistent server storage
Everything important is stored on the server, not in the browser: users, passwords, games, events, sessions.


Authentication implemented
Login and registration are done with hashed passwords and verified credentials.


Sessions and cookies
Logging in establishes a secure session cookie. Data regarding the session is maintained on the server.


Authorization (user roles)
Admin has permissions different from a normal user. Admin can manage the games and events.


Template engine
Handlebars, used for server-side views with layouts, helps to avoid repeating code.


Multiple views

The website contains several pages, including login, register, games, events, admin forms, and error pages. CRUD functionality Games and events can be created, read, updated, and deleted via forms and routes. Error handling Custom 404 and 500 pages with middleware handling unexpected errors. Static assets From the public folder, the application serves CSS, client-side JS, and images. Routing and controllers separated Each resource - users, games, events - has its own router and controller file. Responsive and styled UI The layouts, CSS, and templates make the website usable and consistent in appearance. Accessibility considerations Uses semantic HTML, proper form labels, and readable structures. Local Development and Testing The site runs via “npm install” and “npm start” and includes basic automated tests. Short Overview: This project meets the course assignment requirements by providing a completely functional server-rendered web application, with proper authentication and authorization, utilizing templates, CRUD operations, routing, and session handling with persistent storage. It implements a maintainable codebase structure, following MVC principles. The website covers styling, responsiveness, and accessibility, showcasing all required technical features.