import { Button } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../../components/Container'
import institutes from '../../data/institutes.json'
import { useLang } from '../../providers/langContext'

const Institute = () => {
  const { lang } = useLang()
  const info = lang === 'ES' ? institutes.es : institutes.en

  const router = useRouter()
  const {
    query: { name }
  } = router
  // @ts-ignore
  const data = info[name]

  return (
    <Container>
      <>
        {data ? (
          <>
            <div className="container">
              <div className="left">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <p style={{ fontStyle: 'italic' }}>
                  {lang === 'EN'
                    ? 'Font: https://www.ambientebogota.gov.co/calidad-del-aire'
                    : 'Fuente: https://www.ambientebogota.gov.co/calidad-del-aire'}
                </p>
                <Button shape="round" onClick={() => router.push('/')}>
                  Volver
                </Button>
              </div>
              <div className="right">
                <img src={`/${data.image}`} alt={data.image} />
              </div>
            </div>
          </>
        ) : (
          <h2>No Data</h2>
        )}
      </>
    </Container>
  )
}

export default React.memo(Institute)
