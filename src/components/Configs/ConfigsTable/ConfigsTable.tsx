import type { ConfigData } from '../../../types/config'
import type { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import dateFormat from '../../../utils/dateFormat'

interface ConfigsTableProps {
	data: ConfigData[]
	onEdit: (item: ConfigData) => void
	onRemove: (id: string) => void
}

const ConfigsTable: FC<ConfigsTableProps> = ({ data, onEdit, onRemove }) => {
	const { t } = useTranslation(['configs'])

	return (
		<div style={{ height: 700, width: '100%' }}>
			<Table size={'small'}>
				<TableHead>
					<TableRow>
						<TableCell>{t('configs:name')}</TableCell>
						<TableCell>{t('configs:env')}</TableCell>
						<TableCell>{t('configs:updatedAt')}</TableCell>
						<TableCell>{t('configs:edit')}</TableCell>
						<TableCell>{t('configs:remove')}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(item => (
						<TableRow key={item.id}>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.env}</TableCell>
							<TableCell>{dateFormat(item.updatedAt)}</TableCell>
							<TableCell>
								<IconButton onClick={() => onEdit(item)}>
									<EditIcon color={'primary'} />
								</IconButton>
							</TableCell>
							<TableCell>
								<IconButton onClick={() => onRemove(item.id)}>
									<DeleteIcon color={'error'} />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default ConfigsTable
