import styles from './SignUp.module.css';
import { useState } from 'react';
import { SignUpFormDto } from './dto/SignUpEventDto';
import axios from 'axios';

function SignUp() {
  const [signupForm, setSignupForm] = useState<SignUpFormDto>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  function handleInputChange(event: any) {
    setSignupForm((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: any) {
    setEmail(signupForm.email!);
    setPassword(signupForm.password!);
    event.preventDefault();

    axios({
      method: 'POST',
      baseURL: 'http://api.fakeshop-api.com',
      url: '/users/signup',
      data: {
        email,
        password,
      },
    })
    .then(({data}: any) => {
      setResponse(data);
      localStorage.setItem('token', data.token);
    })
    .catch((err:any) => console.dir(err))
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
