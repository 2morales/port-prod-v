/* /components/Layout.js */
import React from "react";
import Head from "next/head";

import "../static/css/all.js";

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps({ req }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps, isAuthenticated };
    }
    render() {
        const { children } = this.props;
        const title = "portfolio";
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossOrigin="anonymous"
                    />
                    <script src="https://js.stripe.com/v3" />
                </Head>
                <header />

                <div>{children}</div>
            </div>
        );
    }
}

export default Layout;
