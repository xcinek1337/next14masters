import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<>
			<h3 className=" ml-2 py-4 text-2xl ">Products</h3>
			<ProductList products={products} />
		</>
	);
}
