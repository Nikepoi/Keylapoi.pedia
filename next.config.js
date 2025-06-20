module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.catbox.moe',
        port: '',
        pathname: '**',
      },
      // Tambah hostname lain kalau perlu (misal imgur.com)
      // {
      //   protocol: 'https',
      //   hostname: 'i.imgur.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
  },
};
