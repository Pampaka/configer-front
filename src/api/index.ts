import axios from 'axios'

import { API_URL } from '../utils/urls'
import { SIGN_IN_PATH } from '../utils/paths'

const $host = axios.create({
	baseURL: API_URL,
	withCredentials: true
})

const $authHost = axios.create({
	baseURL: API_URL,
	withCredentials: true
})

$authHost.interceptors.request.use(config => {
	config.headers.authorization = `Bearer ${sessionStorage.getItem('token')}`
	return config
})

$authHost.interceptors.response.use(
	res => res,
	error => {
		if (error?.response?.status === 401) {
			window.location.href = SIGN_IN_PATH
		} else {
			throw error
		}
	}
)

export { $host, $authHost }
