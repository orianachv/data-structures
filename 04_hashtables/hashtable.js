function HashTable() {
    this.table = [];
    this.numBuckets = 35
}

HashTable.prototype.set = function (key, val) {
    if (typeof key != 'string') throw TypeError('Keys must be strings')
    var hashKey = this.hash(key);
    this.table[hashKey] = this.table[hashKey] || new LinkedList();
    this.table[hashKey].addToHead({ key, val });

}

HashTable.prototype.get = function (key) {
    var hashKey = this.hash(key)
    var busqueda = this.table[hashKey].search(function (obj) {
        return key === obj.key
    })
    return busqueda && busqueda.val
}

HashTable.prototype.hasKey = function (key) {
    if (this.get(key)) return true
    return false
}

HashTable.prototype.hash = function (str) {
    var total = 0
    for (var i = 0; i < str.length; i++) {
        total += str[i].charCodeAt()
    }
    return total % this.numBuckets
}