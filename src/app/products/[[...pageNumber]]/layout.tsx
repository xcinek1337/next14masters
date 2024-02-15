import { getProductsAllOrPaginated } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function ProductsLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { pageNumber: string[] };
}) {
	const currentPage = params.pageNumber ? Number(params.pageNumber[0]) : 1;
	const products = await getProductsAllOrPaginated();
	const totalPages = Math.ceil(products.length / 8);

	return (
		<>
			<section>{children}</section>
			<Pagination currentPage={currentPage} totalPages={totalPages} />
		</>
	);
}
