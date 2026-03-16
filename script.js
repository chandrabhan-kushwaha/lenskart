import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/loaders/GLTFLoader.js'

const container = document.getElementById("three-container")

// scene
const scene = new THREE.Scene()

// camera
const camera = new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight,0.1,1000)

camera.position.z = 3

// renderer
const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true})
renderer.setSize(container.clientWidth, container.clientHeight)

container.appendChild(renderer.domElement)


// light
const ambientLight = new THREE.AmbientLight(0x4da6ff,1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0x4da6ff,1)
directionalLight.position.set(5,5,5)
scene.add(directionalLight)

const backLight = new THREE.PointLight(0x00aaff,3)
backLight.position.set(-3,2,-2)
scene.add(backLight)
// load model
const loader = new GLTFLoader()

let model

loader.load('model/glasses_10.glb',
function(gltf){

model = gltf.scene
model.scale.set(5,4,2)
model.position.set(0.7,0,-0.5)
scene.add(model)

}
)


// animation
let t = 0

function animate(){

requestAnimationFrame(animate)

t += 0.01

if(model){
model.rotation.y += 0.02 + Math.sin(t)*0.005
model.position.y = Math.sin(t)*0.1
}

camera.position.z = 3 + Math.sin(t) * 0.8
camera.position.x = Math.sin(t) * 1.2
camera.lookAt(0,0,0)

renderer.render(scene,camera)

}

animate()