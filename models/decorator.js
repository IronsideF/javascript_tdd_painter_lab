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
    let remainingArea = room.area;
    for (can of this.paintStock) {
        if (can.litres <= remainingArea) {
            remainingArea -= can.litres;
            can.empty();
        } else {
            can.reducePaint(remainingArea);
            remainingArea = 0;
            return;
        }
    }
}

Decorator.prototype.tossCans = function () {
    emptyCans = []
    for (can of this.paintStock) {
        if (can.litres === 0) {
            emptyCans.push(can)
        }
    } 
    this.paintStock.sort((a, b) => {return a.litres - b.litres});
    this.paintStock.splice(0, emptyCans.length);
}

module.exports = Decorator;