"use client";
import type { Route } from "next";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	href: Route;
	children: React.ReactNode;
	className: string;
	activeClassName: string;
	exact: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
