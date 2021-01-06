import ApiClient from './ApiClient'

export const __RegisterUser = async (formData) => {
    try {
        const res = await ApiClient.post('/users', formData)
        return res.datda
    } catch (error) {
        throw error
    }
}