import styles from './SignUp.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Errors } from './AppConstants';
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const [registered, setRegistered] = useState('');
  const [emailStyle, setEmailStyle] = useState(styles.input);
  const [emptyPass, setEmptyPass] = useState('');
  const [passStyle, setPassStyle] = useState(styles.input);
  const navigate = useNavigate();

  function handleInputChange(event: any) {
    setEmailStyle(styles.input);
    setRegistered('');
    setPassStyle(styles.input);
    setEmptyPass('');
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    if(!event.target.password.value){
      setPassStyle(styles.invalid);
      setEmptyPass('Password is required');
      return;
    }

    const request = {
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value
    }
    console.log(request);
    
    axios({
      method: 'POST',
      baseURL: 'http://localhost:3001/',
      url: '',
      data: request,
    })
    .then(({data}: any) => {
      console.log(data);
      navigate('/signin');

    })
    .catch((err:any) => {
      console.log(err.response.data);
      if(err.response.data.code === Errors.EMAIL_REGISTERED){
        setRegistered('Email already registered');
        setEmailStyle(styles.invalid);
      }
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
                placeholder="Name"
                name="name"
                type="text"
              />
            </label>
            <label className={styles.label_wrapper}>
              <div className={styles.label_header}>
                <h3 className={styles.label}>Email</h3>
                <p className={styles.warning}>{registered}</p>
              </div>
              <input
                className={emailStyle}
                onChange={handleInputChange}
                placeholder="Email"
                name="email"
                type="email"
              />
            </label>
            <label className={styles.label_wrapper}>
              <div className={styles.label_header}>
                <h3 className={styles.label}>Password</h3>
                <p className={styles.warning}>{emptyPass}</p>
              </div>
              <input
                className={passStyle}
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
