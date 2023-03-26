import { ChangeEvent, useReducer } from 'react'

const useInput = (defaultValue: string = '', onChange?: Function) => {
	const [value, setValue] = useReducer((_: string, e: ChangeEvent<{ value: string }>) => {
		if (onChange) onChange()
		return e.target.value
	}, defaultValue)

	return {
		value: value,
		onChange: setValue
	}
}

export default useInput
