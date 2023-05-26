import styles from './SignUp.module.css';
import { useState } from 'react';
import { SignUpFormDto } from './dto/SignUpEventDto';

function SignUp() {
  const [signupForm, setSignupForm] = useState<SignUpFormDto>({});

  function handleInputChange(event: any) {
    setSignupForm((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className={styles.signup}>
      <div className={styles.leftscreen}>
        <div className={styles.icon}>e</div>
        <h1>Create your free account</h1>
      </div>
      <div className={styles.rightscreen}>
        <div className={styles.form_wrapper}>
          <div className={styles.form_title}>
            <h1>Sign Up</h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label_wrapper}>
              <h3 className={styles.label}>Name</h3>
              <input
                className={styles.input}
                onChange={handleInputChange}
                placeholder="Name"
                name="name"
                type="text"
              />
            </label>
            <label className={styles.label_wrapper}>
              <h3 className={styles.label}>Email</h3>
              <input
                className={styles.input}
                onChange={handleInputChange}
                placeholder="Email"
                name="email"
                type="email"
              />
            </label>
            <label className={styles.label_wrapper}>
              <h3 className={styles.label}>Password</h3>
              <input
                className={styles.input}
                onChange={handleInputChange}
                placeholder="Password"
                name="password"
                type="password"
              />
            </label>
            <button className={styles.btn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
