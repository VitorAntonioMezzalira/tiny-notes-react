import { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUser } from '../actions/userActions';
import './styles/forms.css';

export function RegisterForm() {

  interface UserForTest {
    name: string;
    email: string;
    password: string;
    repassword: string;
    error: string;
  }

  interface RegisterMessage {
    message: string;
    type: string;
  }

  interface Event {
    preventDefault: () => void;
  }

  let history = useHistory();

  const [registerMessage, setRegisterMessage] = useState('');
  const [isRegisterMessageError, setIsRegisterMessageError] = useState(Boolean);

  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputRepassword = useRef<HTMLInputElement>(null);

  function testErrorsInRegister(userForTest: UserForTest) {
    // invalid name
    if (userForTest.name === '') {
      userForTest.error = 'Invalid name';
      return userForTest;
    };
    // invalid email
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(userForTest.email)) {
      userForTest.error = 'Invalid email';
      return userForTest;
    };
    // password do not match
    if (userForTest.password !== userForTest.repassword) {
      userForTest.error = 'Password do not match';
      return userForTest;
    };
    // password to short
    if (userForTest.password.length < 8) {
      userForTest.error = 'Password must be 8 characters';
      return userForTest;
    };
    const data = {
      name: userForTest.name,
      email: userForTest.email,
      password: userForTest.password,
      error: ''
    };
    return data
  }

  function getData() {
    return {
      name: inputName.current?.value ?? '',
      email: inputEmail.current?.value ?? '',
      password: inputPassword.current?.value ?? '',
      repassword: inputRepassword.current?.value ?? '',
      error: ''
    }
  };

  function handleRegister(e: Event) {

    e.preventDefault()

    const dataForTest = getData();
    const result = testErrorsInRegister(dataForTest)

    if (result.error) {

      setIsRegisterMessageError(true)
      setRegisterMessage(result.error)

    } else {

      createUser(result.name, result.email, result.password)
        .then((response) => {
          if (response.error) {

            setIsRegisterMessageError(true);
            setRegisterMessage(response.error);

          } else {

            setIsRegisterMessageError(false);
            setRegisterMessage('Register success');

            history.push('/login')

          }
        })
    }
  }

  useEffect(() => {
    return
    //
  }, [registerMessage]);

  return (
    <form className="form" onSubmit={handleRegister}>

      <ul>
        <li><h3 className="text-center form-title">Create your account</h3></li>
        {
          registerMessage ?
            <li className={ (isRegisterMessageError ? 'error-message' : 'success-message') + ' message text-center'}>{registerMessage}</li> :
            ''
        }
        <li><input ref={inputName} className="input full-width" placeholder="Name" id="name" type="text" /></li>
        <li><input ref={inputEmail} className="input full-width" placeholder="Email" id="email" type="email" /></li>
        <li><input ref={inputPassword} className="input full-width" placeholder="Password" id="password" type="password" /></li>
        <li><input ref={inputRepassword} className="input full-width" placeholder="Confirm password" id="repassword" type="password" /></li>
        <li><button className="button-primary full-width" id="register">Register</button></li>
        <li><p className="text text-center">Already have an account? <Link className="link" to="/login">Login</Link></p></li>
      </ul>

    </form>
  )
}