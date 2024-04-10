import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";
import { CardLink } from "@/ui/atoms/CardLink";

type CollectionListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionList = ({ collections }: CollectionListProps): JSX.Element => {
	return (
		<>
			<h1 className="py-4 mb-6 text-center font-mono text-2xl md:text-3xl">New collections</h1>
			<ul className="mb-8 grid grid-cols-1 gap-8 border-b pb-8 sm:grid-cols-2 md:grid-cols-3">
				{collections.map((collection) => (
					<CardLink
						src={`/${collection.slug}.avif`}
						name={collection.name}
						key={collection.id}
						href={`/collections/${collection.slug}` as Route}
					/>
				))}
			</ul>
		</>
	);
};
