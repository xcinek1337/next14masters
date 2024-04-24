import { type Metadata } from "next";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { ProductsFilter } from "@/ui/atoms/ProductsFilter";
import { Pagination } from "@/ui/molecules/Pagination";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
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
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 8 - 8 : 0;

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

	const getQueryParams = () => {
		if (searchParams.sortBy) {
			return `sortBy=${searchParams.sortBy}`;
		}
		return "";
	};

	return (
		<section>
			<div className="flex items-center justify-between">
				<h1 className="my-6 w-fit rounded-md bg-zinc-700 p-1.5 text-lg font-bold text-white sm:text-2xl">
					All products
				</h1>
				<ProductsFilter />
			</div>

			<ProductList products={products.data || []} />

			<Pagination
				queryParams={getQueryParams()}
				linkTo="products"
				currentPage={params.pageNumber ? Number(params.pageNumber[0]) : 1}
				totalPages={Math.ceil(products.meta.total / 8)}
			/>
		</section>
	);
}
