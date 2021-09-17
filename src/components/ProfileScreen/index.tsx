import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { selectUser } from '../../features/useSlice';
import Nav from '../Nav';
import './index.css';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://archive.org/download/HeaderIconUser/Header-Icon-User.png"
            alt=""
          />
        </div>
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
        </div>
        <div className="profileScreen__plans">
          <h3>Plans</h3>
          <p />
          <button
            type="button"
            className="profileScreen_signOut"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
