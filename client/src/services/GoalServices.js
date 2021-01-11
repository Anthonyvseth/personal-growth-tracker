import ApiClient from './ApiClient'

export const __GetGoals = async () => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.get(`/users/${userId}/goals`)
        return res.data.accomplishments
    } catch (error) {
        throw error
    }
}

export const __UpdateGoal = async (id, formData) => {
    try {
        const res = await ApiClient.put(`/goals/${id}`, formData)
        console.log(res)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeleteGoal = async (id) => {
    try {
        const res = await ApiClient.delete(`/goals/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}