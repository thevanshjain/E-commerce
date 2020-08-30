import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import './Header-styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'> 
            <Logo className='logo' /> 
        </Link>
        <div className='options'>
            <Link className='option' to='/shop/hats'>
                SHOP    
            </Link> 
            <Link className='option' to='/shop/hats'>
                CONTACT    
            </Link>    
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}> SIGN OUT </div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>

            }    
        </div>

    </div>
)
export default Header;