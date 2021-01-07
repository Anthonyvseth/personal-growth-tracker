import ApiClient from './ApiClient'

import React from 'react'

export const __CreateAffirm = async (formData) => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.post(`/users/${userId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetAffirms = async () => {
    const userId = localStorage.getItem('user_id')
    try {
        const res = await ApiClient.get(`/users/${userId}/affirmaions`)
        return res.data.affirmations
    } catch (error) {
        throw error
    }
}
