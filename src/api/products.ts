import { type ProductItemType } from "@/ui/types";

const API_URL = "https://naszsklep-api.vercel.app/api/products";

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

export const getProductsAllOrPaginated = async (take?: number, offset?: number) => {
	const takeQueryParam = take ? `?take=${take}` : "";
	const offsetQueryParam = offset ? `&offset=${offset}` : "";

	const url = `${API_URL}${takeQueryParam}${offsetQueryParam}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const productsRes = (await response.json()) as ProductResponseItem[];
	const products = productsRes.map(productResponseItemToProductItemType);
	
	return products
};


export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
