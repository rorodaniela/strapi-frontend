# WRIGHT PARTNERS STRAPI FRONTEND

Wright Partners website using react nextjs and material UI for framework css.

## Prerequisites

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/rorodaniela/strapi-frontend.git
```

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```
Then run the app with:

```
npm run develop
```

The app should now be up and running at http://localhost:3000 🚀

# Building and Deploying the app using Firebase

If you wanted deploy the app, you should build the site with `npm run deploy` and it will create `out` folder.

    npm install
    npm run deploy

You should run `npm run deploy` again any time you make changes to the site.

After build, then initiate project to hosting to firebase.

- Install Firebase CLI
```
npm install -g firebase-tools
```
- Initiate Project
-
```
firebase login
firebase init
```
- Deploy to Firebase Hosting 
```
firebase deploy
```


If you have any update on the app, you should re-buid using `npm run deploy` and re-deploy using `firebase deploy`

```
npm run deploy
firebase deploy
```






