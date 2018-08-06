import request from 'superagent'

export const getEvents = () => {
  return request
    .get('/api/v1/events')
    .then(res => {
      return res.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
