import { getProductsAllOrPaginated } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
	};
};

export async function generateStaticParamsType() {
	const products = await getProductsAllOrPaginated();
	const totalPages = Math.ceil(products.length / 8);
	const paths = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => ({
		params: { pageNumber: [String(page)] },
	}));

	return paths;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 8 - 8 : 0;
	const products = await getProductsAllOrPaginated(8, offset);

	return (
		<>
			<h3 className=" ml-2 py-4 text-2xl ">Products</h3>
			<ProductList products={products} />
		</>
	);
}
