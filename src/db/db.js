import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACkaLXcLDcVd2eoH5Sc0o5IftmjeI2OpY",
  authDomain: "myecommerce-97a06.firebaseapp.com",
  projectId: "myecommerce-97a06",
  storageBucket: "myecommerce-97a06.firebasestorage.app",
  messagingSenderId: "941878644787",
  appId: "1:941878644787:web:f87189232e701dc044d346",
  measurementId: "G-5X4PC5CLNF"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db