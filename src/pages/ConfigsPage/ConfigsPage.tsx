import { useTranslation } from 'react-i18next'
import { CircularProgress } from '@mui/material'

import ConfigsTable from '../../components/Configs/ConfigsTable/ConfigsTable'
import { SnackError } from '../../components/ui'

import useFetch from '../../hooks/useFetch'
import { getAllConfigs } from '../../api/configs'

import style from './ConfigsPage.module.scss'

const ConfigsPage = () => {
	const { t } = useTranslation(['configs'])
	const { data, loading, error } = useFetch([], getAllConfigs)

	if (loading) {
		return <CircularProgress style={{ marginLeft: 20 }} />
	}

	return (
		<div>
			<h1 className={style.title}>{t('configs:configs')}</h1>
			{loading ? (
				<CircularProgress style={{ marginLeft: 20 }} />
			) : (
				<ConfigsTable data={data} />
			)}
			<SnackError error={error} />
		</div>
	)
}

export default ConfigsPage
