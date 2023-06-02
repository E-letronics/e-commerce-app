import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { SignInFormDto } from './dto/SignInEventDto';

function SignIn() {
  const [emailStyle, setEmailStyle] = useState(styles.input)
  const [passwordStyle, setPasswordStyle] = useState(styles.input)
  const [emailRequired, setEmailRequired] = useState('')
  const [passwordRequired, setPasswordRequired] = useState('')
  const [signinForm, setSigninForm] = useState<SignInFormDto>({});

  function handleEmailChange(event: any) {
    setEmailStyle(styles.input);
    setEmailRequired('');

    setSigninForm((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function handlePasswordChange(event: any) {
    setPasswordStyle(styles.input);
    setPasswordRequired('');

    setSigninForm((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (signinForm.email === undefined || signinForm.email === '') {
      setEmailStyle(styles.invalid_input)
      setEmailRequired('Email is Required');
    }
    if (signinForm.password === undefined || signinForm.password === '') {
      setPasswordStyle(styles.invalid_input)
      setPasswordRequired('Password is Required');
    }
  }
  return (
    <div className={styles.signin}>
      <div className={styles.signin_box}>
        <div className={styles.title}>
          <h1>Log in</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label_wrapper}>
            <div className={styles.label_header}>
              <h3 className={styles.label}>Email</h3>
              <p className={styles.required}>{emailRequired}</p>
            </div>
            <input
              className={emailStyle}
              placeholder="Email"
              name="email"
              type="text"
              onChange={handleEmailChange}
            />
          </label>
          <label className={styles.label_wrapper}>
            <div className={styles.label_header}>
                <h3 className={styles.label}>Password</h3>
                <p className={styles.required}>{passwordRequired}</p>
              </div>
            <input
              className={passwordStyle}
              placeholder="Password"
              name="password"
              type="text"
              onChange={handlePasswordChange}
            />
          </label>
          <button className={styles.btn} type="submit">
            Log in
          </button>
        </form>
        <div className={styles.footer}>
          <p className={styles.fyp}>Forgot your password?</p>
          <p className={styles.acc}>Create an account</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
