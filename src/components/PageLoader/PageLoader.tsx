import { CircularProgress } from '@mui/material'

import style from './PageLoader.module.scss'

const PageLoader = () => {
	return (
		<div className={style.container}>
			<CircularProgress />
		</div>
	)
}

export default PageLoader
