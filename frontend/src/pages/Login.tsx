import { useContext, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { authenticateUser } from '../actions/userActions';
import './styles/forms.css';
import Cookies from 'js-cookie';

export function Login() {

  let history = useHistory();

  const { redefineUser, connectLoggedUser, user } = useContext(UserContext);

  const [registerMessage, setRegisterMessage] = useState('');

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  // Events
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
          Cookies.set('_user_id', response._id, { expires: 1, path: '' })
          redefineUser(response);
          history.push('/profile')
        }
      })

  }

  // Onload
  connectLoggedUser()
  if (user._id) history.push('/profile')

  return (

    <div className="container">
      <form className="form" onSubmit={handleLogin}>

        <ul>
          <li><h3 className="text-center form-title">Login</h3></li>
          <li className="message text-center">{registerMessage ? registerMessage : ''}</li>
          <li><input ref={inputEmail} className="input full-width" placeholder="Email" id="email" type="email" /></li>
          <li><input ref={inputPassword} className="input full-width" placeholder="Password" id="password" type="password" /></li>
          <li><button type="submit" className="button-primary full-width" id="login">Login</button></li>
          <li><p className="text text-center"><a className="link" href="/#">Forgot your password?</a></p></li>
          <li><p className="font_1-5x text-center">Don't have an account? <Link className="link" to="/register">Register</Link></p></li>
        </ul>

      </form>
    </div>

  )
}