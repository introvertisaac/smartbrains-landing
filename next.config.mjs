import withFonts from 'next-fonts';

export default withFonts({
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config, options) {
    return config;
  },
});
