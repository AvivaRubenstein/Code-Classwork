import {ADD_STUDENT, REMOVE_STUDENT} from './actions'

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT : {
      const newStudent = {...action.payload}
    
      return {
        ...state,
        students: [...state.students, newStudent]
      }
    }
    case REMOVE_STUDENT : {
      return {
        ...state,
        //filtering out students to only include those with an id which does NOT match the id in the payload
        //which essentially deletes only the one WITH that id
        students: state.students.filter((student) => student.id != action.payload)
      }
    }
    default:
      return state

  }
}
