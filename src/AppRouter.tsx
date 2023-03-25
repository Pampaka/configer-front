import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router'

import Layout from './components/Layout/Layout'
import PageLoader from './components/PageLoader/PageLoader'

import { LOGIN_PATH } from './utils/paths'
import routes from './routes'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{routes.map(({ path, Element }) => (
				<Route key={path} path={path} element={<Element />} />
			))}

			<Route path={'*'} element={<Navigate to={LOGIN_PATH} replace />} />
		</Route>
	)
)

const AppRouter = () => {
	return (
		<Layout>
			<Suspense fallback={<PageLoader />}>
				<RouterProvider router={router} />
			</Suspense>
		</Layout>
	)
}

export default AppRouter
