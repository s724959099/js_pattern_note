class Component {
  execute() {
    throw "not implement"
  }
}


class Leaf extends Component {
  execute() {
    console.log('some function')
  }
}

class Composite extends Component {
  constructor() {
    super()
    this.children = []
  }

  append_child(child) {
    this.children.push(child)
  }

  execute() {
    for (const item of this.children) {
      item.execute()
    }
  }
}


let c = new Composite()
let l = new Leaf()
let l_two = new Leaf()
c.append_child(l)
c.append_child(l_two)

let c2 = new Composite()
let l1 = new Leaf()
let l_two1 = new Leaf()
c2.append_child(l1)
c2.append_child(l_two1)
c.append_child(c2)

c.execute()
