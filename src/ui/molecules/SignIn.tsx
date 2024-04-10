import { User } from "lucide-react";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const SignIn = async () => {
	return (
		<ActiveLink className="relative flex items-end " activeClassName="" href={"/signin"}>
			<User size={32} />
			<span className="hidden md:block">Sign in or Create Account</span>
		</ActiveLink>
	);
};
