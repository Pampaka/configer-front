import type { AppRoutes } from './types/routes'
import { lazy } from 'react'

import { CONFIGS_PATH, LOGIN_PATH } from './utils/paths'

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const ConfigsPage = lazy(() => import('./pages/ConfigsPage/ConfigsPage'))

const routes: AppRoutes = [
	{
		path: LOGIN_PATH,
		Element: LoginPage
	},
	{
		path: CONFIGS_PATH,
		Element: ConfigsPage
	}
]

export default routes
