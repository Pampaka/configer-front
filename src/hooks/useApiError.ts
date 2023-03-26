import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const useApiError = () => {
	const { t } = useTranslation(['main'])
	const [error, setError] = useState<any>()

	const message = useMemo((): string | null => {
		if (!error) return null

		if (typeof error?.response?.data?.message === 'string') {
			return error.response.data.message
		} else if (typeof error?.response?.message === 'string') {
			return error.response.message
		} else if (typeof error?.message === 'string') {
			return error.message
		} else {
			return t('unknownError')
		}
	}, [error, t])

	return {
		message,
		setError
	}
}

export default useApiError
