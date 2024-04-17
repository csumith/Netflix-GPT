import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignup, setisSignup] = useState(true);
  const [errorMessage, seterrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    //validate form
    //checkValidData(email,password)
    // console.log(email.current.value)
    // console.log(password.current.value)
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    //isSignup logic
    if (!isSignup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("isSignUpUser=", user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              seterrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log("signINUser=", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const togglefunction = () => {
    setisSignup(!isSignup);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          alt="img_not_found"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-40 m-auto left-0 right-0  p-12 bg-black bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl text-white p-2 my-2 ">
          {isSignup ? "SignIn" : "SignUp"}
        </h1>

        {!isSignup && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 text-white  m-auto left-0 right-0 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 text-white  m-auto left-0 right-0 w-full bg-gray-700"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 text-white m-auto left-0 right-0 w-full  bg-gray-700"
        ></input>

        <p className="text-red-700 py-2 text-xl font-bold">{errorMessage}</p>

        <button
          onClick={handleBtnClick}
          className="p-4 my-6 text-white bg-red-700 w-full rounded-lg"
        >
          {isSignup ? "SignIn" : "SignUp"}
        </button>

        <p className="p-4 text-white cursor-pointer" onClick={togglefunction}>
          {isSignup
            ? "New to netflix? Sign Up Now"
            : "Registered User Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
