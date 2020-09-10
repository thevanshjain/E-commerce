import React from 'react';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCartHidden } from '../../redux/cart/cart-selector';
import  { selectCurrentUser} from '../../redux/user/user-selector';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';
import './Header-styles.scss';
import {HeaderContainer, LogoContainer,OptionLink,OptionsContainer} from './Header-style';
const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'> 
            <Logo className='logo' /> 
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP    
            </OptionLink> 
            <OptionLink to='/shop'>
                CONTACT    
            </OptionLink>    
            {currentUser ? (
                <OptionLink onClick={()=>auth.signOut()}>
                     SIGN OUT 
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>

            )}
            <CartIcon />    
        </OptionsContainer>
        {
            hidden  ? null :
            <CartDropDown />
        }
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})




export default connect(mapStateToProps)(Header);