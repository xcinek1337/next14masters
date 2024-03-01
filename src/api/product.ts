import { ProductGetItemByIdDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getProductById = async (id: string) => {
	const response = await executeGraphQL(ProductGetItemByIdDocument, { id });

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response;
};
