import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Alert, Button, CircularProgress, Paper, Snackbar, TextField } from '@mui/material'

import useSignIn from '../../hooks/useSignIn'

import style from './SignInForm.module.scss'

const SignInForm = () => {
	const { t } = useTranslation(['signIn'])
	const { data, submit, loading, error } = useSignIn()

	const [showError, setShowError] = useState(false)
	const hideError = () => setShowError(false)

	useEffect(() => {
		if (!!error) setShowError(true)
	}, [error])

	return (
		<Paper className={style.container} elevation={6}>
			<h2 className={style.title}>{t('auth')}</h2>

			<TextField variant={'outlined'} label={t('login')} {...data.login} />
			<TextField
				variant={'outlined'}
				label={t('password')}
				type={'password'}
				{...data.password}
			/>

			<Button className={style.signIn} variant={'contained'} onClick={submit}>
				{loading ? <CircularProgress size={24} color={'inherit'} /> : t('signIn')}
			</Button>

			<Snackbar open={showError} autoHideDuration={5000} onClose={hideError}>
				<Alert severity={'error'} sx={{ width: '100%' }} onClose={hideError}>
					{error}
				</Alert>
			</Snackbar>
		</Paper>
	)
}

export default SignInForm
