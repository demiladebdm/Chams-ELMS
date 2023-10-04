import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // Josh
  apiKey: "AIzaSyAzvufRu_8wnDTbp9hp7LnegEHADZ1neaU",

  authDomain: "chams-83c1b.firebaseapp.com",

  databaseURL: "https://chams-83c1b-default-rtdb.firebaseio.com",

  projectId: "chams-83c1b",

  storageBucket: "chams-83c1b.appspot.com",

  messagingSenderId: "651088505135",

  appId: "1:651088505135:web:d69f145132012e412b59da",
};

// const firebaseConfig = {
//   // Dof
//   apiKey: "AIzaSyC4Qaoe9XJ2Jtar7-nsA2rO5pMRf8FdJXY",

//   authDomain: "chams-elms.firebaseapp.com",

//   databaseURL: "https://chams-83c1b-default-rtdb.firebaseio.com",

//   projectId: "chams-elms",

//   storageBucket: "chams-elms.appspot.com",

//   messagingSenderId: "554197890570",

//   appId: "1:554197890570:web:67e547550516a2313b11f3",

//   measurementId: "G-ZDH5F2FSVZ"
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// initialize database

export const db = getDatabase(app);
