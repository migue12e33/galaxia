// ===== Configuración Three.js =====
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 1);
renderer.shadowMap.enabled = true;

document.getElementById('container').appendChild(renderer.domElement);

camera.position.z = 80;

// ===== Variables de interactividad =====
let mouseX = 0;
let mouseY = 0;
let targetRotationX = 0;
let targetRotationY = 0;

// ===== Crear Galaxia =====
function createGalaxy() {
    const galaxyGroup = new THREE.Group();
    const particleCount = 15000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorOptions = [
        { r: 1, g: 0.2, b: 0.8 },     // Rosa/Magenta
        { r: 0.5, g: 0.1, b: 1 },     // Púrpura
        { r: 1, g: 0.5, b: 1 },       // Rosa claro
        { r: 0.8, g: 0, b: 0.8 },     // Magenta oscuro
        { r: 1, g: 1, b: 1 },         // Blanco
        { r: 0.6, g: 0.3, b: 1 }      // Púrpura claro
    ];

    for (let i = 0; i < particleCount; i++) {
        // Espiral logarítmica
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 10;
        const spiralTwist = angle + distance * 0.5;

        positions[i * 3] = Math.cos(spiralTwist) * distance;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
        positions[i * 3 + 2] = Math.sin(spiralTwist) * distance;

        // Colores basados en distancia al centro
        const colorIndex = Math.floor((distance / 90) * colorOptions.length);
        const color = colorOptions[Math.min(colorIndex, colorOptions.length - 1)];
        const brightness = 0.5 + (1 - distance / 90) * 0.5;

        colors[i * 3] = color.r * brightness;
        colors[i * 3 + 1] = color.g * brightness;
        colors[i * 3 + 2] = color.b * brightness;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.4,
        sizeAttenuation: true,
        vertexColors: true,
        opacity: 0.9,
        transparent: true
    });

    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);

    return galaxyGroup;
}

const galaxy = createGalaxy();
scene.add(galaxy);

// ===== Iluminación =====
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff69b4, 1);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

// ===== Eventos de mouse/toque =====
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
}, { passive: true });

// ===== Controles de audio =====
const audioTrack = document.getElementById('audioTrack');
const playBtn = document.getElementById('playBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.querySelector('.volume-label');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioTrack.pause();
        playBtn.textContent = '▶';
        isPlaying = false;
    } else {
        audioTrack.play().catch(err => console.log('Error al reproducir:', err));
        playBtn.textContent = '⏸';
        isPlaying = true;
    }
});

volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audioTrack.volume = volume;
    volumeLabel.textContent = e.target.value + '%';
});

audioTrack.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    isPlaying = false;
});

// Volumen inicial
audioTrack.volume = volumeSlider.value / 100;

// ===== Frases flotantes =====
const frases = [
    "Te quiero 💜",
    "Eres especial 🌙",
    "Siempre pienso en ti 🌌",
    "Tu sonrisa ilumina mi universo ☄️",
    "Gracias por existir 💫",
    "Contigo todo es más bonito ⭐",
    "Me gusta estar contigo 💜",
    "Eres mi estrella favorita ✨",
    "Mi lugar favorito eres tú 🌙",
    "Te adoro 💖",
    "Eres increíble 🌟",
    "Mi persona favorita 👑"
];

function crearFrase() {
    const frase = document.createElement("div");
    frase.className = "floating-phrase";
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];
    
    frase.style.left = Math.random() * 90 + "%";
    frase.style.top = Math.random() * 90 + "%";
    frase.style.animationDuration = (8 + Math.random() * 8) + "s";
    
    document.body.appendChild(frase);
    
    setTimeout(() => frase.remove(), 15000);
}

setInterval(crearFrase, 1200);

// ===== Responsive =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ===== Animación =====
function animate() {
    requestAnimationFrame(animate);

    // Rotación automática lenta
    galaxy.rotation.z += 0.0002;
    galaxy.rotation.x += 0.00008;

    // Rotación controlada por mouse
    targetRotationX = mouseY * 0.3;
    targetRotationY = mouseX * 0.3;

    galaxy.rotation.x += (targetRotationX - galaxy.rotation.x) * 0.05;
    galaxy.rotation.y += (targetRotationY - galaxy.rotation.y) * 0.05;

    renderer.render(scene, camera);
}

animate();