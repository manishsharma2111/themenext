import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const setInitialTheme = `(function () {
                  function setTheme(newTheme) {
                    document.body.className = newTheme;
                    window.theme = newTheme;
                    window.onThemeChange(newTheme);
                  }
                  window.onThemeChange = function () {};
                  window.setPreferredTheme = function (newTheme) {
                    setTheme(newTheme);
                    try {
                      localStorage.setItem("theme", (window.theme));
                    } catch (err) {}
                  };
                  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                  darkQuery.addListener(function (event) {
                    window.setPreferredTheme(event.matches ? "dark" : "light");
                  });
                  let preferredTheme;
                  try {
                    preferredTheme = (localStorage.getItem("theme"));
                  } catch (err) {}
                  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
                })();
            `;

        return (
            <Html>
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: setInitialTheme,
                        }}
                    ></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
