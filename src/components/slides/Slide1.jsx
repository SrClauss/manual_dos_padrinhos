import React from 'react'

export default function Slide1(){
  return (
    <div className="slide-container">
      <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{textTransform: 'uppercase', letterSpacing: '5px', color: '#B02C0C', fontWeight: 'bold', marginBottom: 0}}>Casamento Clausemberg & Brunella</p>
        <h1>Manual dos Padrinhos</h1>
        <div style={{width: 200, height: 1, background: '#CFCFCF', margin: '30px 0'}}></div>
        <p className="subtitle">31 de Janeiro de 2026</p>
      </div>
    </div>
  )
}