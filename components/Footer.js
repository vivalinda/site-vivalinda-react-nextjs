import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Footer = () => {
  const time = 5000
  return (
    <LazyLoadComponent
      delayTime={time}
    >
      <div className="footer">
        <a className='icons' href="https://www.instagram.com/vivalindaoficial">
          <img href="https://www.instagram.com/vivalindaoficial"  src="../static/insta.svg" />
        </a>
        <a className='icons' href="https://www.facebook.com/vivalindaoficial">
          <img src="../static/face.svg" />
        </a>
        <a className='icons' href="mailto:contato@vivalinda.com.br">
          <img src="../static/mail.svg" />
        </a>
      </div>
      <div className="footerNote">
        <h5>©2018 - VIVALINDA - Todos os Direitos Reservados</h5>
      </div>
      <style jsx>{`
        .icons {
          width: calc(30px + 1%);
          margin-left: auto;
          margin-right: auto;
          cursor: pointer;
          -webkit-user-select: none;
        }
        .footer {
          margin-top: 3%;
          margin-bottom: 2%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footerNote {
          background-color: #c3ad6c;
          width: 100%;
          font-family: Helvetica, sans-serif;
        }
      `}</style>
    </LazyLoadComponent>
  )
}

export default Footer
