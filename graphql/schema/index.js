const { importSchema } = require('graphql-import')
const path = require('path')
const prismaSchema = importSchema(
  path.resolve(__dirname, '../../generated/prisma.graphql')
)

const typeDefs = importSchema(path.resolve(__dirname, 'schema.graphql'), {
  prismaSchema
})

module.exports = typeDefs
