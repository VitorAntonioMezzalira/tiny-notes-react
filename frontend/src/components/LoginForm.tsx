import { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { authenticateUser } from '../actions/userActions';
import './styles/forms.css';

export function LoginForm() {

  const { redefineUser } = useContext(UserContext);

  const [registerMessage, setRegisterMessage] = useState('');

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  let history = useHistory();

  interface Event {
    preventDefault: () => void;
  }

  function handleLogin(e: Event) {

    e.preventDefault()

    const emailForTest = inputEmail.current!.value;
    const passwordForTest = inputPassword.current!.value;

    authenticateUser(emailForTest, passwordForTest)
      .then(response => {
        if (response.error) {
          setRegisterMessage(response.error);
        } else {
          setRegisterMessage('Login success!');
          redefineUser(response);
          history.push('/profile')
        }
      })

  }

  return (
    <form className="form" onSubmit={handleLogin}>

      <ul>
        <li><h3 className="text-center form-title">Login</h3></li>
        <li className="message text-center">{registerMessage ? registerMessage : ''}</li>
        <li><input ref={inputEmail} className="input full-width" placeholder="Email" id="email" type="email" /></li>
        <li><input ref={inputPassword} className="input full-width" placeholder="Password" id="password" type="password" /></li>
        <li><button className="button-primary full-width" id="login">Login</button></li>
        <li><p className="text text-center"><a className="link" href="/#">Forgot your password?</a></p></li>
        <li><p className="text text-center">Don't have an account? <Link className="link" to="/register">Register</Link></p></li>
      </ul>

    </form>
  )
}