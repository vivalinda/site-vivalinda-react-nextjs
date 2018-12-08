import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {

  static async getInitialProps () {

    const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
    const numOfPics = '6'

    const res = await fetch(`${baseURL}?access_token=2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6&count=${numOfPics}&callback=?`)
    const json = await res.json()

    return { photos: json.data }
  }

  constructor (props) {
    super(props)
    //this.onKeyDown = this.onKeyDown.bind(this)
  }

  render () {
    const { photos } = this.props

    return (
      <div className='list'>
        <img className="logo" src="../static/logo.svg" alt="Vivalinda"/>
        {
          photos.map((id) => (
            <div key={id.images.standard_resolution.url} className='photo'>
              <img
                className='photoLink'
                src={id.images.standard_resolution.url}
              />
            </div>
          ))
        }
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
          .list {
            padding: 5px;
            text-align: center;
            background-color: #111;
          }
          .logo{
            width: calc(120px + 5%);
            margin-bottom: 1%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .photo {
            display: inline-block;
          }
          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 280px;
            height: 280px;
            line-height: 280px;
            margin: 5px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.12);
            border-radius: 3px;
          }
          .photoLink:hover {
            borderColor: blue;
          }
          @media only screen and (max-width: 613px) {
            .photoLink {
              width: 95%;
              height: auto;
              line-height: auto;
            }
          }
          @media only screen and (min-width: 1118px) {
            .photoLink {
              width: 350px;
              height: 350px;
              line-height: 350px;
            }
          }
          .icons {
            width: calc(30px + 1%);
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
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
      </div>
    )
  }
}
