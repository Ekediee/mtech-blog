"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import axios from 'axios'


const AppContext = createContext<any>(undefined);

export type postT = {
    author: String,
    title: String,
    body: String,
    created_at: String,
    updated_at: String
}


export const AppWrapper = ({ children } : { children : ReactNode}) => {
    
    const [posts, setPosts] = useState<postT[]>()

    const apiUrl = process.env.API_URL || "http://localhost:5000"


    const fetch_posts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/v1/posts`)
            setPosts(response.data)
        } catch (error:any) {
            if(!error.response) {
                console.error("Network Error", error)
            } else {
                console.error("Error Response", error.response)
            }
        }
    }

    

    return (
        <AppContext.Provider
            value={{
                posts, fetch_posts
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)