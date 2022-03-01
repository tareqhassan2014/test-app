```ch

git init
npm init -y
mkdir src
touch .gitignore .env src/server.ts
yarn add express dotenv

```

### Heroku deploy command

```ch
heroku login
heroku git:remote -a [project-name]
git push heroku master

```
