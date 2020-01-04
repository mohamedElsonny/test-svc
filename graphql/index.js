const server = require('./server')

server.listen({ port: 6050 }, () => {
  console.log('server running')
})
