import { $host } from './index'

interface SignInParams {
	login: string
	password: string
}

interface SignInResponse {
	token: string
}

export const signIn = async (body: SignInParams): Promise<SignInResponse> => {
	const { data } = await $host.post('/api/auth/login', body)
	return data
}
