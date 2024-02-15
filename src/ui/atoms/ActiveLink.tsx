"use client";
import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	activeClassName = "bg-amber-200 shadow-lg shadow-red-200 ",
	className = "text-xl text-emerald-700 hover:bg-amber-300 hover:shadow-red-100 rounded-2xl shadow-lg px-6 py-3 mr-5",
	children,
	exact,
	href,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href as string);

	return (
		<Link
			href={href}
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
