import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Leash",
		category: "Accessories",
		price: 1999,
		coverImage: {
			alt: "leash",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-09.jpg",
		},
	},
	{
		id: "2",
		name: "8-pack t-shirts",
		category: "T-shirts",
		price: 9999,
		coverImage: {
			alt: "8-pak t-shirts",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
		},
	},
	{
		id: "3",
		name: "White t-shirt",
		category: "T-shirts",
		price: 2500,
		coverImage: {
			alt: "white t-shirt",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg",
		},
	},
	{
		id: "4",
		name: "Cup",
		category: "Home Goods",
		price: 1349,
		coverImage: {
			alt: "sand color cup",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-03-image-card-08.jpg",
		},
	},
];

export default function Home() {
	return (
		<>
			<h3 className=" ml-2 py-4 text-2xl ">Products</h3>
			<ProductList products={products} />
		</>
	);
}
