import { CurrencyParser } from "@/utils/utils";

export const SingleProductPrice = ({ price }: { price: number }) => {
	return <p className="pb-6">{CurrencyParser(price)}</p>;
};
