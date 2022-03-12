import { Col, Divider, Image, Row } from 'antd'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import YouTube from 'react-youtube'
import Container from '../components/Container'
import text from '../data/home.json'
import { useLang } from '../providers/langContext'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
}
const Home = ({ bogota }: { bogota: any }) => {
  const { lang } = useLang()
  const {
    data: { current }
  } = bogota

  const info = lang === 'ES' ? text.es : text.en

  return (
    <Container>
      <>
        <h1 style={{ fontSize: '2.5em', textAlign: 'center' }}>{info.title}</h1>
        <Row gutter={32} className="info">
          <Col span={13} className="info__item--text">
            <h2 style={{ fontSize: '2.3em' }}>{info.air}</h2>
            <p>{`${info.info}`}</p>
            <i>
              {`${info.font}: `}
              <a href="http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire" target={'_blank'} rel="noreferrer">
                http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire
              </a>
            </i>
          </Col>
          <Col span={11} className="info__item--image">
            <Image src={'https://drgdiaz.com/eco/Bogota-envenenada-con-diesel.JPG'} alt="Bogotá" className="image" />
          </Col>
        </Row>

        <div className="recomendados">
          <div className="recomendados--item">
            <h2 style={{ textAlign: 'center' }}>{info.recommended}:</h2>
            <div className="list">
              <Link href={{ pathname: '/institute', query: { name: 'iboca' } }}>{info.iboca}</Link>

              <Link href={{ pathname: '/institute', query: { name: 'forecast' } }}>{info.forecast}</Link>

              <Link href={{ pathname: '/institute', query: { name: 'rmcab' } }}>{info.rmcab}</Link>

              <Link href={{ pathname: '/institute', query: { name: 'inventory' } }}>{info.inventory}</Link>
            </div>
          </div>
          <div className="recomendados--item">
            <Image src={'https://bogotacomovamos.org/wp-content/uploads/2016/03/Bogot%C3%A1-una-ciudad-para-disfrutar-820x530.jpg'} />
          </div>
        </div>

        <div className="bogotaContainer">
          <YouTube videoId="MbUiiLZuDvs" />
          <p style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>5 Feb 2022</p>
          <Divider />
        </div>

        {bogota && (
          <div className="bogotaContainer">
            <h2>{`Bogotá D.C - ${bogota.data.country}`}</h2>
            <p>{moment(current?.pollution?.ts).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className="data">
              <h3>{info.pollution}</h3>
              <p>
                {current?.pollution?.aqius} - {info.aqi}
              </p>
              {/* <p>
                {current?.pollution.mainus} {info.mainus}
              </p> */}
              <Divider />
              <h3>{info.weather}</h3>
              <p>
                {current?.weather?.tp} - {info?.tp}
              </p>
              <p>
                {current?.weather?.pr} - {info?.pressure}
              </p>
              <p>
                {current?.weather?.hu} - {info?.humidity}
              </p>
            </div>
          </div>
        )}
      </>
    </Container>
  )
}

export async function getServerSideProps() {
  const resp = await fetch('http://api.airvisual.com/v2/nearest_city?key=3717bae8-15be-457b-a1e4-dcc7a4bb8a18')
  const final = await resp.json()
  return {
    props: {
      bogota: final
    }
  }
}

export default Home
