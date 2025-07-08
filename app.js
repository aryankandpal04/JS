import * as THREE from 'https://cdn.skypack.dev/three@0.155.0';

// THREE.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("threeCanvas") });

renderer.setSize(600, 400);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Web Component: <user-card>
class UserCard extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        h3 { color: var(--accent); margin: 0; }
        p { margin: 0.5rem 0 0; }
      </style>
      <h3></h3>
      <p></p>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
    this.shadowRoot.querySelector('p').textContent = this.getAttribute('info');
  }
}
customElements.define('user-card', UserCard);

// Another component: <nav-bar>
customElements.define('nav-bar', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="#three">3D</a> | 
        <a href="#component">Component</a>
      </nav>
    `;
  }
});
