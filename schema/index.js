const graphql = require('graphql')
const studentSchema = require('./students')
const courseSchema = require('./courses') 

const studentsData = require('../data/students')
const coursesData = require('../data/courses')

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Root',
    fields: {
      message: {
        type: graphql.GraphQLString,
        resolve: () => 'Hai Xavier Fox'
      },
      allCourses: {
        type: new graphql.GraphQLList(courseSchema),
        resolve: () => {
          return coursesData
        }
      },
      allStudents: {
        type: new graphql.GraphQLList(studentSchema),
        resolve: () => {
          return studentsData
        }
      }
    }
  })
})

module.exports = schema