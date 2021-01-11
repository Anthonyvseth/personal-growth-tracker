import ApiClient from './ApiClient'

export const __CreateGoal = async (formData) => {
    const userId = localStorage.getItem('user_id')
    try {
        console.log("__CreateGoal FormData", formData)
        const res = await ApiClient.post(`/users/${userId}/goals`, formData)
        console.log("CREATE ACCOM Data", res)
        return res
    } catch (error) {
        throw error
    }
}

export const __GetGoals = async () => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.get(`/users/${userId}/goals`)
        return res.data.goals
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