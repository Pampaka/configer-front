import { $authHost } from './index'
import type { ConfigData, JsonConfig } from '../types/config'

export const getAllConfigs = async (): Promise<ConfigData[]> => {
	const { data } = await $authHost.get('/api/configs/all')
	return data
}

export interface CreateConfig {
	name: string
	env: string
	data: JsonConfig
}

export const createConfig = async (body: CreateConfig): Promise<ConfigData> => {
	const { data } = await $authHost.post('/api/configs', body)
	return data
}

export const updateConfig = async (id: string, body: CreateConfig): Promise<ConfigData | null> => {
	const { data } = await $authHost.put(`/api/configs/${id}`, body)
	return data
}

export const removeConfig = async (id: string): Promise<void> => {
	await $authHost.delete(`/api/configs/${id}`)
}
