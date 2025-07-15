import React from "react"
import { getLocale } from "next-intl/server"
import { Container, Header, Main, NavBar } from "@/components"
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
            <Container centered={true}>
                <Main>{children}</Main>
            </Container>
        </React.Fragment>
    )
}
