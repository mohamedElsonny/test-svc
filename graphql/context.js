const { Prisma } = require('prisma-binding')
const path = require('path')

const prisma = new Prisma({
  endpoint: `${process.env.PRISMA_ENDPOINT}/${process.env.PRISMA_DB}/${process.env.PRISMA_STAGE}`,
  typeDefs: path.resolve(__dirname, '../generated/prisma.graphql'),
  debug: false,
  secret: process.env.PRISMA_SECRET
})

module.exports = { prisma }
