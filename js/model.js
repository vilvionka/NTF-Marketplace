import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

let camera, scene, renderer, controls, model;
let mixer = null;
const clock = new THREE.Clock();

let pointLight;

const height = 500; // of camera frustum
let r = 0.0;

init();
animate();


// Init gui


function init() {
  let box = document.querySelector('.main_model');

  const container = document.createElement('div');
  box.appendChild(container);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(300, 300);
  container.appendChild(renderer.domElement);

  //

  scene = new THREE.Scene();


  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, -120);
  scene.add(camera);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.dispose();

  // lights
  pointLight = new THREE.PointLight(0x42558A, 2, 0, 0);
  pointLight.position.z = 2500;
  scene.add(pointLight);


  const pointLight2 = new THREE.PointLight(0xffffff, 1.2, 0, 0);
  camera.add(pointLight2);


  const pointLight3 = new THREE.PointLight(0x20222a, 10, 0, 0);
  pointLight3.position.x = - 1000;
  pointLight3.position.z = -1000;
  scene.add(pointLight3);



  // model

  const loader = new GLTFLoader();
  loader.load('../model/diamond.glb', (gltf) => {
    model = gltf.scene
    model.scale.set(60, 30, 30);
    model.position.x = 0;
    model.position.y = 0;
    scene.add(model);
  })

  window.addEventListener('resize', onWindowResize);

 

}

function onWindowResize() {

  const aspect = window.innerWidth / window.innerHeight;

  camera.left = - height * aspect;
  camera.right = height * aspect;
  camera.top = height;
  camera.bottom = - height;

  camera.updateProjectionMatrix();

  renderer.setSize(300, 300);

}

//


function animate() {

  requestAnimationFrame(animate);

  controls.update();
  render();

  let delta = clock.getDelta();
  if (mixer) {
    mixer.update(delta);
  }
}

function render() {

  pointLight.position.x = 2000 * Math.cos(r);
  pointLight.position.z = 2000 * Math.sin(r);

  model.rotation.y -= 0.002;
  r += 0.01;

  renderer.render(scene, camera);
  if(document.documentElement.clientWidth < 650 && model != null){
    model.scale.set(20, 20, 10)
  }
  if(document.documentElement.clientWidth < 500 && model != null){
    model.scale.set(13, 14, 5)
  }
  if(document.documentElement.clientWidth < 425 && model != null){
    model.scale.set(7, 12, 5)
  }

}