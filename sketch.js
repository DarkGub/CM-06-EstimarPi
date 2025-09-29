let puntos = 1000
let puntosDentro = 0
let inputPuntos
let botonEjecutar
let colorCuadrado
let colorCirculo

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  noLoop()
  rectMode(CENTER)
  colorCuadrado = createColorPicker("blue")
  colorCirculo = createColorPicker("red")
  inputPuntos = createInput(puntos)
  botonEjecutar = createButton("Ejecutar")
  botonEjecutar.mousePressed(()=>{
    puntos = int(inputPuntos.value())
    puntosDentro = 0
    redraw()
  })
}

function draw() {
  // put drawing code here
  translate(width/2,height/2)
  let cCirc = colorCirculo.color()
  let cCuad = colorCuadrado.color()
  fill(cCuad)
  rect(0,0,width,height)
  fill(cCirc)
  circle(0,0,width)
  strokeWeight(4)
  stroke(0)
  for (let i=0; i<puntos; i++) {
    let x = random(-width/2,width/2)
    let y = random(-height/2,height/2)
    let d = dist(0,0,x,y)
    point(x,y)
    if (d < width/2) {
      puntosDentro++
    }
  }
  let pi = 4 * puntosDentro / puntos
  fill(255)
  textsize(32)
  text("Puntos: " + puntos, -390, 280)
  text("Puntos dentro del circulo: " + puntosDentro)
  text("Aproximacion de pi: " + pi)
  text("Error: " + abs(PI - pi))
}