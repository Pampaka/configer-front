import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

interface SnackErrorProps {
	error?: string | null
}

const SnackError: FC<SnackErrorProps> = ({ error }) => {
	const [showError, setShowError] = useState(false)

	const hideError = () => setShowError(false)

	useEffect(() => {
		if (!!error) setShowError(true)
	}, [error])

	return (
		<Snackbar open={showError} autoHideDuration={5000} onClose={hideError}>
			<Alert severity={'error'} sx={{ width: '100%' }} onClose={hideError}>
				{error}
			</Alert>
		</Snackbar>
	)
}

export default SnackError
