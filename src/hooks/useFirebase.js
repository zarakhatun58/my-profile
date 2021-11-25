import { useState } from "react";
import initializeAuthentication from "./../firebase/firebase.init";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleRegister = (e) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    e.preventDefault();
  };

  return;
};

export default useFirebase;
