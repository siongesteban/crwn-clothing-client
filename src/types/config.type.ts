export interface Env extends NodeJS.ProcessEnv {
  REACT_APP_FIREBASE_API_KEY: string;
  REACT_APP_FIREBASE_APP_ID: string;
  REACT_APP_FIREBASE_AUTH_DOMAIN: string;
  REACT_APP_FIREBASE_DATABASE_URL: string;
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
  REACT_APP_FIREBASE_PROJECT_ID: string;
  REACT_APP_FIREBASE_STORAGE_BUCKET: string;

  REACT_APP_STRIPE_PUBLISHABLE_KEY: string;

  REACT_APP_PAYMENT_SERVICE_BASE_URL: string;
}
