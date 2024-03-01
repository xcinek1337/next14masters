import { type Route } from "next";

import Link from "next/link";

type CardLinkProps = {
	href: Route;
	name: string;
};

export const CardLink = ({ href, name }: CardLinkProps) => (
	<Link className="flex justify-center" href={href}>
		<span className="py-10 text-2xl font-bold italic text-teal-700 md:text-3xl">{name}</span>
	</Link>
);
