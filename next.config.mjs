import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

const withMDX = createMDX({
	options: {},
});

export default withMDX(nextConfig);
