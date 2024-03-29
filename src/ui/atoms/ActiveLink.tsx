"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href?: string;
	children: React.ReactNode
	exact?: boolean;
	className?: string;
	activeClassName?: string;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	activeClassName = "border-b-2 border-teal-600 text-teal-400",
	className = "text-white mr-5 cursor-pointer hover:text-teal-500 transition duration-300 ease-in-out",
	children,
	exact,
	href,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href as string);

	return (
		<Link
			href={href as Route}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
			{...props}
		>
			{children}
		</Link>
	);
};
