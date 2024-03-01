import { Suspense } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { HeaderInput } from "@/ui/atoms/HeaderInput";

export const HeaderPartTop = () => {
	return (
		<div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-5">
			<Link href={"/"}>
				<span className="cursor-pointer text-2xl">LOGO</span>
			</Link>
			<article className="flex">
				<Suspense>
					<HeaderInput />
				</Suspense>
				<p className="mx-5 flex items-end">
					<User size={32} /> Sign in or Create Account{" "}
				</p>
				<p className="flex items-end">
					<ShoppingCart size={32} />
					Shopping Cart
				</p>
			</article>
		</div>
	);
};
