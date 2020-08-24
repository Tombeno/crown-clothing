import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/toko'>
               BELANJA
            </Link>
            <Link className="option" to='/shop'>
               KONTAK
            </Link>
            {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          KELUAR
        </div>
      ) : (
        <Link className='option' to='/login'>
          MASUK
        </Link>
      )}
        </div>
    </div>
);

export default Header;
