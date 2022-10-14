import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={"signings btn btn-primary"}
      onClick={() => loginWithRedirect()}
      type="button"
    >
      Log In
    </button>
  );
};

export default LoginButton;
