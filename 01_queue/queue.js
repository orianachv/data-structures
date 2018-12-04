function Queue() {
    this.cola = new LinkedList()
    this.tamaño = 0
}
Queue.prototype.enqueue = function (valor) {
    this.cola.addToTail(valor)
    this.tamaño++
}
Queue.prototype.dequeue = function () {
    if (this.tamaño == 0) return undefined
    this.tamaño--
    return this.cola.removeHead()
}
Queue.prototype.size = function () {
    return this.tamaño
}

// function Queue() {
//     this.tail = 0;
//     this.head = 0;
//     this.tamaño = 0
//     this.data = []
// }

// Queue.prototype.enqueue = function (value) {
//     this.data[this.tail] = value
//     this.tail++
//     this.tamaño++
// }
// Queue.prototype.dequeue = function () {
//     var valorActual = this.data[this.head]
//     if (this.tamaño == 0) return undefined
//     this.head++
//     this.tamaño--
//     return valorActual

// }
// Queue.prototype.size = function () {
//     return this.tamaño
// }