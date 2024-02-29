import { type Metadata } from "next";
import { Suspense } from "react";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const metadata: Metadata = {
	title: "NextShop - Home",
	description: "Welcome to the nextShop",
	openGraph: {
		title: "NextShop - Home",
		description: "Welcome to the nextShop",
	},
};

export default async function HomePage() {
	const products = await getPaginatedListOfProducts(8, 0);

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	return (
		<section>
			<Suspense>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
