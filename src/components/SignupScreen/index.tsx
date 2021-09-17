import React from 'react';
import { auth } from '../../firebase';
import './index.css';

function SignupScreen() {
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const register = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        /* eslint-disable no-console */
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  const signIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        /* eslint-disable no-console */
        console.log(authUser);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix?</span>
          <span
            className="signUpScreen__link"
            onClick={register}
            aria-hidden="true"
          >
            {' '}
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
