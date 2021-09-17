/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import './index.css';
import SignupScreen from '../SignupScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button
          type="button"
          className="loginScreen_button"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <span>
                Ready to watch? Enter your email to create or restart your
                membership
              </span>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    type="button"
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
