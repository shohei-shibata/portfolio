const withPlugins = require('next-compose-plugins');
//const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withMDX = require("@next/mdx")({
    // parse mdx files
    extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ['md', 'mdx', 'jsx', 'js'],
};

module.exports = withPlugins([
  withFonts,
  withMDX
], nextConfig);

