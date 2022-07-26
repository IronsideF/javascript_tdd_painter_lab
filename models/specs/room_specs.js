const assert = require('assert');
const Room = require('../room')

describe('Room', function () {
    let room;

    beforeEach(function () {
        room = new Room(10);
    });

    it('should have an area', function () {
        const actual = room.area
        assert.strictEqual(actual, 10)
    })
    it('should be unpainted', function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })
    it('should be painted', function () {
        room.paint()
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
})