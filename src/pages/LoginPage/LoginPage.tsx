import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import style from './LoginPage.module.scss'

const LoginPage: FC = () => {
	const { t } = useTranslation(['login'])

	return <div className={style.container}>{t('login:auth')}</div>
}

export default LoginPage
