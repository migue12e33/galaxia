# 🌌 Galaxia de Josslin

Una experiencia 3D interactiva y profesional para disfrutar en cualquier dispositivo.

## ✨ Características

- **Galaxia 3D interactiva** — Mueve el mouse o dedo para rotar la galaxia
- **Música integrada** — Reproduce tu canción favorita mientras contemplas la galaxia
- **Responsive** — Funciona perfectamente en computadora, tablet y teléfono
- **Efectos profesionales** — Partículas animadas, luces dinámicas y efectos de brillo

## 🎵 Cómo agregar tu música

### Opción 1: Archivos locales (RECOMENDADO)

1. Ten lista una canción en formato **MP3** o **WAV**
2. Renómbrala a `music.mp3` (o `music.wav`)
3. Colócala en la misma carpeta que `index.html`
4. Abre `index.html` en el navegador y listo!

### Opción 2: Usar una URL de música online

1. Abre `index.html` con un editor de texto
2. Busca esta línea (alrededor de la línea 34):
   ```html
   <source src="music.mp3" type="audio/mpeg">
   ```
3. Reemplaza `music.mp3` con la URL completa de tu canción:
   ```html
   <source src="https://example.com/mi-cancion.mp3" type="audio/mpeg">
   ```
4. Guarda el archivo y abre en el navegador

## 🎮 Controles

| Acción | Efecto |
|--------|--------|
| **Mover mouse** | Rota la galaxia |
| **Deslizar en móvil** | Rota la galaxia en teléfono/tablet |
| **▶ botón** | Reproduce/pausa la música |
| **Slider de volumen** | Ajusta el volumen de la música |

## 📱 Compartir la experiencia

### Método 1: Carpeta ZIP (Recomendado)
1. Selecciona los tres archivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `music.mp3` (si incluyes la música)

2. Crea un ZIP comprimido
3. Envía el ZIP a tu amiga
4. Ella descomprime y abre `index.html` en cualquier navegador

### Método 2: Hosting online (Más fácil de compartir)
1. Sube los archivos a un servicio gratuito como:
   - **Netlify** (netlify.com) - Arrasta y suelta
   - **Vercel** (vercel.com) - Desde GitHub
   - **GitHub Pages** - Para proyecto en GitHub
   - **Firebase Hosting** - Servicio de Google

2. Comparte el enlace con tu amiga

### Método 3: Guardar como archivo local
- Solo abre el archivo `index.html` desde tu computadora
- Comparte el archivo por cualquier plataforma

## 🔧 Solución de problemas

**P: ¿La música no se reproduce?**
- Verifica que `music.mp3` esté en la misma carpeta que `index.html`
- Asegúrate de que el archivo sea MP3 o WAV
- Intenta hacer clic en el botón ▶ después de cargar la página

**P: ¿La galaxia no se ve bien en móvil?**
- Actualiza el navegador (F5 o desliza hacia abajo)
- Prueba con otro navegador (Chrome, Firefox, Safari)
- Asegúrate de que JavaScript esté habilitado

**P: ¿Puedo cambiar el nombre o mensaje?**
- Sí! Abre `index.html` con un editor de texto
- Busca la línea que dice `<h1 class="galaxy-name">Josslin</h1>`
- Reemplaza "Josslin" por el nombre que desees
- También puedes cambiar "Mi galaxia favorita ✨" por otro mensaje

**P: ¿Cómo cambio los colores de la galaxia?**
- Abre `script.js` con un editor de texto
- Busca la sección `colorOptions` (alrededor de línea 36)
- Modifica los valores RGB (números 0-1)
- Guarda y recarga la página

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- 15+ MB de espacio para la música (opcional)
- Conexión a internet (solo si usas URLs de música online)

## 🎨 Detalles técnicos

- **Motor gráfico**: Three.js (WebGL)
- **Partículas**: 15,000 puntos en espiral logarítmica
- **Optimización**: Pixel ratio adaptativo para resoluciones altas
- **Compatibilidad**: Funciona en PC, Mac, Linux, Android, iOS

## 💡 Tips

- Mira la galaxia desde distintos ángulos moviendo el mouse lentamente
- La música se reinicia automáticamente al terminar
- Puedes silenciar el sonido con el slider de volumen
- El nombre "Josslin" brilla con animación continua

---

**Disfruta de tu galaxia personalizada** ✨ 🌌
