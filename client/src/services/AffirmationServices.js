import ApiClient from './ApiClient'

export const __CreateAffirm = async (formData) => {
    const userId = localStorage.getItem('user_id')
    try {
        console.log('__CreateAffirm formData',formData)
        const res = await ApiClient.post(`/users/${userId}/affirmations`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAffirms = async () => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.get(`/users/${userId}/affirmaions`)
        console.log(res.data.affirmations)
        return res.data.affirmations
    } catch (error) {
        throw error
    }
}

export const __UpdateAffirm = async (id, formData) => {
    try {
        const res = await ApiClient.put(`/affirmations/${id}`, formData)
        console.log(res)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeleteAffirm = async (id) => {
    try {
        const res = await ApiClient.delete(`/affirmations/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}