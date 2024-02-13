"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends Route> = {
	href: T;
	children: ReactNode;
};

export const ActiveLink = <T extends Route>({
	href,
	children,
	className,
	activeClassName,
}: ActiveLinkProps<T> & { className: string; activeClassName: string }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
