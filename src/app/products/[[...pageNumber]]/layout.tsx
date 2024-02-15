import { getProductsAllOrPaginated } from "@/api/products";
<<<<<<< HEAD
import { Pagination } from "@/ui/molecules/Pagination";
=======
import { Pagination } from "@/ui/organisms/Pagination";
>>>>>>> e2e0b7eb27d26c834cd34455328602ba0d499ba8

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
