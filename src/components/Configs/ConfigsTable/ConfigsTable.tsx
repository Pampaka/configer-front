import { useTranslation } from 'react-i18next'
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import type { ConfigData } from '../../../types/config'
import type { FC } from 'react'

interface ConfigsTableProps {
	data: ConfigData[]
}

const ConfigsTable: FC<ConfigsTableProps> = ({ data }) => {
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
						<TableRow>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.env}</TableCell>
							<TableCell>{item.updatedAt}</TableCell>
							<TableCell>
								<IconButton>
									<EditIcon />
								</IconButton>
							</TableCell>
							<TableCell>
								<IconButton>
									<DeleteIcon />
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
