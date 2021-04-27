import { Link, useHistory } from 'react-router-dom'
import './styles/UserProfile.css'
import UserDefaultImage from '../images/user.png';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ModalContext } from '../contexts/ModalContext';

export function UserProfile() {

  let history = useHistory();
  const { openModal, closeModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  // Events
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Onload
  if (!user._id) {
    history.push('/login')
  }
  
  useEffect(() => {
    return
    //
  }, [user])

  return (

    user ?
      <div className="container">
        <ul className="text-center profile">
          <div onClick={openModal} className="sign-out">
            <i className="fa fa-cog fa-3x"></i>
          </div>
          <div className="profile-image-container">
            <div className="profile-image">
              <img id="image" alt={user.name} src={user.image ? user.image : UserDefaultImage} />
            </div>
          </div>
          <li className="profile-bio">
            <h2 id="name">{user.name}</h2>
            <h3 id="bio">{user.bio}</h3>
          </li>

          {
            user.twitter || user.instagram ?
              <li className="profile-links">
                {user.twitter && <a target="_blanc" id="twitter" href={user.twitter}><i className="fab fa-twitter fa-2x"></i></a>}
                {user.instagram && <a target="_blanc" id="instagram" href={user.instagram}><i className="fab fa-instagram fa-2x"></i></a>}
              </li> : ''
          }

          <li className="profile-actions">
            <Link to="/notes" className="link">Notes</Link>
            <Link to="/edit-profile" className="link">Edit</Link>
          </li>
        </ul>
      </div> : <div className="loading">Loading...</div>

  )
}