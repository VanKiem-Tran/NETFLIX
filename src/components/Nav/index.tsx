import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './index.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          aria-hidden="true"
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push('/profile')}
          aria-hidden="true"
          className="nav__avata"
          src="https://archive.org/download/HeaderIconUser/Header-Icon-User.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
