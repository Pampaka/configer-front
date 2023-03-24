import { FC } from 'react'

export interface AppRoute {
	path: string
	Element: FC
}

export interface AppRoutes extends Array<AppRoute> {}
