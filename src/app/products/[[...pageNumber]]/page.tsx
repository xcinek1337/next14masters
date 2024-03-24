import { type Metadata } from "next";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

import { ProductsFilter } from "@/ui/atoms/ProductsFilter";

type ProductsPageProps = {
	params: {
		page: string[];
	};
	searchParams: {
		sortBy: string;
	};
};

export const metadata: Metadata = {
	title: "Products",
	description: "List of all products",
	openGraph: {
		title: "Products",
		description: "List of all products",
	},
};

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
	const offset = params.page ? Number(params.page[0]) * 8 - 8 : 0;
	const order = () => {
		if (!searchParams.sortBy || searchParams.sortBy === "no-sort") return undefined;
		if (searchParams.sortBy.includes("-asc")) return "ASC";
		else return "DESC";
	};
	const orderBy = () => {
		if (!searchParams.sortBy || searchParams.sortBy === "no-sort") return undefined;
		if (searchParams.sortBy.startsWith("price")) return "PRICE";
		if (searchParams.sortBy.startsWith("rat")) return "RATING";
	};
	const products = await getPaginatedListOfProducts(8, offset, order(), orderBy());

	return (
		<section>
			<div className="flex items-center justify-between">
				<h1 className="mb-4 w-fit rounded-xl bg-black p-1.5 text-2xl font-bold text-white">
					All products
				</h1>
				<ProductsFilter />
			</div>

			<ProductList products={products.data || []} />
			
		</section>
	);
}
