interface Env extends NodeJS.ProcessEnv {
  REACT_APP_FIREBASE_API_KEY: string;
  REACT_APP_FIREBASE_APP_ID: string;
  REACT_APP_FIREBASE_AUTH_DOMAIN: string;
  REACT_APP_FIREBASE_DATABASE_URL: string;
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
  REACT_APP_FIREBASE_PROJECT_ID: string;
  REACT_APP_FIREBASE_STORAGE_BUCKET: string;
}

export const env = process.env as Readonly<Env>;
