import { AppBar } from '@mui/material'

import LangChanger from './LangChanger/LangChanger'

import style from './Header.module.scss'

const Header = () => {
	return (
		<AppBar className={style.container} position={'static'}>
			<div className={style.appName}>Configer</div>
			<LangChanger />
		</AppBar>
	)
}

export default Header
