import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../contexts/UserContext';
import { updateUser } from '../actions/userActions';
import './styles/forms.css';

export function EditProfile() {

  let history = useHistory();
  const { user, redefineUser } = useContext(UserContext);

  if (!user._id) history.push('/login')

  interface event {
    preventDefault: () => void;
  }

  function acceptChanges(e: event) {
    e.preventDefault();

    const newUser = {
      _id: user._id,
      name: inputName.current?.value,
      bio: inputBio.current?.value,
      image: inputImage.current?.value,
      twitter: inputTwitter.current?.value,
      instagram: inputInstagram.current?.value
    }

    updateUser(newUser).then(response => {
      if (response.nModified) {
        redefineUser(newUser);
        history.push('/profile')
      }
    })

  }

  const inputName = useRef<HTMLInputElement>(null);
  const inputBio = useRef<HTMLInputElement>(null);
  const inputImage = useRef<HTMLInputElement>(null);
  const inputTwitter = useRef<HTMLInputElement>(null);
  const inputInstagram = useRef<HTMLInputElement>(null);


  return (

    <div className="container">
      <form className="form" onSubmit={acceptChanges}>

        <ul>
          <li><h3 className="text-center form-title">Edit Profile</h3></li>
          <li><input ref={inputName} className="input full-width" placeholder="Name" id="name" type="text" defaultValue={user.name} /></li>
          <li><input ref={inputBio} className="input full-width" placeholder="Bio" id="bio" type="text" defaultValue={user.bio} /></li>
          <li><input ref={inputImage} className="input full-width" placeholder="Profile image" id="image" type="text" defaultValue={user.image} /></li>
          <li><input ref={inputTwitter} className="input full-width" placeholder="Twitter link" id="twitter" type="text" defaultValue={user.twitter} /></li>
          <li><input ref={inputInstagram} className="input full-width" placeholder="Instagram link" id="instagram" type="text" defaultValue={user.instagram} /></li>
          <li><button className="button-primary full-width" id="accept">Accept</button></li>
        </ul>

      </form>
    </div>

  )
}