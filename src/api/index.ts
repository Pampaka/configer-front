import axios from 'axios'

import { API_URL } from '../utils/urls'

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

export { $host, $authHost }
