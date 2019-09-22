export const getApi = () => ({
  type: 'GET_API',
})

export const getUserDetails =(url)=> ({
  type: 'GET_USER_DETAILS',
  url,
})