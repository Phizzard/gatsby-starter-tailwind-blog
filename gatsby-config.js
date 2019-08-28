module.exports = {
  siteMetadata: {
    title: `My Test Blog`,
    author: `Phil the testing person`,
    description: `Description placeholder`,
    url: `www.phil-blog.dev`,
    social: [
      {
        key: `twitter`,
        username: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        key: `github`,
        username: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@phizzard/gatsby-theme-tailwind-blog",
      options: {
        theme: {
          colours:{
            primary: "blue"
          }
        },
        contentPath: "content/posts",
        assetsPath: "content/assets",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test Blog`,
        short_name: `TestBlog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `content/assets/navbrandlogo.png`,
      },
    },
    //`gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`
  ],
}