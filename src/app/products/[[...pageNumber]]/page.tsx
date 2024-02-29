import { type Metadata } from "next";
import { getPaginatedListOfProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
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
	const products = await getPaginatedListOfProducts(8,0);
	const totalPages = Math.ceil(products.data.length / 8);
	const paths = Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => ({
		params: { pageNumber: [String(pageNumber)] },
	}));

	return paths;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 8 - 8 : 0;
	const products = await getPaginatedListOfProducts(8, offset);

	return (
		<>
			<h3 className=" ml-2 py-4 text-2xl ">Products</h3>
			<ProductList products={products.data || []} />
		</>
	);
}
