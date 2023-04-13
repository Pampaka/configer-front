export interface JsonConfig {
	[key: string]: string
}

export interface ConfigData {
	id: string
	name: string
	env: string
	data?: JsonConfig | null
	createdAt: string
	updatedAt: string
}
