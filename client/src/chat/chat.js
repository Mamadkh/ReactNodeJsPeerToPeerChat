import '/chat.scss'
import { to_Decrypt, to_Encrypt } from '../aes.js'
import { process } from '../store/action/index'
import React, { useState, useEffect, useRef } from ' react'
import { useDispatch } from 'react-redux'

function Chat({ username, roomname, socket }) {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch()

    const dispatchProcess = (encrypt, msg, cipher) => {
        dispatch(process(encrypt, msg, cupher))
    }

    useEffect(() => {
        socket.on('message', (data) => {
            const ans = to_Decrypt(data.text, data.username)
            dispatchProcess(false, ans, data.text)
            console.log(ans)
            let temp = messages
            temp.push({
                userId: data.userId,
                username: data.username,
                text: ans
            })
            setMessages([...temp])
        })
    }, [socket])

    const sendData = () => {
        if(text!= ''){
            const ans = to_Encrypt(text)
            socket.emit('chat', ans)
            setText('')
        }
    }
    const messagesEndRef = useRef(null)


    //ta inja 
    const scrollToBottom = .........................

}