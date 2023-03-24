import Header from '../Header/Header'
import type { PropsWithChildren } from 'react'

import style from './Layout.module.scss'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className={style.layout}>
			<Header />
			{children}
		</div>
	)
}

export default Layout
