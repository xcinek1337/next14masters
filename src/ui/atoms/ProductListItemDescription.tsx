import { type ProductsListItemFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";
import { CurrencyParser } from "@/utils/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, price, rating },
}: ProductListItemDescriptionProps) => {
	return (
		<div className=" flex-col  justify-between p-2">
			<div className="mb-1">
				<Rating rating={rating as number} />
			</div>
			<div>
				<h3 className="cursor-pointer text-sm font-semibold  text-gray-700">{name}</h3>
				<p className="cursor-pointer text-sm  text-gray-500 transition-transform hover:scale-105">
					<span className="sr-only">Category:</span>
				</p>
			</div>
			<p data-testid="product-price" className="text-sm font-medium text-gray-900">
				{/* <span className="sr-only">Price:</span> */}
				{CurrencyParser(price)}
			</p>
			
		</div>
	);
};
