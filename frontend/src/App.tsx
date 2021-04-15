import { useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router';
import { EditProfile } from './components/EditProfile';
import { LoginForm } from './components/LoginForm';
import { NoteItem } from './components/NoteItem';
import { RegisterForm } from './components/RegisterForm';
import { UserProfile } from './components/UserProfile';
import { ModalContext } from './contexts/ModalContext';
import { UserContext } from './contexts/UserContext';
import './global.css'

function App() {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const { redefineUser } = useContext(UserContext);

  function disconectAccount() {
    closeModal()
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
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/notes" component={NoteItem} />
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
