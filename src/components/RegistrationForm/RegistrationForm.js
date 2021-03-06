import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';

import './RegistrationForm.css';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  
  state = { 
    error: null
   }

   handleSubmit = e => {
     e.preventDefault();
     const { email, user_name, password } = e.target;

     this.setState({ error: null });
     AuthApiService.postUser({
       email: email.value,
       user_name: user_name.value,
       password: password.value
     })
      .then(() => {
        email.value = '';
        user_name.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
   }

  render() { 
    const { error } = this.state;
    return ( 
      <form
        className="RegistrationForm"
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            E-mail <Required />
          </label>
          <Input
            name='email'
            type='email'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            Username (Minecraft IGN) <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button className='RegistrationForm__register' type='submit'>
          Register
        </Button>
        <p className='RegistrationForm__existing_account'>Already have an account? <Link className='RegistrationForm__login' to='/login'>Login</Link></p>
      </form>
     );
  }
}
 
export default RegistrationForm;