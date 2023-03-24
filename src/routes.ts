import type { AppRoutes } from './types/routes'
import { lazy } from 'react'

import { LOGIN_PATH } from './utils/paths'

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))

const routes: AppRoutes = [
	{
		path: LOGIN_PATH,
		Element: LoginPage
	}
]

export default routes
