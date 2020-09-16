const addNewResult = resultContent => {
    return {
      type: 'ADD_NEW_RESULT',
      payload: resultContent
    };
  }

export default addNewResult;