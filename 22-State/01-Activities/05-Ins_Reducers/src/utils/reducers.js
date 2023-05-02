import createId from './createId';

export const reducer = (state, action) => {
  //we have 2 cases here
  switch (action.type) {
    //depending on the action type, we perform different functions and return different data
    case 'ADD_CAR': {
      const newID = createId(state.cars);
      const newCar = { ...action.payload, id: newID };
//we don't change the state directly
//we copy it over into a new object, and make modifications there
      return {
        //spread operator to copy the state that was passed in
        ...state,
        //we take our previous state and add a new car to that state
        cars: [...state.cars, newCar],
      };
    }
    case 'REMOVE_CAR': {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
