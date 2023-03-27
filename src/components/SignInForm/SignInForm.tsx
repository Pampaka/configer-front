import { useTranslation } from 'react-i18next'
import { Button, CircularProgress, Paper, TextField } from '@mui/material'
import { SnackError } from '../ui'
import useSignIn from '../../hooks/useSignIn'
import style from './SignInForm.module.scss'

const SignInForm = () => {
	const { t } = useTranslation(['signIn'])
	const { data, submit, loading, error } = useSignIn()

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

			<SnackError error={error} />
		</Paper>
	)
}

export default SignInForm
