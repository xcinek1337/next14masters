"use server";

import { revalidateTag } from "next/cache";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { CartChangeProductQuantityDocument, CartRemoveProductDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const changeItemQuantity = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphQL({
		query: CartChangeProductQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};

export const removeItemFromCart = async (cartId: string, productId: string) => {
	await executeGraphQL({
		query: CartRemoveProductDocument,
		variables: {
			cartId,
			productId,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};

export async function addProductToCartAction(productId: string) {
	"use server";
	const cart = await getOrCreateCart();
	const productInCart = cart.items.find((item) => item.product.id === productId);
	productInCart
		? await changeItemQuantity(cart.id, productId, productInCart.quantity + 1)
		: await addProductToCart(cart.id, productId, 1);

	revalidateTag("cart");
}
