import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';
import tubeVertexShader from '../shaders/vertex.glsl';
import tubeFragmentShader from '../shaders/fragment.glsl';

class ThreeScene {
    constructor() {
        this.canvas = document.querySelector('canvas.webgl');

        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
            pixelRatio: Math.min(window.devicePixelRatio, 2)
        };

        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createControls();
        this.createGUI();

        this.addObjects();
        this.setupResizeHandler();
        this.animate();
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x111111);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 1000);
        this.camera.position.set(0, 0, 5);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

        // Set tone mapping
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;

        // Set color space
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    createControls() {
        this.controls = new OrbitControls(this.camera, this.canvas);
    }

    createGUI() {
        this.gui = new GUI();
        // Add GUI controls here
    }

    addObjects() {
        // Create a box geometry
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        // Create shader material
        const material = new THREE.ShaderMaterial({
            vertexShader: tubeVertexShader,
            fragmentShader: tubeFragmentShader,
            uniforms: {
                uTime: { value: 0 }
            }
        });

        const box = new THREE.Mesh(geometry, material);

        // Rotate the box
        box.rotation.set(Math.PI / 4, Math.PI / 4, 0);

        this.scene.add(box);
    }

    setupResizeHandler() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    onWindowResize() {
        // Update sizes
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;
        this.sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Update camera
        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();

        // Update renderer
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        // rotate the box
        this.scene.traverse((child) => {
            if (child.isMesh) {
                child.rotation.y += 0.01;
            }
        });

        // Update uniforms
        const elapsedTime = performance.now() / 1000;
        this.scene.traverse((child) => {
            if (child.isMesh && child.material.uniforms) {
                child.material.uniforms.uTime.value = elapsedTime;
            }
        });

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

export default ThreeScene;
