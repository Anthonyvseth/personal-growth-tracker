import ApiClient from './ApiClient'

export const __CreateAccom = async (formData) => {
    const userId = localStorage.getItem('user_id')
    try {
        console.log("__CreateAccom FormData", formData)
        const res = await ApiClient.post(`/users/${userId}/accomplishments`, formData)
        console.log("CREATE ACCOM Data", res)
        return res
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
        console.log(res)
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