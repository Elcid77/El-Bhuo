Sistema de Ecommerce Librería El Bhuo

Descripción

Este proyecto es un sistema de ecommerce desarrollado en React utilizando Vite como herramienta de construcción y Bootstrap para los estilos. Permite a los usuarios explorar una lista de productos, ver detalles de los mismos, y gestionar un carrito de compras con funcionalidades como agregar productos, eliminar elementos y confirmar pedidos.

Funcionalidades

Listado de Productos:

Muestra una lista de productos con información básica como nombre, precio, autor, y miniatura.

Los productos están organizados en tarjetas responsivas.

Detalle del Producto:

Cada producto tiene una página de detalle con descripción extendida e imágenes.

Se incluye un contador para agregar unidades al carrito de compras.

Carrito de Compras:

Visualización de productos seleccionados con su cantidad y precio total.

Miniaturas de los productos seleccionados.

Botón para eliminar productos del carrito.

Formulario para ingresar datos del comprador (email, nombre, teléfono).

Confirmación del Pedido:

Generación de una orden con los datos del comprador y los productos seleccionados.

Almacenamiento en Firebase Firestore.

Tecnologías Utilizadas

React: Framework principal para la construcción del frontend.

Vite: Herramienta de desarrollo para mayor rapidez en la configuración.

Bootstrap: Biblioteca de estilos para una interfaz moderna y responsiva.

Firebase Firestore: Base de datos en la nube para el almacenamiento de productos y órdenes.


Estructura del Proyecto

src/components: Contiene todos los componentes reutilizables como ItemList, ItemDetail, Cart, etc.

src/context: Define el contexto global para manejar el carrito de compras.

src/firebase: Configuración e interacciones con Firestore.

src/assets: Estilos CSS personalizados y recursos estáticos.

Archivos Clave

ItemListContainer.jsx: Componente que gestiona la visualización de la lista de productos.

ItemDetailContainer.jsx: Componente que muestra el detalle de un producto.

Cart.jsx: Componente del carrito de compras.

cartProvider.jsx: Contexto para manejar el estado global del carrito.

db.js: Módulo para interactuar con Firebase Firestore.

Cómo Usar

Navegar por el catálogo de productos.

Seleccionar un producto para ver su detalle.

Agregar productos al carrito utilizando el contador.

Gestionar el carrito: ver productos, eliminar alguno si es necesario.

Completar el formulario de compra y confirmar el pedido.

Próximas Mejoras

Implementación de autenticación de usuarios.

Filtros avanzados para el catálogo de productos.

Integración con pasarelas de pago.

