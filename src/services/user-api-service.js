import TokenService from './token-service';
import config from '../config';

const UserApiService = {
  getAllUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  },

  getById(id) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  updateUser(id, newUserFields) {
    return fetch(`${config.API_ENDPOINT}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserFields)
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.statusText  
      );
  },

  resetPassword(user_name) {
    return fetch(`${config.API_ENDPOINT}/users/resetpw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_name})
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  storePassword(user_id, password, token) {
    return fetch(`${config.API_ENDPOINT}/users/store-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        password,
        token
      })
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        );
  }
};

export default UserApiService;