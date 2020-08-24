import React from 'react';

import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';

import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class Masuk extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            email : '',
            password : ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]:value })
    }

    render() {
        return (
                <div className='sign-in'>
                <h2>Saya sudah punya akun</h2>
                <span>Masuk dengan email dan password anda</span>

                
                <form onSubmit={this.handleSubmit}>                                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"                       
                        required />                   
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.email}  
                        label="password"                      
                        required />  

                    <div className="tombol">
                        <CostumButton type="submit"> Masuk </CostumButton> 
                        <CostumButton onClick={signInWithGoogle} isGoogleSignIn>
                            Masuk dengan Google
                        </CostumButton> 
                    </div>
                </form>
            </div>
            );
    }
}

export default Masuk;