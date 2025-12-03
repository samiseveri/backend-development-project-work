1. Setup MongoDB on your local PC by first creating an account at MongoDB website and then downloading the community server ''MongoDB Compass'' and installing the .msi file from the link below.
https://www.mongodb.com/try/download/community

2. Do these initial installations into git bash (or other terminal you use) by copy-pasteing the line of code below.
mkdir -p boardgame-site && cd boardgame-site && npm init -y && npm install express dotenv express-handlebars mongoose express-session cookie-parser bcrypt express-async-errors morgan && npm install --save-dev nodemon jest supertest && cp ../.env.example .env && echo "Project setup complete. Edit .env, then run: npm run dev