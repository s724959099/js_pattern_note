class Item {
  constructor(index) {
    this.index = index
  }
}


class Factory {
  constructor() {
    this.index = 0
  }

  get_item() {
    return new Item(this.index++)
  }
}

let factory = new Factory()

let items=[factory.get_item(),factory.get_item(),factory.get_item(),factory.get_item()]
for(const item of items){
  console.log(item.index)
}