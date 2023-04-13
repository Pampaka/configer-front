function dateFormat(value: number | string | Date): string {
	const date = new Date(value)

	let dateStr = String(date.getDate()).padStart(2, '0') + '.'
	dateStr += String(date.getMonth() + 1).padStart(2, '0') + '.'
	dateStr += String(date.getFullYear()) + ' '

	dateStr += String(date.getHours()).padStart(2, '0') + ':'
	dateStr += String(date.getMinutes()).padStart(2, '0') + ':'
	dateStr += String(date.getSeconds()).padStart(2, '0')

	return dateStr
}

export default dateFormat
