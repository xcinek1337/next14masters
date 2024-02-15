import { getProductsAllOrPaginated } from "@/api/products";
import { SuggestedProductHeader } from "@/ui/atoms/SuggestedProductHeader";
import { ProductList } from "@/ui/organisms/ProductList";


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = (await getProductsAllOrPaginated()).slice(0, 4);
	await sleep(2000);

	return (
		<>
			<SuggestedProductHeader />
			<aside>
				<ProductList products={products} />
			</aside>
		</>
	);
};
