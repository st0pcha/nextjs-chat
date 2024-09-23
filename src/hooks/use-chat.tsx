import { Message } from '@/types/message'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io()

export const useChat = () => {
	const [messages, setMessages] = useState<Message[]>([])

	useEffect(() => {
		const handleConnect = () => {
			console.log('Connected to socket')
		}

		const handleMessage = (message: Message) => {
			console.log(message)
			setMessages(prevMessages => [...prevMessages, { ...message }])
		}

		socket.on('connect', handleConnect)
		socket.on('message', handleMessage)

		return () => {
			socket.off('connect', handleConnect)
			socket.off('message', handleMessage)
		}
	}, [])

	const sendMessage = (text: string) => {
		socket.emit('message', {
			text,
		})
	}

	return { messages, sendMessage }
}
