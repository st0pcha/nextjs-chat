'use client'

import ChatCard from '@/components/chat-card'
import { useChat } from '@/hooks/use-chat'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const HomePage = () => {
	const { messages, sendMessage } = useChat()

	return (
		<div className='p-8 flex flex-col items-center justify-center'>
			<Link
				href={'https://github.com/st0pcha/nextjs-chat'}
				target='_blank'
				className='font-semibold text-3xl flex items-center'
			>
				<GitHubLogoIcon className='mr-2 h-6 w-6' />
				nextjs-chat
			</Link>

			<div className='mt-4 space-y-12 flex flex-col items-center justify-center'>
				<ChatCard messages={messages} sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default HomePage
