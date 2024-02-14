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
}& Omit<LinkProps<T>, "href">;;

export const ActiveLink = <T extends string>({
	activeClassName = "underline",
	className = "text-blue-500 hover:text-blue-700",
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
