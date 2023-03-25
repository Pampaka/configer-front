import React from 'react'
import { useTranslation } from 'react-i18next'

const ConfigsPage = () => {
	const { t } = useTranslation(['configs'])

	return <div>{t('configs:configs')}</div>
}

export default ConfigsPage
