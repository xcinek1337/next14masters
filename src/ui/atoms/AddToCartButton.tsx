"use client";

import { useFormStatus } from "react-dom";
import { ShoppingBag } from "lucide-react";
import { addProductToCartAction } from "@/actions/cart";

type Props = {
	productId: string;
};

export const AddToCartButton = ({ productId }: Props) => {
	const {pending} = useFormStatus();

	return (
		<form action={() => addProductToCartAction(productId)}>
			<input type="hidden" name="productId" value={productId} />
			<button
				data-testid="add-to-cart-button"
				disabled={pending}
				type="submit"
				className="flex items-center gap-4 rounded-lg border p-4 shadow-md transition-all hover:scale-105 disabled:cursor-wait"
			>
				Add to cart
				<ShoppingBag size={24} color="black" />
			</button>
		</form>
	);
};
