import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LogoURL } from "../utils/constant";

const Header = () => {
  let user = useSelector((store) => store.user);
  // const {photoURL} = user
  console.log("store==", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unSubScribe when component is unmount
  }, []);
  return (
    <div className="w-screen absolute px-12 py-8 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LogoURL} alt="Header_LOGO" />
      {user && (
        <div className="flex">
          <img className="w-12 h-12" alt="UserImg" src={user?.photoURL} />
          <button
            className="font-bold   text-white rounded-lg"
            onClick={handleSignOut}
          >
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
