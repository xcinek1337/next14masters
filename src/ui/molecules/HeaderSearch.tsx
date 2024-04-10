import { Suspense } from "react";
import Link from "next/link";
import { HeaderInput } from "@/ui/atoms/HeaderInput";
import { Cart } from "@/ui/molecules/Cart";
import { SignIn } from "@/ui/molecules/SignIn";

export const HeaderSearch = () => {
	return (
		<div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-5 py-5">
			<Link className="hidden sm:flex" href={"/"}>
				<span className="cursor-pointer text-2xl">LOGO</span>
			</Link>

			<article className="flex w-full ml-2 md:w-auto">
				<Suspense>
					<HeaderInput />
				</Suspense>
				<div className="flex w-full justify-end gap-4">
					<SignIn />
					<Cart />
				</div>
			</article>
		</div>
	);
};
