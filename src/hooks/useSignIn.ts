import { useState } from 'react'
import { useNavigate } from 'react-router'

import useApiError from './useApiError'
import useInput from './useInput'

import { signIn } from '../api/auth'
import { CONFIGS_PATH } from '../utils/paths'

const useSignIn = () => {
	const navigate = useNavigate()

	const error = useApiError()
	const [loading, setLoading] = useState(false)

	const login = useInput()
	const password = useInput()

	const submit = () => {
		setLoading(true)
		error.setError(null)
		signIn({ login: login.value, password: password.value })
			.then(({ token }) => {
				localStorage.setItem('token', token)
				navigate(CONFIGS_PATH)
			})
			.catch(error.setError)
			.finally(() => setLoading(false))
	}

	return {
		data: { login, password },
		loading,
		error: error.message,
		submit
	}
}

export default useSignIn
