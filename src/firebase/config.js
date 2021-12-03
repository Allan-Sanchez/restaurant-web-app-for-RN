const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_DATABASEURL,
    VITE_STORAGEBUCKET,
    VITE_PROJECTID,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
  } = import.meta.env;
  const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    databaseURL: VITE_DATABASEURL,
    storageBucket: VITE_STORAGEBUCKET,
    projectId: VITE_PROJECTID,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
  };
  
  export default firebaseConfig;
  