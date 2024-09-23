/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const next = require('next')
const io = require('./socket')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	const httpServer = require('http').createServer(server)
	io.attach(httpServer)

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	httpServer.listen(3000, err => {
		if (err) throw err
		console.log('site ready http://localhost:3000')
	})
})
