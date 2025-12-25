import React from 'react'

export default function Slide6(){
  return (
    <div className="slide-container">
      <h2 className="slide-title">Onde e Quando</h2>
      <div className="content-area">
        <div style={{display: 'flex', gap: 30, width: '100%'}}>
          <div className="tile">
            <div className="icon"><i className="fa-solid fa-church"></i></div>
            <h3>Cerimônia</h3>
            <p><strong>10:00 Horas</strong><br/>Igreja Matriz de São Mateus - ES</p>
            <p style={{fontSize:16, color:'#888', marginTop:10}}>R. Floriano Peixoto - Centro, 29930-080</p>
          </div>
          <div className="tile">
            <div className="icon"><i className="fa-solid fa-person-walking-arrow-right"></i></div>
            <h3>Chegada dos Padrinhos</h3>
            <p><strong>09:30 Horas</strong></p>
            <p>Padrinhos precisam estar meia hora no mínimo adiantados para organização.</p>
          </div>
          <div className="tile">
            <div className="icon"><i className="fa-solid fa-map-location-dot"></i></div>
            <h3>Coordenadas</h3>
            <p><a href="https://www.google.com/maps/search/?api=1&query=-18.7155556,-39.8619444" target="_blank" rel="noopener noreferrer" title="Abrir no Google Maps">18° 42′ 56″ S<br/>39° 51′ 43″ O</a></p>
            <p style={{fontSize:14, marginTop:10}}>Nos encontramos lá!</p>
          </div>
        </div>
      </div>
    </div>
  )
}