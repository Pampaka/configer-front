import { $authHost } from './index'
import type { ConfigData } from '../types/config'

interface ConfigsResponse extends Array<ConfigData> {}

export const getAllConfigs = async (): Promise<ConfigsResponse> => {
	const { data } = await $authHost.get('/api/configs/all')
	return data
}
