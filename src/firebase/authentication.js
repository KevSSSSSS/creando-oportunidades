import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const createUserWhitEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return null;
    });
};
