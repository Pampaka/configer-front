import type { MouseEvent } from 'react'
import { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton, Menu, MenuItem } from '@mui/material'

import useLang from '../../../hooks/useLang'

import style from './LangChanger.module.scss'

const LangChanger = () => {
	const { currentLang, langs, setLang } = useLang()

	const [anchorEl, setAnchorEl] = useState<Element | null>(null)
	const open = Boolean(anchorEl)

	const openMenu = (e: MouseEvent) => setAnchorEl(e.currentTarget)

	const closeMenu = () => setAnchorEl(null)

	const clickLang = (lang: string) => {
		setLang(lang)
		closeMenu()
	}

	return (
		<>
			<IconButton color={'inherit'} onClick={openMenu}>
				<LanguageIcon />
				<div className={style.currentLang}>{currentLang}</div>
			</IconButton>
			<Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
				{langs.map(lang => (
					<MenuItem key={lang.lang} onClick={() => clickLang(lang.lang)}>
						{lang.name}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}

export default LangChanger
