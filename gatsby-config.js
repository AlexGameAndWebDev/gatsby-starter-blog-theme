module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Informatichiamo`,
    author: `Alessandro Belotti`,
    description: `Questo è un blog che parla di informatica a 360 gradi. Si trattano argomenti che variano dalla programmazione all'elettronica fino a parlare di Machine Learning e creazione di siti web.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
