import { cn } from '@/lib/utils'

interface MessageProps {
	text: string
}

const Message = ({ text }: MessageProps) => {
	return (
		<div className={cn('flex justify-start')}>
			<div className={cn(' text-white rounded-lg p-2 max-w-xs bg-gray-600')}>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default Message
