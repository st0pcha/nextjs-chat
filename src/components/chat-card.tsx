'use client'

import { useState } from 'react'
import Message from './message'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'

interface ChatCardProps {
	messages: Message[]
	sendMessage: (text: string) => void
}

const ChatCard = ({ messages, sendMessage }: ChatCardProps) => {
	const [message, setMessage] = useState('')

	return (
		<Card className='w-full sm:w-[300px] lg:w-[600px] p-4 bg-transparent text-white'>
			<CardHeader>
				<h1 className='font-semibold text-2xl'>Chat</h1>
			</CardHeader>

			<CardContent
				className='flex-1 overflow-y-auto space-y-2'
				style={{ maxHeight: '400px' }}
			>
				{messages.map((message, idx) => (
					<Message key={idx} text={message.text} />
				))}
			</CardContent>

			<CardFooter className='mt-6'>
				<div className='flex w-full max-w-sm items-center space-x-2'>
					<Input
						type='text'
						min={1}
						max={48}
						placeholder='Enter Message'
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<Button
						type='submit'
						onClick={() => {
							sendMessage(message)
							setMessage('')
						}}
					>
						Send
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}

export default ChatCard
