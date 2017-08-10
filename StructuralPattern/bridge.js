
class Color{
  render_color(){}
}


class Shape {
  constructor(Color) {
    this.color = new Color()
  }
  draw(){

  }
}
class Red extends Color{

}
class Circle extends Shape{

}



let red_circle = new Circle(Red)
red_circle.draw()