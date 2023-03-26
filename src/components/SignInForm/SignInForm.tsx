import { useTranslation } from 'react-i18next'
import { Button, Paper, TextField } from '@mui/material'

import style from './SignInForm.module.scss'

const SignInForm = () => {
	const { t } = useTranslation(['signIn'])

	return (
		<Paper className={style.container} elevation={6}>
			<h2 className={style.title}>{t('auth')}</h2>
			<TextField variant={'outlined'} label={t('login')} />
			<TextField variant={'outlined'} label={t('password')} type={'password'} />
			<Button className={style.signIn} variant={'contained'}>
				{t('signIn')}
			</Button>
		</Paper>
	)
}

export default SignInForm
