import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="dark text-foreground bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
