const assert = require('assert');
const PaintCan = require('../paint_can')

describe('Paint Can', function () {

    let paintCan;
    beforeEach(function () {
        paintCan = new PaintCan(10)
    })
    
    it('should have paint', function () {
        const actual = paintCan.litres
        assert.strictEqual(actual, 10)
    })
})