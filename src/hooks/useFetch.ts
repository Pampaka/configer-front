import { useEffect, useState } from 'react'
import useApiError from './useApiError'

const useFetch = <T>(
	initialData: T,
	getFunction: () => Promise<T>
): { data: T; loading: boolean; error: string | null } => {
	const error = useApiError()
	const [data, setData] = useState<T>(initialData)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getFunction()
			.then(res => setData(res))
			.catch(e => error.setError(e))
			.finally(() => setLoading(false))
	}, [])

	return { data, loading, error: error.message }
}

export default useFetch
