import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductReviewsById } from "@/api/product";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { getSuggestedProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Reviews } from "@/ui/organisms/Reviews";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const data = await getProductById(params.id);
	if (!data.product) return { title: "Product" };

	return {
		title: data.product.name,
		description: data.product.description,
		openGraph: {
			title: data.product.name,
			description: data.product.description,
			images: [
				{
					url: data.product.images[0]?.url || "",
					alt: data.product.name,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: Params) {
	const data = await getProductById(params.id);
	if (!data.product) return <p>Product not found.</p>;

	const suggestedProducts = await getSuggestedProducts(data.product);

	const productReviews = await getProductReviewsById(data.product.id);

	return (
		<section className="md:mx-24">
			<Suspense key="product">
				<ProductItem product={data.product} />
			</Suspense>
			<Suspense key="suggestedProducts">
				{suggestedProducts && (
					<div data-testid="related-products" className="my-8 border-t">
						<h2 className="pb-10 text-2xl font-medium">Related products</h2>
						<ProductList products={suggestedProducts} />
					</div>
				)}
			</Suspense>
			{productReviews.product?.reviews && (
				<Reviews product={data.product} reviews={productReviews.product.reviews} />
			)}
		</section>
	);
}
