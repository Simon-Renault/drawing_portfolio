// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Portfolio",
  siteUrl: `https://www.itsnwa.com`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Item',
        baseDir: './items',
        path: '*.md'
      }
    }
  ]
};
