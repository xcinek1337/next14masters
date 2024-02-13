import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { SingleProductMolecula } from "@/ui/molecules/SingleProductMolecula";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { ProductItemType } from "@/ui/types";

export const SingleProduct = ({ product }: { product: ProductItemType }) => {
	return (
		<div className="flex flex-col sm:flex-row ">
			<SingleProductMolecula product={product} />
		</div>
	);
};
