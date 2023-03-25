import i18next from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru'],
		debug: false,
		detection: {
			order: ['localStorage', 'cookie', 'htmlTag'],
			caches: ['localStorage']
		},
		react: {
			useSuspense: true
		},
		interpolation: {
			escapeValue: false
		}
	})

export default i18next
