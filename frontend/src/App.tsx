import { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router';
import { EditProfile } from './pages/EditProfile';
import { Notes } from './pages/Notes';
import { Register } from './pages/Register';
import { UserProfile } from './pages/Profile';
import { ModalContext } from './contexts/ModalContext';
import { UserContext } from './contexts/UserContext';
import './global.css'
import { Login } from './pages/Login';
import Cookies from 'js-cookie';

function App() {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const { redefineUser } = useContext(UserContext);

  function disconectAccount() {
    closeModal()
    Cookies.remove('_user_id')
    redefineUser({})
  }

  useEffect(() => {
    //
  }, [isModalOpen])

  return (

    <div className="interface">

      <header className="header"></header>
      <main className="main">

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/notes" component={Notes} />
        </Switch>

      </main>
      <footer className="footer" ></footer>

      {
        isModalOpen ? (
          <div id="modal" onClick={closeModal} className="modal-shadow">
            <ul className="modal">
              <li className="orange-color">Delete account</li>
              <li className="orange-color" onClick={disconectAccount}>Disconect</li>
              <li className="red-color" onClick={closeModal}>Cancel</li>
            </ul>
          </div>
        ) : ''
      }

    </div>


  );
}

export default App;
