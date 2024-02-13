import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	
};

const withMDX = createMDX({
	options: {},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
