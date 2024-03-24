import { ShoppingCart } from "lucide-react";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";
import { getCartById } from "@/api/cart";

export const Cart = async () => {
	const cart = await getCartById();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink className="relative flex items-end" activeClassName="" href={"/cart"}>
			<ShoppingCart size={32} />
			Shopping Cart
			{quantity > 0 ? (
				<div className="absolute left-3 top-[-12px]">
					<Badge value={quantity} />
				</div>
			) : null}
		</ActiveLink>
	);
};
