const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('Decorator', function () {
    let decorator;
    let paintCan1;
    let paintCan2;
    let paintCan3;
    let room1;
    let room2;

    beforeEach(function () {
        decorator = new Decorator()
        paintCan1 = new PaintCan(10)
        paintCan2 = new PaintCan(15)
        paintCan3 = new PaintCan(25)
        room1 = new Room(10)
        room2 = new Room(50)
    })
    it('should have paint stock', function () {
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [])
    })
    it('should add can', function () {
        decorator.addCan(paintCan1)
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 1)
    })
    it('should return total litres', function () {
        decorator.addCan(paintCan1)
        decorator.addCan(paintCan2)
        const actual = decorator.totalLitres()
        assert.strictEqual(actual, 25)
    })
    it('should be able to paint room', function () {
        decorator.addCan(paintCan1);
        const actual = decorator.canPaintRoom(room1);
        assert.strictEqual(actual, true);
    })
    it('should not be able to paint room', function () {
        decorator.addCan(paintCan2);
        decorator.addCan(paintCan1);
        const actual = decorator.canPaintRoom(room2);
        assert.strictEqual(actual, false);
    });
    it('should paint room', function () {
        decorator.addCan(paintCan1);
        decorator.paintRoom(room1);
        const actual = room1.painted;
        assert.strictEqual(actual, true);
    });
    it('should not paint room', function () {
        decorator.addCan(paintCan1);
        decorator.paintRoom(room2);
        const actual = room2.painted;
        assert.strictEqual(actual, false);
    })
    it('should use paint', function () {
        decorator.addCan(paintCan2);
        decorator.paintRoom(room1);
        const actual = paintCan2.litres
        assert.strictEqual(actual, 5)
    })
    it('should use all paint', function () {
        decorator.addCan(paintCan1);
        decorator.paintRoom(room1);
        const actual = paintCan1.litres;
        assert.strictEqual(actual, 0);
    });
    it('should remove cans', function () {
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        decorator.addCan(paintCan3);
        decorator.paintRoom(room1);
        decorator.tossCans();
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 2);
    })
})