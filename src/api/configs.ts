import { $authHost } from './index'
import type { ConfigData } from '../types/config'

export const getAllConfigs = async (): Promise<ConfigData[]> => {
	const { data } = await $authHost.get('/api/configs/all')
	return data
}
