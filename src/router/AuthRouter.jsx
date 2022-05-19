import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRouter = ({ component }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/account" /> : component;
};

export default AuthRouter;
