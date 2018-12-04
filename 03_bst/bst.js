function BinarySearchTree(valor) {
    this.value = valor;
    this.tamaño = 1;
    this.left;
    this.right;
}

BinarySearchTree.prototype.insert = function (valor) {
    this.tamaño++
    if (valor < this.value) {
        this.left ? this.left.insert(valor) : this.left = new BinarySearchTree(valor)
    } else if (valor > this.value) {
        this.right ? this.right.insert(valor) : this.right = new BinarySearchTree(valor)
    }
}
BinarySearchTree.prototype.contains = function (valor) {
    if (this.value === valor) return true;
    else if (this.left && this.value > valor) return this.left.contains(valor);
    else if (this.right && this.value < valor) return this.right.contains(valor);
    return false;

}
BinarySearchTree.prototype.depthFirstForEach = function (fn, option = 'in-order') {
    if (option == 'in-order') {
        this.left && this.left.depthFirstForEach(fn, option);
        fn(this.value)
        this.right && this.right.depthFirstForEach(fn, option)
    } else if (option == 'pre-order') {
        fn(this.value)
        this.left && this.left.depthFirstForEach(fn, option);
        this.right && this.right.depthFirstForEach(fn, option)

    } else if (option == 'post-order') {
        this.left && this.left.depthFirstForEach(fn, option);
        this.right && this.right.depthFirstForEach(fn, option);
        fn(this.value)
    }
}
BinarySearchTree.prototype.breadthFirstForEach = function (fn, cola = []) {
    fn(this.value)
    this.left && cola.push(this.left)
    this.right && cola.push(this.right)
    if (cola.length) cola.shift().breadthFirstForEach(fn, cola)
}
BinarySearchTree.prototype.size = function () {
    return this.tamaño
}