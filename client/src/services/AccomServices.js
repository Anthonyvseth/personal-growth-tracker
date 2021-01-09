import ApiClient from './ApiClient'

export const __CreateAccom = async (formData) => {
    const userId = localStorage.getItem('user_id')
    try {
        console.log("__CreateAccom FormData", formData)
        const res = await ApiClient.post(`/users/${userId}/accomplistments`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAccoms = async () => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.get(`/users/${userId}/accomplishments`)
        return res.data.accomplishments
    } catch (error) {
        throw error
    }
}

export const __UpdateAccom = async (id, formData) => {
    try {
        const res = await ApiClient.put(`/accomplishments/${id}`, formData)
        console.log('__UpdateAccom data', res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeleteAffirm = async (id) => {
    try {
        const res = await ApiClient.delete(`/accomplishments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}