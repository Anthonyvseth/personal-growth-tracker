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
        return res.data
    } catch (error) {
        throw error
    }
}