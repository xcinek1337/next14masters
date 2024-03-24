import { Suspense } from "react";
import { getPaginatedListOfProductsBySearch } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
	return {
		title: `Search results for ${searchParams.query}`,
		description: `Search results for ${searchParams.query}`,
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const products = await getPaginatedListOfProductsBySearch(searchParams.query);

	if (!products || products.data.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<div>
				<p>searching for {searchParams.query}</p>
			</div>
			<Suspense key="searchPage">
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
