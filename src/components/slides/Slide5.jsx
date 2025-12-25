import React from 'react'

export default function Slide5(){
  return (
    <div className="slide-container">
      <h2 className="slide-title">Dress Code: Padrinhos</h2>
      <div className="content-area">
        <div className="two-column image-last">
          <div>
            <div className="color-circle" style={{backgroundColor: '#CFCFCF'}}></div>
            <h3>Cinza Claro & Branco</h3>
            <p>O visual dos nossos padrinhos será leve e sofisticado, ideal para uma cerimônia matutina:</p>
            <ul style={{marginTop:20}}>
              <li><strong>Calça Social:</strong> Cinza Claro (#CFCFCF).</li>
              <li><strong>Camisa:</strong> Social Branca (manga longa, bem alinhada).</li>
              <li>Sem necessidade de paletó.</li>
              <li>Sapatos em tons de café ou preto.</li>
            </ul>
          </div>
          <div className="image-wrapper">
            <img src="/img/padrinho_tom_holland.jpg" alt="Modelo Padrinho - Holland" onError={(e)=>{e.target.src='/img/placeholder.svg'}} />
            <div className="image-caption">Padrinhos</div>
          </div>
        </div>
      </div>
    </div>
  )
}