/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Если сборка выполняется для сервера (не для браузера), просто верните конфигурацию без изменений.
		if (isServer) {
			return config;
		}

		// Иначе, если сборка выполняется для браузера, исключите модули Node.js из сборки.
		config.externals = {
			fs: "empty",
			net: "empty",
			tls: "empty",
		};

		return config;
	},
};

module.exports = nextConfig;
