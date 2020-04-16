import React, { Component } from 'react'
import * as THREE from './three'

export class Header extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
  }

  componentDidMount() {
    // === window width & height  ===
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    // === threeJS requirements ===
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    camera.position.z = 4
    camera.position.y = 1

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor(0xffffff, 0)
    renderer.setSize(width, height)

    // === mouse & controls ===
    const mouse = new THREE.Vector2()

    // === scene elements ===

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshNormalMaterial({
      transparent: true,
      opacity: 0.75,
      color: 0xFFFFFF,
      shading: THREE.FlatShading,
    })

    const cube = new THREE.Mesh(geometry, material)

    //all particles
    const particle = new THREE.Group()

    //individual particle geometry
    const particleGeometry = new THREE.Geometry()

    // top tetra
    const topGeometry = new THREE.CylinderGeometry(0, 1.1, 2, 4, 1, false)
    const topMatrix = new THREE.Matrix4().makeTranslation(
      0,
      +topGeometry.parameters.height / 2,
      0
    )
    particleGeometry.merge(topGeometry, topMatrix)

    // bottom tetra
    const btmGeometry = new THREE.CylinderGeometry(1.1, 0, 2, 4, 1, false)
    const btmMatrix = new THREE.Matrix4().makeTranslation(
      0,
      -btmGeometry.parameters.height / 2,
      0
    )
    particleGeometry.merge(btmGeometry, btmMatrix)

    const particleMaterial = new  THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.7,
      color: 0xFFFFFF,
      shading: THREE.FlatShading,
    })

    for (var i = 0; i < 1000; i++) {
      var mesh = new THREE.Mesh(particleGeometry, particleMaterial);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(90 + (Math.random() * 700));
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      particle.add(mesh);
    }

    // === add everything to scene ===
    scene.add(cube)
    scene.add(particle)

    // === lighting ===
    const ambientLight = new THREE.AmbientLight(0x999999 )
    scene.add(ambientLight)

    const light = new THREE.PointLight("#ffffff", 1);
    light.castShadow = true

    const lights = [];
    lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    lights[0].position.set( 1, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0xfdb99b, 1 );
    lights[1].position.set( 0.75, 1, 0.5 );
    lights[2] = new THREE.DirectionalLight( 0xa770ef, 1 );
    lights[2].position.set( -0.75, -1, 0.5 );
    scene.add( lights[0] );

    scene.add(light)

    // === bind everything ===
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube
    this.mouse = mouse
    this.ambientLight = ambientLight
    this.lights = lights
    this.light = light
    this.particle = particle
    this.particleGeometry = particleGeometry
    // this.controls = controls

    // === event listeners ===
    document.addEventListener('mousemove', this.onMouseMove, false)
    window.addEventListener('resize', this.onWindowResize, false)

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  onMouseMove(event) {
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2
    this.mouse.x = ( event.clientX - windowHalfX ) / 300
    this.mouse.y = ( event.clientY - windowHalfY ) / 300
  }

  // === resizes scene if browser window size changes ===
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  animate() {
    this.cube.rotation.x += 0.005
    this.cube.rotation.y += 0.005
    this.particle.rotation.x += 0.0000;
    this.particle.rotation.y -= 0.0020;

    //array from particle group
    let individualParticles = this.particle.children

    //set random rotation of individual particles
    for (let i = 0; i < individualParticles.length; i++) {
      const individualParticle = individualParticles[i]
      individualParticle.rotation.y += Math.random() / 100
      individualParticle.rotation.x -= Math.random() / 100
      individualParticle.rotation.z -= Math.random() / 100
    }

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.camera.position.x += ( this.mouse.x - this.camera.position.x ) * .05
    this.camera.position.y += ( - this.mouse.y - this.camera.position.y ) * .05
    this.camera.lookAt( this.scene.position )

    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div id="header"
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}