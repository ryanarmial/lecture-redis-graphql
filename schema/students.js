const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = require('graphql')
const CourseType = require('./courses')

const studentSchema = new GraphQLObjectType({
  name: 'StudentType',
  fields: {
    id: {
      type: GraphQLID
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    active: {
      type: GraphQLBoolean,
    },
    courses: {
      type: new GraphQLList(CourseType)
    },
  }
})

module.exports = studentSchema