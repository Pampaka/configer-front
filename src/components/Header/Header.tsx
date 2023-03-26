import { AppBar } from '@mui/material'

import style from './Header.module.scss'

const Header = () => {
	return (
		<AppBar className={style.container} position={'static'}>
			Configer
		</AppBar>
	)
}

export default Header
