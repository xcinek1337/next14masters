import { ShoppingBasket } from "lucide-react";
import { getCartById } from "@/api/cart";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { CurrencyParser } from "@/utils/utils";

export default async function CartPage() {
	const cart = await getCartById();

	if (!cart || !cart.items.length) {
		return (
			<section className="flex min-h-64 flex-col items-center justify-center gap-8 text-3xl">
				<ShoppingBasket size={64} />
				<span>Cart is empty...</span>
			</section>
		);
	}
	const total = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
	return (
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<div className="flex flex-col gap-8 lg:flex-row ">
				<article className="flex w-full flex-col">
					<CartProductList cart={cart} isDescription />
				</article>
				<aside className="flex h-[150px] w-full flex-col rounded-md bg-gray-100 p-8 shadow-md lg:w-2/5">
					<div className="flex items-center justify-between font-semibold">
						<p>Total:</p>
						<span>{CurrencyParser(total)}</span>
					</div>
				</aside>
			</div>
		</section>
	);
}
