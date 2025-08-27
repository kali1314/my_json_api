const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(cors())          // Netlify বা অন্য frontend থেকে API কল করতে পারে
server.use(middlewares)    // logger, static, bodyParser ইত্যাদি

server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('JSON Server is running on port', PORT)
})
