import { Select } from 'antd'
import Link from 'next/link'
import React from 'react'
import { useLang } from '../providers/langContext'
import text from '../data/home.json'

const Navigation = () => {
  const { lang, setLang } = useLang()
  const info = lang === 'ES' ? text.es : text.en

  const handleOnChange = (data: string) => {
    setLang(data)
  }

  return (
    <nav className="navBar">
      <p className="navBar__item--left">Universidad Distrital Francisco José de Caldas</p>
      <div className="navBar--item">
        <Link href={'/'}>
          <a className="navBar__item">{lang === 'ES' ? 'Inicio' : 'Home'}</a>
        </Link>
        <Link href={'/calculate'}>
          <a className="navBar__item">{lang === 'ES' ? 'Calcular Calidad' : 'Calculate Quality'}</a>
        </Link>
        <Select defaultValue={lang} style={{ margin: '10px' }} onChange={handleOnChange}>
          <Select.Option value="ES">ES</Select.Option>
          <Select.Option value="EN">EN</Select.Option>
        </Select>
      </div>
    </nav>
  )
}

export default React.memo(Navigation)
