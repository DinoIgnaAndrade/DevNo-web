// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Configura el loader para manejar archivos PDF
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    // Soluciona el problema de carga en el servidor
    if (isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();

        // Soluciona el problema de carga en el servidor
        entries['./src/components/NavBar/Curriculum.pdf'] = './src/components/NavBar/Curriculum.pdf';

        return entries;
      };
    }

    return config;
  },
};

export default nextConfig;
