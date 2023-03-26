import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const useLang = () => {
	const langs = [
		{ lang: 'en', name: 'English' },
		{ lang: 'ru', name: 'Русский' }
	]

	const { i18n } = useTranslation()

	const [currentLang, setCurrentLang] = useState<string>(
		localStorage.getItem('i18nextLng') || 'en'
	)

	const setLang = (lang: string) => {
		i18n.changeLanguage(lang).then(() => {
			setCurrentLang(lang)
		})
	}

	return { currentLang, langs, setLang }
}

export default useLang
