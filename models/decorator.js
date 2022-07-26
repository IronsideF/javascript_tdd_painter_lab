const Decorator = function () {
    this.paintStock = [];
}


Decorator.prototype.addCan = function (can) {
    this.paintStock.push(can)
}

Decorator.prototype.totalLitres = function () {
    total = 0
    for (can of this.paintStock) {
        total += can.litres
    }
    return total
}

Decorator.prototype.canPaintRoom = function (room) {
    return room.area <= this.totalLitres();
}

Decorator.prototype.paintRoom = function (room) {
    if (this.canPaintRoom(room)) {
        room.paint();
        this.usePaint(room)
    }
};

Decorator.prototype.usePaint = function (room) {
    remainingArea = room.area
    for (can of this.paintStock) {
        if (can.litres <= remainingArea) {
            remainingArea -= can.litres;
            can.empty()
        } else {
            can.reducePaint(remainingArea)
            remainingArea = 0
        }
    }
}

Decorator.prototype.tossCans = function () {
    emptyCans = []
    for (can of this.paintStock) {
        if (can.isEmpty) {
            emptyCans.push(can)
        }
    } 
    this.paintStock.sort((a, b) => {return a.litres - b.litres});
}

module.exports = Decorator;