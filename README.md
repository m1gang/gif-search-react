# 🎬 GifExpertApp

Una aplicación web desarrollada en React que permite buscar y visualizar GIFs utilizando la API de Giphy. Los usuarios pueden agregar categorías de búsqueda y ver los resultados en una interfaz moderna y responsiva.

## ✨ Características

- 🔍 **Búsqueda de GIFs**: Busca GIFs por categoría utilizando la API de Giphy
- ➕ **Agregar categorías**: Añade nuevas categorías de búsqueda dinámicamente
- 🎨 **Interfaz moderna**: Diseño limpio con animaciones CSS
- 📱 **Responsive**: Se adapta a diferentes tamaños de pantalla
- ⚡ **Carga optimizada**: Estados de carga y manejo de datos eficiente
- 🎭 **Animaciones**: Efectos visuales suaves con Animate.css

## 🚀 Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca principal para la interfaz de usuario
- **Hooks personalizados** - `useFetchGifs` para manejo de estado y efectos
- **PropTypes** - Validación de tipos de props
- **CSS3** - Estilos personalizados con gradientes y animaciones
- **Giphy API** - Servicio para obtener GIFs

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AddCategory.js      # Componente para agregar nuevas categorías
│   ├── GifGrid.js          # Grid principal que muestra los GIFs
│   └── GifGridItem.js      # Item individual de cada GIF
├── hooks/
│   └── useFetchGifs.js     # Hook personalizado para fetch de datos
├── helpers/
│   └── getGifs.js          # Función para llamar a la API de Giphy
├── GifExpertApp.js         # Componente principal de la aplicación
├── index.js                # Punto de entrada de la aplicación
└── index.css               # Estilos globales
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd react-gifApp
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura la API Key de Giphy**
   
   Edita el archivo `src/helpers/getGifs.js` y reemplaza la API key:
   ```javascript
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=16&api_key=TU_API_KEY_AQUI`
   ```
   
   Para obtener una API key gratuita, visita [Giphy Developers](https://developers.giphy.com/)

4. **Ejecuta la aplicación**
   ```bash
   npm start
   ```

5. **Abre tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación

## 📖 Uso de la Aplicación

1. **Búsqueda inicial**: La aplicación inicia con la categoría "Dragon Ball" por defecto
2. **Agregar categorías**: 
   - Escribe el nombre de una categoría en el campo de texto
   - Presiona Enter o envía el formulario
   - La nueva categoría aparecerá en la lista
3. **Visualizar GIFs**: Cada categoría muestra hasta 16 GIFs relacionados
4. **Estados de carga**: Verás un indicador de "Loading..." mientras se cargan los GIFs

## 🔧 Scripts Disponibles

### `npm start`
Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm test`
Lanza el ejecutor de pruebas en modo interactivo.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.\
Optimiza React para el mejor rendimiento.

### `npm run eject`
**Nota: Esta es una operación irreversible.**

Expone la configuración de webpack, Babel, ESLint, etc.

## 🎨 Componentes Principales

### `GifExpertApp`
Componente raíz que maneja el estado global de las categorías.

### `AddCategory`
- Formulario para agregar nuevas categorías
- Validación de entrada (mínimo 3 caracteres)
- Previene duplicados

### `GifGrid`
- Muestra los GIFs de una categoría específica
- Maneja el estado de carga
- Utiliza el hook personalizado `useFetchGifs`

### `GifGridItem`
- Componente individual para cada GIF
- Muestra imagen y título
- Incluye animaciones CSS

## 🔌 API y Hooks

### `useFetchGifs`
Hook personalizado que:
- Maneja el estado de carga
- Realiza peticiones a la API de Giphy
- Actualiza el estado cuando cambia la categoría

### `getGifs`
Función helper que:
- Construye la URL de la API
- Procesa la respuesta de Giphy
- Retorna datos normalizados

## 🎯 Características Técnicas

- **Estado local**: Utiliza `useState` para manejo de estado
- **Efectos secundarios**: `useEffect` para llamadas a API
- **Validación de props**: PropTypes para type checking
- **Manejo de errores**: Estados de carga y validaciones
- **Optimización**: Re-renderizado eficiente con keys únicas

## 🚀 Despliegue

Para desplegar la aplicación:

1. **Construye para producción**
   ```bash
   npm run build
   ```

2. **Sube la carpeta `build`** a tu servicio de hosting preferido

3. **Configura variables de entorno** si es necesario

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte del aprendizaje de React y hooks personalizados.

---

**Nota**: Esta aplicación utiliza la API de Giphy. Asegúrate de obtener tu propia API key para uso en producción.
