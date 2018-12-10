const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = require('graphql')

const courseSchema = new GraphQLObjectType({
  name: 'CourseType',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    level: {
      type: GraphQLString  
    },
  }
})

module.exports = courseSchema