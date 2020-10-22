module.exports = {
  siteMetadata: {
    title: 'The Great Dev Co.',
    description: 'A online website development agency',
    author: 'Chris Harley',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway', 'sans-serif'],
        },
      },
    },
  ],
}
