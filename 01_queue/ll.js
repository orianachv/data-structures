function LinkedList() {
    this.head = false;
    this.tail = false;
}

function Node(value) {
    this.next = null
    this.previous = null
    this.value = value
}
LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value)
    this.tail ? (this.tail.next = newNode, newNode.previous = this.tail, this.tail = newNode) : (this.tail = newNode, this.head = newNode)
}
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value)
    this.head ? (this.head.previous = newNode, newNode.next = this.head, this.head = newNode) : (this.head = newNode, this.tail = newNode)
}
LinkedList.prototype.removeHead = function () {
    if (!this.head) {
        return undefined
    }
    var oldValue = this.head.value
    this.head = this.head.next
    this.head ? this.head.previous = null : this.tail = null
    return oldValue

}
LinkedList.prototype.removeTail = function () {
    if (!this.tail) {
        return undefined
    }
    var oldValue = this.tail.value
    this.tail = this.tail.previous
    this.tail ? this.tail.next = null : this.head = null
    return oldValue

}
LinkedList.prototype.search = function (val) {
    if (typeof val == 'string') {
        var node = this.head
        while (node) {
            if (node.value == val) {
                return node.value
            } else {
                node = node.next
            }
        } return null
    }
    if (typeof val == 'function') {
        var node = this.head
        while (node) {
            if (val(node.value)) {
                return node.value
            }
            else {
                node = node.next
            }
        }
    } return null
}