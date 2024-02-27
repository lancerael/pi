import './style.css'

import Manager from './classes/Manager'
import Particle from './classes/Particle'

const manager = new Manager({
  width: 800,
  height: 300,
  count: 10,
})

// Get the canvas element and its context
var canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
var ctx = canvas?.getContext('2d')

// Get the svg element
var svg = document.getElementById('particle-svg') as HTMLElement
const circles: SVGCircleElement[] = []

// Define the function to draw the dot on the canvas
function drawCanvasDot({ x, y, z }: Particle) {
  if (!ctx) return
  ctx.beginPath()
  ctx.arc(x, y, z, 0, Math.PI * 2)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}

// Define the function to draw the dot on the SVG
function drawSVGDot({ x, y, z }: Particle, i: number) {
  if (!svg) return
  let circle = circles[i]
  if (!circle) {
    circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('fill', '#0095DD')
    circles.push(circle)
    svg.appendChild(circle)
  }
  circle.setAttribute('cx', String(x))
  circle.setAttribute('cy', String(y))
  circle.setAttribute('r', String(z))
}

// Update dot position and redraw it
function update() {
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  manager.moveParticles((particle, i) => {
    drawCanvasDot(particle)
    drawSVGDot(particle, i)
  })
}

// Call the update function every 10 milliseconds
setInterval(update, 10)
