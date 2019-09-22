const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_API_RESPONSE':
      return { ...state, getApiResponse: action.json, gitApiLoader: false, }
    case 'GET_API':
      return { ...state, getApiResponse: [], gitApiLoader: true, }
    case 'GET_USER_DETAILS':
      return { ...state, getUserListResponse: [] }
    case 'GET_USER_DETAILS_RESPONSE':
      return { ...state, getUserListResponse: action.json }
    default: 
      return state;
  }
}
export default reducer;
