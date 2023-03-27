import type { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { SnackError } from '../../ui'
import useConfigs from '../../../hooks/useConfigs'

const ConfigsTable = () => {
	const { t } = useTranslation(['configs'])
	const { data, loading, error } = useConfigs()

	const columns = useMemo(
		(): GridColDef[] => [
			{ field: 'id', headerName: 'ID', width: 150 },
			{ field: 'name', headerName: t('configs:name') || 'name', width: 250 },
			{ field: 'env', headerName: t('configs:env') || 'env', width: 250 },
			{
				field: 'updatedAt',
				headerName: t('configs:updatedAt') || 'updatedAt',
				width: 250,
				valueGetter: (params: GridValueGetterParams) => {
					return new Date(params.row.updatedAt).toString()
				}
			}
		],
		[t]
	)

	return (
		<div style={{ height: 700, width: '100%' }}>
			<DataGrid columns={columns} rows={data} />
			<SnackError error={error} />
		</div>
	)
}

export default ConfigsTable
