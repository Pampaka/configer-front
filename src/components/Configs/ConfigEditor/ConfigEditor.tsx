import type { ConfigData } from '../../../types/config'
import type { Dispatch, SetStateAction } from 'react'

import { useTranslation } from 'react-i18next'
import { ChangeEvent, forwardRef } from 'react'
import { Button, CircularProgress, IconButton, Paper, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { SnackError } from '../../ui'

import useConfigEditor from '../../../hooks/useConfigEditor'

import style from './ConfigEditor.module.scss'

interface ConfigEditorProps {
	item: ConfigData | null
	setConfigs: Dispatch<SetStateAction<ConfigData[]>>
	onHide: () => void
}

interface Ref extends HTMLDivElement {}

const ConfigEditor = forwardRef<Ref, ConfigEditorProps>(({ item, setConfigs, onHide }, ref) => {
	const { t } = useTranslation(['configs'])
	const { name, env, data, setData, save, loading, error } = useConfigEditor(
		item,
		setConfigs,
		onHide
	)

	return (
		<Paper className={style.container} ref={ref}>
			<h3>{item ? t('configs:edit') : t('configs:create')}</h3>

			<TextField
				value={name.value}
				onChange={name.onChange}
				variant={'outlined'}
				label={t('configs:name') || ''}
			/>
			<TextField
				value={env.value}
				onChange={env.onChange}
				variant={'outlined'}
				label={t('configs:env') || ''}
			/>

			<div className={style.fileInput}>{t('configs:data')}:</div>
			{data.map(([key, value], idx) => (
				<div key={idx} className={style.configData}>
					<TextField
						size={'small'}
						value={key}
						onChange={(e: ChangeEvent<{ value: string }>) => {
							setData([idx, e.target.value, value])
						}}
						variant={'outlined'}
						label={t('configs:key') || ''}
					/>
					<div>:</div>
					<TextField
						size={'small'}
						value={value}
						onChange={(e: ChangeEvent<{ value: string }>) => {
							setData([idx, key, e.target.value])
						}}
						variant={'outlined'}
						label={t('configs:value') || ''}
					/>
					<IconButton onClick={() => setData([0, '', '', true])}>
						<CloseIcon fontSize={'medium'} color={'error'} />
					</IconButton>
				</div>
			))}
			<Button
				className={style.addConfig}
				variant={'contained'}
				onClick={() => {
					setData([data.length, '', ''])
				}}
			>
				{t('configs:add')}
			</Button>

			<Button className={style.save} variant={'contained'} onClick={save}>
				{loading ? <CircularProgress size={24} color={'inherit'} /> : t('configs:save')}
			</Button>

			<SnackError error={error.message} />
		</Paper>
	)
})

export default ConfigEditor
