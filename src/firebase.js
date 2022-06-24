// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC-MQUm3M83rfNvAWbAiQF8myaQ2sn_65o",
  authDomain: "disney-plus-clone-3cb2d.firebaseapp.com",
  projectId: "disney-plus-clone-3cb2d",
  storageBucket: "disney-plus-clone-3cb2d.appspot.com",
  messagingSenderId: "1054509898219",
  appId: "1:1054509898219:web:5f0080a44ccc67f01261ae",
  measurementId: "G-70JFPYZ9Y1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
const storage = getStorage();
const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage };
export default db;
