import React from 'react';
import styles from './SignIn.module.css';

function SignIn() {
  function handleSubmit(event: any) {
    event.preventDefault();
  }
  
  return (
    <div className={styles.signin}>
      <div className={styles.signin_box}>
        <div className={styles.title}>
          <h1>Log in</h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label_wrapper}>
            <h3 className={styles.label}>Email</h3>
            <input
              className={styles.input}
              placeholder="Email"
              name="email"
              type="text"
            />
          </label>
          <label className={styles.label_wrapper}>
            <h3 className={styles.label}>Password</h3>
            <input
              className={styles.input}
              placeholder="Password"
              name="password"
              type="text"
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
