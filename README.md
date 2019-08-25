# crwn-clothing-client

> A simple E-commerce app built with React written in Typescript.

Based on the app project from this great Udemy course [Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/complete-react-developer-zero-to-mastery/) and originally written in JavaScript.

This app was built during the course but with a different, or might be a better approach on things such as project structure (file/folder), naming conventions, services, etc.

Check out the [repo](https://github.com/ZhangMYihua/lesson-34) of the original project.

### Run Locally
```
git clone https://github.com/siongesteban/crwn-clothing-client.git

cd crwn-clothing-client

npm i

npm start
```

### Key Libraries
* [firebase](https://firebase.google.com/docs/web/setup)
* [redux](https://github.com/reduxjs/redux)
* [redux-logger](https://github.com/LogRocket/redux-logger)
* [redux-persist](https://github.com/rt2zz/redux-persist)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [reselect](https://github.com/reduxjs/reselect)
* [styled-components](https://github.com/styled-components/styled-components)

### Firebase
Follow [this guide](https://firebase.google.com/docs/web/setup) to create your own Firebase config.

### Stripe
The app uses Stripe as its payment API. You can get your own `publishable_key` by signing up an account.

### Payment Server
The [payment server](https://github.com/siongesteban/crwn-clothing-payment-server) should be running in order for the payment submission to work.

### Environment Variables
```
# Create files:
#  .env.development (required)
#  .env.production

# Firebase
REACT_APP_FIREBASE_API_KEY="abc"
REACT_APP_FIREBASE_APP_ID="abc"
REACT_APP_FIREBASE_AUTH_DOMAIN="abc.com"
REACT_APP_FIREBASE_DATABASE_URL="abcd.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="123"
REACT_APP_FIREBASE_PROJECT_ID="app"
REACT_APP_FIREBASE_STORAGE_BUCKET="" # optional

# Stripe
REACT_APP_STRIPE_PUBLISHABLE_KEY="key"

# Payment Service
REACT_APP_PAYMENT_SERVICE_BASE_URL="http://localhost:3001/" # Please include forward slash at the end!
```