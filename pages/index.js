import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Photos from '../components/Photos'
import fetch from 'isomorphic-unfetch'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ga from '../components/analytics/ga'
import fb from '../components/analytics/fb'
import { INSTA_TOKEN } from '../instatoken.js'


export default class extends React.Component {

  static async getInitialProps () {

    const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
    const numOfPics = '12'

    const res = await fetch(`${baseURL}?access_token=${INSTA_TOKEN}&count=${numOfPics}&callback=?`)
    const json = await res.json()

    let imgURLs = []
    json.data.map( photo => imgURLs.push(photo.images.standard_resolution.url))

    let onScreePhotos = imgURLs.slice(0,2)
    let photos = imgURLs.slice(2,12)

    return {
      onScreePhotos: onScreePhotos,
      photos: photos
    }
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { onScreePhotos, photos } = this.props
    const time = 4000

    return (
      <div className='list'>
        <Head>
          <title>Vivalinda</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
          <script dangerouslySetInnerHTML={{__html: ga}} />
          <script dangerouslySetInnerHTML={{__html: fb}} />
        </Head>
        <img className="logo" src="../static/logo.svg" alt="Vivalinda"/>
        {
          onScreePhotos.map((photo) => (
            <div
              key={photo}
              className='photo'
            >
              <img
                className='photoLink'
                src={photo}
                alt="Vivalinda"
              />
            </div>
            )
          )
        }
        {
          photos.map((photo) => (
             <LazyLoadComponent key={photo} className='photo'>
               <img
                 className='photoLink'
                 src={photo}
                 alt="Vivalinda"
               />
             </LazyLoadComponent>
             )
           )
        }
        <Footer />
        <style jsx>{`
          .test{
            width: 200px;
            height: 200px
          }
          .list {
            padding: 5px;
            text-align: center;
            background-color: #111;
          }
          .logo{
            width: calc(160px + 3%);
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 15px;
            margin-top: 10px;
            -webkit-user-select: none;
          }
          .photo {
            display: inline-block;
          }
          .photoLink {
            color: #333;
            verticalAlign: middle;
            background: #eee;
            display: inline-block;
            width: 280px;
            height: 280px;
            line-height: 280px;
            margin: 5px 7px 5px 7px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.12);
            border-radius: 7px;
            -webkit-user-select: none;
          }
          @media only screen and (max-width: 597px) {
            .photoLink {
              width: 92%;
              height: auto;
              line-height: auto;
            }
          }
          @media (min-width: 1102px) and (max-width: 1169px) {
            .photoLink {
              width: 350px;
              height: 350px;
              line-height: 350px;
            }
          }
        `}</style>
        <style jsx global>{`
          body{
            margin: 0px;
        `}</style>
      </div>
    )
  }
}
