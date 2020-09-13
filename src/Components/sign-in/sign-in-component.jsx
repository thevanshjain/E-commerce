import React, {useState}  from 'react';
import {connect} from 'react-redux';
import FormInput from '../../Components/Form-input/Form-input-Component'
import './sign-in-styles.scss';
import CustomButton from '../custom-button/custom-button-component';

import {
    googleSignInStart,
    emailSignInStart
  } from '../../redux/user/user-actions';

const  SignIn = ({emailSignInStart, googleSignInStart}) => {
    
    const [userCredientials, setCredientials
    ] = useState({email:'', password: ''});


    const { email, password } = userCredientials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value,name} = event.target;
        setCredientials({...userCredientials, [name]:value });
    };

        return (
            <div className="sign-in">
                <h2>I already have an account</h2> 
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={email} 
                        label="Email"
                        handleChange={handleChange}
                        required/>
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        label='Password'
                        handleChange={handleChange}
                        required/>
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })) 
})


export default connect(null, mapDispatchToProps)(SignIn);