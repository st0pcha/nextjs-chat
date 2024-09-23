/* eslint-disable @typescript-eslint/no-require-imports */
const { Server } = require('socket.io')

const io = new Server({
	cors: {
		origin: '*',
	},
})

io.on('connection', socket => {
	console.log('a user connected')

	socket.on('message', msg => {
		io.emit('message', msg)
	})

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})
})

io.on('message', message => {
	console.log(message)
})

module.exports = io
