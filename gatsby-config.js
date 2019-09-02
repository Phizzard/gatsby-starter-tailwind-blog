module.exports = {
  siteMetadata: {
    title: `My Test Blog`,
    author: `Blog Author`,
    description: `Description text`,
    url: `www.placeholder-blog.com`,
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
            primary: "blue-dark" // #2779BD
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
        background_color: `#2779BD`,
        theme_color: `#2779BD`,
        display: `standalone`,
        icon: `content/assets/navbrandlogo.png`,
      },
    },
    //`gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`
  ],
}