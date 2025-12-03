1. setup mongodb to local pc
https://www.mongodb.com/try/download/community

2. do theese inissial instalations to git bash
mkdir -p boardgame-site && cd boardgame-site && npm init -y && npm install express dotenv express-handlebars mongoose express-session cookie-parser bcrypt express-async-errors morgan && npm install --save-dev nodemon jest supertest && cp ../.env.example .env && echo "Project setup complete. Edit .env, then run: npm run dev