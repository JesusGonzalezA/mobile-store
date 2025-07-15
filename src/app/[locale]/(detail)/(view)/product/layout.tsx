import React from "react"
import { getLocale } from "next-intl/server"
import { Header, Main, NavBar } from "@/components"
import { CartIconWrapper } from "@app/cart/(view)/components/CartIcon"

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()

    return (
        <React.Fragment>
            <Header>
                <NavBar
                    baseUrl={`/${locale}`}
                    items={[
                        {
                            href: "/cart",
                            component: <CartIconWrapper />,
                        },
                    ]}
                    hasReturn={true}
                />
            </Header>
            <Main>{children}</Main>
        </React.Fragment>
    )
}
