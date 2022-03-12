import { Button, Form, Image, InputNumber } from 'antd'
import React, { useState } from 'react'
import Container from '../components/Container'
import text from '../data/home.json'
import { useLang } from '../providers/langContext'

const Calculate = () => {
  const [result, setResult] = useState(0)
  const handleOnFinish = (data: any) => {
    const part1 = (data.IHi - data.ILo) / (data.BPHi - data.BPLo)
    const part2 = data.Cp - data.BPLo
    const result = part1 * part2 + data.ILo
    setResult(Math.round(result * 100) / 100 || 0)
  }
  const { lang } = useLang()
  const info = lang === 'ES' ? text.es : text.en

  return (
    <Container>
      <>
        <h2>{info.calculate}</h2>
        <div className="calculateInfo">
          <Form className="item" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleOnFinish}>
            <Form.Item label="I Hi" name="IHi" rules={[{ required: true, message: info.value }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="I Lo" name="ILo" rules={[{ required: true, message: info.value }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="BP Hi" name="BPHi" rules={[{ required: true, message: info.value }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="BP Lo" name="BPLo" rules={[{ required: true, message: info.value }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="C p" name="Cp" rules={[{ required: true, message: info.value }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Ok
              </Button>
            </Form.Item>
          </Form>
          <img src="/formula.jpg" className="item" />
        </div>
        <div className="additionalInfo">
          <div className="result">
            <h3>{info.result}</h3>
            <p>{result}</p>
          </div>
          <div className="table">
            <img src="./ica.png" />
            <i>Tabla que determina el ICA según el resultado</i>
          </div>
        </div>
      </>
    </Container>
  )
}

export default Calculate
