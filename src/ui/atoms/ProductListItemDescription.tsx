import { type ProductsListItemFragment } from "@/gql/graphql"
import { CurrencyParser } from "@/utils/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductListItemDescription = ({
	product: {  name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between p-2">
			<div>
				<h3 className="cursor-pointer text-sm font-semibold  text-gray-700">{name}</h3>
				<p className="cursor-pointer text-sm  text-gray-500 transition-transform hover:scale-105">
					<span className="sr-only">Kategoria:</span>
					
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{CurrencyParser(price)}
			</p>
		</div>
	);
};
