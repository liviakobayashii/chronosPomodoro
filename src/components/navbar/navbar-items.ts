
type NavbarItemsType = {
    id: number,
    icon: string
    href?: string
    title: string
}

export const NavbarItems: NavbarItemsType[] = [
    { id: 1, icon: "material-symbols:home-outline-rounded", title: "Página inicial" },
    { id: 2, icon: "pepicons-pop:rewind-time", title: "Ver histórico" },
    { id: 3, icon: "solar:settings-outline", title: "Configurações" },
    { id: 4, icon: "solar:sun-outline", title: "Mudar tema" },
]