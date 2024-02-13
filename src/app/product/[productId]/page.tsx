import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { SingleProduct } from "@/ui/organisms/SingleProduct";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name}- Next.js E-commerce App`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name}- Next.js E-commerce App`,
			description: `${product.description}`,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<SingleProduct product={product} />
			<Suspense>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
