const resolvers = {
  Query: {
    users: (_, _args, { prisma }, info) => {
      return prisma.query.users({}, info)
    },
    userByID: () => {}
  },
  Mutation: {
    addUser: (_, { name, age }, { prisma }, info) => {
      return prisma.mutation.createUser(
        {
          data: {
            name,
            age
          }
        },
        info
      )
    }
  }
}

module.exports = resolvers
