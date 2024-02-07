import { type ProductItemType } from "@/ui/types";
import { CurrencyParser } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between p-2">
			<div>
				<h3 className="cursor-pointer text-sm font-semibold  text-gray-700">{name}</h3>
				<p className="cursor-pointer text-sm  text-gray-500 transition-transform hover:scale-105">
					<span className="sr-only">Kategoria:</span>
					{category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{CurrencyParser(price)}
			</p>
		</div>
	);
};
