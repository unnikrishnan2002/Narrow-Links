import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button
            className="log-in"
            onClick={() => loginWithRedirect()}
            type="button"
        >
            <i class="fa-solid fa-unlock-keyhole"></i>
            Log In
        </button>
    )
}

export default LoginButton
