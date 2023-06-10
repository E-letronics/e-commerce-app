import styles from './SignUp.module.css';
import { useState } from 'react';
import { SignUpFormDto } from './dto/SignUpEventDto';
import axios from 'axios';

function SignUp() {
  const [signupForm, setSignupForm] = useState<SignUpFormDto>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [registered, setRegistered] = useState("");

  function handleInputChange(event: any) {
    setSignupForm((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: any) {
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    event.preventDefault();
    console.log(event.target.email, event.target.password)
    axios({
      method: 'POST',
      baseURL: 'http://localhost:3001/',
      url: '',
      data: {
        email,
        password,
      },
    })
    .then(({data}: any) => {
      setResponse(data);
      console.log(data);
    })
    .catch((err:any) => {
      console.log(err.response.data);
    })
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
              <p className={styles.registered}>Email already registered</p>
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
