import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import UseSiteMetadata from '../hooks/use-siteMetadata'

const layout = ({ children }) => {
  const { title, description, author } = UseSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html,
          body {
            margin: 0;
            font-family: 'Raleway', sans-serif;
            line-height: 1.4;
            font-size: 18px;
          }

          img {
            width: 100%;
          }

          li {
            list-style: none;
          }

          a {
            text-decoration: none;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={description} content={description} author={author} />
      </Helmet>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default layout
