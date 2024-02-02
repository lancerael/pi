import { resolvers, schema as typeDefs } from './data'

import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import http from 'http'
import mongoose from 'mongoose'

const port = 4000
const ORIGIN = 'http://localhost:5003'

mongoose.connect('mongodb://mongo:27017/mydb')

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
  startServer()
})

mongoose.connection.on('error', function (error) {
  console.error('Error connecting to MongoDB:', error)
})

process.on('SIGINT', () => {
  mongoose.connection.close()
  console.log('Mongoose disconnected through app termination')
  process.exit(0)
})

const startServer = async () => {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(
    '/graphql',
    cors({
      origin: ORIGIN,
    }),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
      }),
    })
  )

  httpServer.listen({ port }, () => {
    console.log(`Server is running on port ${port}/graphql`)
  })
}
