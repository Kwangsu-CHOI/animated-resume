/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
};

export default nextConfig;

// const nextConfig = {
// 	output: "export",
// 	images: {
// 		loader: "custom",
// 		loaderFile: "./loader.js",
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "images.pexels.com",
// 			},
// 		],
// 	},
// };

// export default nextConfig;
