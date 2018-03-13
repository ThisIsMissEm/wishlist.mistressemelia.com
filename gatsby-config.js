module.exports = {
  siteMetadata: {
    title: "Mistress Emelia's Wishlist",
    description: 'test',
    keywords: 'a, b, c',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-amazon-wishlist',
      options: {
        wishlistUrl: 'https://www.amazon.de/registry/wishlist/2WVYBLDQ5KDSG',
        language: 'en-GB',
        limit: process.env.NODE_ENV === 'production' ? false : 25,
      },
    },
  ],
}
