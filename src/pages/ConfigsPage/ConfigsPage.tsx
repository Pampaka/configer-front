import type { ConfigData } from '../../types/config'

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Button, CircularProgress, Modal } from '@mui/material'

import ConfigsTable from '../../components/Configs/ConfigsTable/ConfigsTable'
import ConfigEditor from '../../components/Configs/ConfigEditor/ConfigEditor'
import { SnackError } from '../../components/ui'

import useFetch from '../../hooks/useFetch'
import useApiError from '../../hooks/useApiError'
import { getAllConfigs, removeConfig } from '../../api/configs'

import style from './ConfigsPage.module.scss'

const ConfigsPage = () => {
	const { t } = useTranslation(['configs'])

	const { data, loading, error } = useFetch([], getAllConfigs)
	const [configs, setConfigs] = useState<ConfigData[]>([])

	const [openEditor, setOpenEditor] = useState(false)
	const [editedItem, setEditedItem] = useState<ConfigData | null>(null)

	const onCreateConfig = () => {
		setEditedItem(null)
		setOpenEditor(true)
	}

	const onEditConfig = (item: ConfigData) => {
		setEditedItem(item)
		setOpenEditor(true)
	}

	const errorRemove = useApiError()
	const onRemoveConfig = (id: string) => {
		errorRemove.setError(null)
		removeConfig(id)
			.then(() => setConfigs(prev => prev.filter(i => i.id !== id)))
			.catch(e => errorRemove.setError(e))
	}

	useEffect(() => {
		setConfigs(data)
	}, [data])

	return (
		<div>
			<div className={style.head}>
				<h1 className={style.title}>{t('configs:configs')}</h1>
				<Button variant={'contained'} disabled={loading} onClick={onCreateConfig}>
					{t('configs:create')}
				</Button>
			</div>

			{loading ? (
				<CircularProgress style={{ marginLeft: 20 }} />
			) : (
				<ConfigsTable data={configs} onEdit={onEditConfig} onRemove={onRemoveConfig} />
			)}

			<SnackError error={error} />
			<SnackError error={errorRemove.message} />

			<Modal open={openEditor} onClose={() => setOpenEditor(false)}>
				<ConfigEditor
					item={editedItem}
					setConfigs={setConfigs}
					onHide={() => setOpenEditor(false)}
				/>
			</Modal>
		</div>
	)
}

export default ConfigsPage
