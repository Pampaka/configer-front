import { useEffect, useState } from 'react'
import { getAllConfigs } from '../api/configs'
import type { ConfigData } from '../types/config'
import useApiError from './useApiError'

const useConfigs = () => {
	const error = useApiError()
	const [data, setData] = useState<Array<ConfigData>>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getAllConfigs()
			.then(res => setData(res))
			.catch(e => error.setError(e))
			.finally(() => setLoading(false))
	}, [])

	return { data, loading, error: error.message }
}

export default useConfigs
