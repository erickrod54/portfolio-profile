import React from "react";
import { Link } from 'react-router-dom';

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo} from '../../assets/logo-letters.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className='logo'/>
    </Link>
  <div className="options">
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/sign-in-page'>
          SIGN IN
        </Link>
      }
  </div>
  </div>
);

export default Header;