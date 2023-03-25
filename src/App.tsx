import { Suspense } from 'react'

import AppRouter from './AppRouter'
import AppLoader from './components/AppLoader/AppLoader'

import './i18next'

import './styles/index.scss'

const App = () => {
	return (
		<Suspense fallback={<AppLoader />}>
			<AppRouter />
		</Suspense>
	)
}

export default App
