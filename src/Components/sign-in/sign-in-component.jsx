import React from 'react';
import FormInput from '../../Components/Form-input/Form-input-Component'
import './sign-in-styles.scss';
import CustomButton from '../custom-button/custom-button-component';
//import { ReactComponent } from '*.svg';
import SignInSignUp from '../../pages/sign-in-sign-up/sign-in-sign-up-component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'' , password: ''})
    };

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({ [name]:value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2> 
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        label="Email"
                        handleChange={this.handleChange}
                        required/>
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.email} 
                        label='Password'
                        handleChange={this.handleChange}
                        required/>

                    <CustomButton type="submit"> Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;