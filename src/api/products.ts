import { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResp = (await res.json()) as ProductResponseItem[];
	const products = productsResp.map((product) => productResponseItemToProductItemType(product));

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem[];
	const product = productResponse.map((product) => productResponseItemToProductItemType(product));
    
	return product;
};

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
