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

	if (!products || products.data.length === 0)
		return (
			<p className="flex h-60 items-center justify-center text-lg font-medium text-teal-800">
				No products found. :(
			</p>
		);

	return (
		<section>
			<div>
				<p className="my-6 w-fit rounded-md bg-zinc-700 px-2 py-1.5 text-lg text-white">
					
					Search results for: {searchParams.query}
				</p>
			</div>

			<ProductList products={products.data} />
		</section>
	);
}
