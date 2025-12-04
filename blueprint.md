# Visión General

Este proyecto es un dashboard interactivo que visualiza el estado de los libros en Ecuador. El dashboard mostrará datos sobre ventas, importaciones, exportaciones, hábitos de lectura y la distribución de librerías formales por provincia.

## Diseño y Estilo

*   **Estilo:** Simple y moderno.
*   **Tema:** Modo oscuro y claro con un interruptor para cambiar entre ellos.
*   **Paleta de colores:** Colores con buen contraste visual para una fácil lectura.
*   **Componentes:** Se utilizará la librería de componentes `shadcn/ui` sobre `tailwindcss`.

## Funcionalidades

*   Visualización de datos de ventas de libros.
*   Visualización de datos de importaciones y exportaciones.
*   Visualización de datos sobre hábitos de lectura.
*   Mapa o gráfico con el top de provincias con librerías formales.
*   Interactividad en los gráficos para explorar los datos.

## Plan de Acción Actual

1.  **Configurar `tailwindcss` y `shadcn/ui`:** Instalar y configurar las dependencias de estilo.
2.  **Crear la estructura del layout:**
    *   Encabezado con el título del dashboard y el interruptor de tema.
    *   Contenedor principal para las visualizaciones de datos.
3.  **Implementar el cambio de tema (modo oscuro/claro).**
4.  **Crear componentes de placeholder para cada sección del dashboard:**
    *   Ventas.
    *   Importaciones/Exportaciones.
    *   Hábitos de lectura.
    *   Librerías por provincia.
5.  **Integrar los datos (cuando sean proporcionados en formato JSON).**
