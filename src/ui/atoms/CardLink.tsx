/* eslint-disable @next/next/no-img-element */
import { type Route } from "next";
import Link from "next/link";

type CardLinkProps = {
	href: Route;
	name: string;
	src: string;
};

export const CardLink = ({ href, name, src }: CardLinkProps) => (
	<li>
		<Link className="flex justify-center transition-all hover:scale-105" href={href}>
			<figure className=" relative h-[240px]">
				<img
					width={300}
					height={250}
					src={src}
					alt={name}
					className=" h-full w-full rounded-xl object-cover transition-all hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
				/>
				<span className="pointer-events-none  rounded-xl px-2 absolute left-1/2 top-1/2 -translate-x-1/2  lg:text-xl -translate-y-1/2 text-base font-bold text-teal-400 bg-slate-200">
					{name}
				</span>
			</figure>
		</Link>
	</li>
);
