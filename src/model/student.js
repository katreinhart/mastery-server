const knex = require('../db/connection')

const getAllStudents = () => knex('students')

const getOneStudent = (id) => knex('students')
  .where('id', id)
  .first()

const createNewStudent = (body) => knex('students')
  .insert(body)
  .returning('*')

const updateStudent = (id, body) => knex('students')
  .where('id', id)
  .update(body)
  .returning('*')

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
  updateStudent
}