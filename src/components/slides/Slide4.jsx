import React from 'react'

export default function Slide4(){
  return (
    <div className="slide-container">
      <h2 className="slide-title">Dress Code: Madrinhas</h2>
      <div className="content-area">
        <div className="two-column image-first">
          <div className="image-wrapper">
            <img src="/img/adelle_madrinha3.jpg" alt="Modelo Madrinha - Adelle" onError={(e)=>{e.target.src='/img/placeholder.svg'}} />
            <div className="image-caption">Madrinhas</div>
          </div>
          <div>
            <div className="color-circle" style={{backgroundColor: '#B02C0C'}}></div>
            <h3>Vestido Longo Terracota</h3>
            <p>Para o nosso altar, sonhamos com uma paleta quente e vibrante. Pedimos que escolham um vestido <strong>longo</strong> no tom <strong>Terracota</strong> (#B02C0C).</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}