import { useTranslation } from 'react-i18next'
import ConfigsTable from '../../components/Configs/ConfigsTable/ConfigsTable'
import style from './ConfigsPage.module.scss'

const ConfigsPage = () => {
	const { t } = useTranslation(['configs'])

	return (
		<div>
			<h1 className={style.title}>{t('configs:configs')}</h1>
			<ConfigsTable />
		</div>
	)
}

export default ConfigsPage
