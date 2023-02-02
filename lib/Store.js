import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
)



// parent store
export const useStore = (props) => {
    const [channels, setChannels] = useState([])
    const [messages, setMessages] = useState([])
    const [users] = useState(new Map())
    const [newMessage, handleNewMessage] = useState(null)
    const [newChannel, handleNewChannel] = useState(null)
    const [newOrUpdatedUser, handleNewOrUpdatedUser] = useState(null)
    const [deletedChannel, handleDeletedChannel] = useState(null)
    const [deletedMessage, handleDeletedMessage] = useState(null)

    // on load
    useEffect(() => {
    }, [])

    // on router change

    // on messagesend

    // on message delete

    // on new channel added


}
// functions

/**
 * Fetch Channels
 */

/**
 * Fetch Single Channel
 */

/**
 * Fetch Single User
 */

/**
 * Fetch Messages
 */

/**
 * Add Channel
 */

/**
 * Add Message
 */

/**
 * Delete Channel
 */

/**
 * Delete Message
 */