import { Icon } from "@iconify/react";
import { Button } from "../ui/button";

type NavbarItemType = {
    icon: string;
    href?: string;
    title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function NavbarItem({
    icon,
    href,
    title,
    className,
    ...props
}: NavbarItemType) {
    return (
        <Button
            onClick={() => href && (window.location.href = href)}
            title={title}
            aria-label={title}
            className={`cursor-pointer p-3  bg-primary text-black dark:bg-primaryDark ${className ?? ""}`}
            {...props}
        >
            <Icon icon={icon} className="text-4xl" />
        </Button>
    );
}
