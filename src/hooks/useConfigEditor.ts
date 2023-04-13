import type { ConfigData, JsonConfig } from '../types/config'
import type { Dispatch, SetStateAction } from 'react'

import { useCallback, useReducer, useState } from 'react'

import useInput from './useInput'
import useApiError from './useApiError'

import { createConfig, updateConfig } from '../api/configs'

const useConfigEditor = (
	item: ConfigData | null,
	setConfigs: Dispatch<SetStateAction<ConfigData[]>>,
	onSave: () => void
) => {
	const name = useInput(item?.name || ``)
	const env = useInput(item?.env || ``)
	const [data, setData] = useReducer(
		(
			prevState: Array<[string, string]>,
			[idx, key, value, remove = false]: [number, string, string, boolean?]
		) => {
			prevState = [...prevState]

			if (remove) {
				prevState.splice(idx, 1)
			} else {
				prevState[idx] = [key, value]
			}

			return prevState
		},
		item?.data ? Object.entries(item?.data) : []
	)

	const [loading, setLoading] = useState(false)
	const error = useApiError()

	const save = useCallback(() => {
		const objectData: JsonConfig = {}
		data.forEach(([key, value]) => {
			if (!key) return
			objectData[key] = value
		})

		const reqBody = {
			name: name.value.trim(),
			env: env.value.trim(),
			data: objectData
		}

		setLoading(true)
		error.setError(null)
		;(!item ? createConfig(reqBody) : updateConfig(item.id, reqBody))
			.then(res => {
				if (!res) return

				setConfigs(prevState => {
					if (res?.id) prevState = prevState.filter(i => i.id !== res.id)
					prevState.push(res)

					return prevState
				})

				onSave()
			})
			.catch(e => error.setError(e))
			.finally(() => setLoading(false))
	}, [name.value, env.value, data])

	return {
		name,
		env,
		data,
		setData,
		save,
		loading,
		error
	}
}

export default useConfigEditor
