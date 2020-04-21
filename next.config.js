const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');
const withMDX = require('@next/mdx');

//module.exports = withCSS(withFonts(withMdx()));
module.exports = withMDX();
