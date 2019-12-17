import axios from 'axios'
import API_URL from '../../constants'

export default function callApi(method, endpoint, data) {
  return axios({
    method,
    url: `${API_URL}/${endpoint || ''}`,
    data,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access-token')}`
    }
  })
}
