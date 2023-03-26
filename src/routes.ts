import type { AppRoutes } from './types/routes'
import { lazy } from 'react'

import { CONFIGS_PATH, SIGN_IN_PATH } from './utils/paths'

const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'))
const ConfigsPage = lazy(() => import('./pages/ConfigsPage/ConfigsPage'))

const routes: AppRoutes = [
	{
		path: SIGN_IN_PATH,
		Element: SignInPage
	},
	{
		path: CONFIGS_PATH,
		Element: ConfigsPage
	}
]

export default routes
