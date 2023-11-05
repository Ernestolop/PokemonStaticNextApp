# Proyecto de Curso de Next.js - Pokémon App

Este es un proyecto desarrollado como parte del [Curso de Next](https://www.udemy.com/course/nextjs-fh/). El proyecto se enfoca en la creación de un sitio web de Pokemones utilizando Next.js. En este proyecto, hemos utilizado las capacidades de Next.js para generar páginas estáticas del lado del servidor y aplicar hidratación del lado del cliente, así como también para optimizaciones de imágenes y SEO.

## Características del Proyecto

- **Consulta de la API de Pokémon:** Hemos utilizado [Axios](https://github.com/axios/axios) para interactuar con una API de Pokémon y obtener el listado de los primeros 151 Pokémon.

- **Generación de Páginas Estáticas:** Utilizamos las funciones getStaticProps y getStaticPaths (SSG) de Next.js para generar páginas estáticas y de manera dinámica. Hemos estudiado sobre los diferentes métodos de renderizado disponibles en Next.js y cuando es mejor utilizar cada uno de ellos para optimizar la aplicación.

- **Hidratación del Lado del Cliente:** Implementamos la funcionalidad de agregar pokémones favoritos y la página de favoritos utilizando la hidratación del lado del cliente para una experiencia de usuario más dinámica, con todos los conocimientos que ya tenemos sobre la libreria de React.js(libreria sobre el cual está construido Next.js).

- **Optimización para SEO:** Cada página del sitio está optimizada para SEO, incluyendo metaetiquetas en todas las páginas, URLs amigables y metaetiquetas para redes sociales. Esto mejora la visibilidad del sitio en los motores de búsqueda y las redes sociales.

## Principales Tecnologías Utilizadas

- **Next.js:** Utilizamos [Next.js](https://nextjs.org/) como el marco de trabajo principal para la creación de la aplicación.

- **Tailwind CSS:** Para estilizar la interfaz de usuario de manera eficiente y rápida.

- **Next UI:** Para mejorar la apariencia y la experiencia del usuario.

- **Canvas Confetti:** Agregamos un toque de diversión a la experiencia del usuario con animaciones de confeti.

- **Axios:** Para interactuar con la API de Pokémon y obtener los datos necesarios.

- **Yarn:** Para la gestión de paquetes.

## He resaltado los siguientes puntos importantes de la documentación de Next.js:

- La renderización puede tener lugar en el servidor o en el cliente. Puede ocurrir antes de tiempo en el momento de la compilación o en cada solicitud en el tiempo de ejecución. Con Next.js, hay tres tipos de métodos de renderizado disponibles:
  - Renderizado del lado del servidor.
  - Generación de sitios estáticos.
  - Renderizado del lado del cliente.

- Pre-renderizado: La renderización del lado del servidor y la generación de sitios estáticos también se denominan prerenderización porque la obtención de datos externos y la transformación de los componentes de React en HTML se realizan antes de que el resultado se envíe al cliente.

- Con Static Site Generation, el HTML se genera en el servidor, pero a diferencia de la renderización del lado del servidor, no hay ningún servidor en tiempo de ejecución. En cambio, el contenido se genera una vez, en el momento de la compilación, cuando se implementa la aplicación, y el HTML se almacena en una CDN y se reutiliza para cada solicitud.

- La belleza de Next.js es que puede elegir el método de representación más apropiado para su caso de uso página por página, ya sea generación de sitio estático, representación del lado del servidor o representación del lado del cliente. Para obtener más información sobre qué método de representación es el adecuado para su caso de uso específico, consulte los documentos de obtención de datos.


## Instrucciones de Ejecución

Para visitar el sitio web, puedes acceder a la siguiente URL: [https://pokemon-static-next-app-elopez.vercel.app](https://pokemon-static-next-app-elopez.vercel.app)

---

By Ernesto Lopez
