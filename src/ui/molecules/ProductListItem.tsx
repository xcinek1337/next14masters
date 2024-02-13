import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

import { type ProductItemType } from "@/ui/types";
import Link from "next/link";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
