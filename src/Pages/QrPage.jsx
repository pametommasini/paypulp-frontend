import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { QrReader } from 'react-qr-reader'

const QrPage = (props) => {
  const [read, setRead] = useState('No result')
  const [write, setWrite] = useState('')

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setRead(result?.text)
          }

          if (error) {
            console.info(error)
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{read}</p>
      <div style={{ height: 'auto', margin: '0 auto', minWidth: 60, maxWidth: 250, width: '100%' }}>
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={write}
          viewBox={`0 0 256 256`}
        />
      </div>
      <input type="text" value={write} onChange={(e) => setWrite(e.target.value)} />
    </>
  )
}

export default QrPage
