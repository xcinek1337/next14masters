import { SingleProductAdditionalGallery } from "@/ui/atoms/SingleProductAdditionalGallery";
import { SingleProductBtnAddToCart } from "@/ui/atoms/SingleProductBtnAddToCart";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";
import { SingleProductImage } from "@/ui/atoms/SingleProductImage";
import { SingleProductName } from "@/ui/atoms/SingleProductName";
import { SingleProductPrice } from "@/ui/atoms/SingleProductPrice";
import { SingleProductSelect } from "@/ui/atoms/SingleProductSelect";
import { ProductItemType } from "@/ui/types";

export const SingleProductMolecula = ({ product }: { product: ProductItemType }) => {
	return (
		<>
			<div>
				<SingleProductImage src={product.coverImage.src} alt={product.coverImage.alt} />
			</div>
			<div className="sm:pl-8">
				<SingleProductName name={product.name} />
				<SingleProductPrice price={product.price} />
				<SingleProductAdditionalGallery product={product.coverImage} />
				<SingleProductSelect />
				<SingleProductBtnAddToCart />
				<SingleProductDescription description={product.description} />
			</div>
		</>
	);
};
