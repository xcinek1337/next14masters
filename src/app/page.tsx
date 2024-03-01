import { type Metadata } from "next";
import { Suspense } from "react";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsList } from "@/api/collections";

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
	const collections = await getCollectionsList();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	return (
		<section>
			<h1 className="text-xl text-center py-4">
				New collections
			</h1>
			<Suspense key="collectionList">
				<CollectionList collections={collections.data} />
			</Suspense>
			<Suspense>
				<h2 className="font-medium text-2xl pb-10">Recently Sold</h2>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
