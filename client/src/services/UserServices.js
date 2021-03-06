import ApiClient from './ApiClient'

const setLocalUserId = (user_id) => {
    localStorage.setItem('user_id', user_id);
  };
  

export const __RegisterUser = async (formData) => {
    try {
        const res = await ApiClient.post('/users/', formData)
        setLocalUserId(res.data.id)
        return res.datda
    } catch (error) {
        throw error
    }
}

export const __getUser = async (user_id) => {
    try {
        const res = await ApiClient.get(`/users/${user_id}`)
        console.log("__GETTING USER", res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __SigninUser = async (userData) => {
    try {
        const res = await ApiClient.post('/users/signin', userData)
        setLocalUserId(res.data.id)
        console.log('Logged in');
        return res.data
    } catch (error) {
        throw error
    }
}

export const _LogOutUser = () => {
    localStorage.clear('user_id');
  };

  export const __CheckSession = async () => {
    try {
        const res = await ApiClient.get('/users/refresh/session')
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}