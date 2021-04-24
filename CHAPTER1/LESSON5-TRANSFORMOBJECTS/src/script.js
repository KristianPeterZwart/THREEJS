import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1
mesh.position.set(0.7, - 0.6, 1)
scene.add(mesh)

// Scale
// mesh.scale.x = 1
// mesh.scale.y = 1
// mesh.scale.z = 1
mesh.scale.set(1, 1, 1)

// Rotation
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.z = Math.PI * 0.25

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}
// Red is positive X
// Green is positive Y
// Blue is positive Z
/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)