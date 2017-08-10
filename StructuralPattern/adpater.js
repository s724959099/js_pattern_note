class Shpae {
  draw() {
    throw "draw is not imp"
  }
}

class Rectangle extends Shpae {
  draw() {
    console.log("draw")
  }
}

class Circle {
  draw_a_circle() {
    console.log("draw")
  }
}

class AdapterCircle extends Shpae {
  constructor() {
    super()
    this.circle = new Circle()
  }

  draw() {
    return this.circle.draw_a_circle()
  }
}


class Drawer {
  static draw(shape) {
    shape.draw()
  }
}

let circle = new AdapterCircle()
Drawer.draw(circle)
