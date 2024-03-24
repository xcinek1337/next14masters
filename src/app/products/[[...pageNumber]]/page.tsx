import { type Metadata } from "next";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductSortBy } from "@/gql/graphql";
import { ProductsFilter } from "@/ui/atoms/ProductsFilter";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
	};
	searchParams: {
		sort: string;
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

export async function generateStaticParams() {
	const products = await getPaginatedListOfProducts(8, 0);
	const totalPages = Math.ceil(products.data.length / 8);
	const paths = Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => ({
		params: { pageNumber: [String(pageNumber)] },
	}));

	return paths;
}

export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 8 - 8 : 0;
	const order = searchParams.sort?.includes("-") ? "DESC" : "ASC";
	const orderBy = searchParams.sort?.replace("-", "").toUpperCase() as ProductSortBy;
	const products = await getPaginatedListOfProducts(8, offset, order, orderBy);

	return (
		<>
			<h3 className=" ml-2 py-4 text-2xl ">Products</h3>
			<ProductsFilter />
			<ProductList products={products.data || []} />
		</>
	);
}
