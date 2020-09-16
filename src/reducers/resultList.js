const resultReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_RESULT":
      const newItem = {
        task: action.payload,
      };
      const newResultList = [...state];
      newResultList.push(newItem);
      return newResultList;

    default:
      return state;
  } //end switch
}; //end result reducer

export default resultReducer;
