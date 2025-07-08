// Three.js Setup
const canvas = document.getElementById('threeCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x00ccff, wireframe: true });
const brain = new THREE.Mesh(geometry, material);
scene.add(brain);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(2, 2, 2);
scene.add(light);

camera.position.z = 3;

function animate3D() {
  requestAnimationFrame(animate3D);
  brain.rotation.x += 0.005;
  brain.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate3D();

// Responsive canvas
window.addEventListener('resize', () => {
  let w = canvas.clientWidth;
  let h = canvas.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

// Anime.js Feature Animation
document.getElementById('animateBtn').addEventListener('click', () => {
  anime({
    targets: '#featureList li',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 800,
    easing: 'easeOutExpo'
  });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.msg.value
  };
  console.log('Form data:', data);
  alert(`Thanks, ${data.name}! We got your message.`);
  e.target.reset();
});
