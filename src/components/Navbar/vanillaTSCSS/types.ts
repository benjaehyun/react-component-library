export interface NavLink {
    text: string;
    href: string;
    icon?: React.ReactNode;
}

export interface NavbarProps {
    logo?: string;
    brandName?: string;
    links: NavLink[];
    className?: string;
    isResponsive?: boolean;
    theme?: 'light' | 'dark';
    onLinkClick?: (link: NavLink) => void;
}