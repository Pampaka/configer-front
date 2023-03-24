import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router'

import Layout from './components/Layout/Layout'

import { LOGIN_PATH } from './utils/paths'
import routes from './routes'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Suspense>
				<Routes>
					{routes.map(({ path, Element }) => (
						<Route
							key={path}
							path={path}
							element={
								<Layout>
									<Element />
								</Layout>
							}
						/>
					))}

					<Route path={'*'} element={<Navigate to={LOGIN_PATH} replace />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default AppRouter
