var expect = require('chai').expect

describe('checkForShip',()=>{
    const {checkForShip}= require('../game_logic/ship_method')
    let player

    before(()=>{
        player = {
            ships:[
                {
                    locations:[[0,0],[0,1],[0,2]]
                },
                {
                    locations:[[1,0],[1,1],[1,2]]
                },
                {
                    locations:[[2,0],[2,1],[3,2],[2,3],[3,4]]
                }
            ]
        }
    })

    it('Should correctly report a ship located at the given coordinate',() => {
        
        expect(checkForShip(player,[0,0]).locations[0]).to.be.deep.equal([0,0])
    })

    it('Should handle ships located at more than one coordinate',() => {
        
        expect(checkForShip(player,[0,3])).to.not.deep.equal([0,3])
        expect(checkForShip(player,[0,2]).locations[2]).to.deep.equal([0,2])
    })

    it('Should handle more than a ship',() => {
        
        expect(checkForShip(player,[0,3])).to.be.false
        expect(checkForShip(player,[1,2]).locations[2]).to.be.deep.equal([1,2])
        expect(checkForShip(player,[1,0]).locations[0]).to.be.deep.equal([1,0])
        expect(checkForShip(player,[1,3])).to.be.false
        expect(checkForShip(player,[2,0]).locations[0]).to.be.deep.equal([2,0])
        expect(checkForShip(player,[2,3]).locations[3]).to.be.deep.equal([2,3])
    })
})



describe('shipDamage',()=>{
    const {damageShip} = require('../game_logic/ship_method')

    it('should register damage on a given ship at a given location', ()=>{
        let ship = {
            locations: [[0,0], [1,0]],
            damage:[]
        }

        damageShip(ship, [0,0])
        expect(ship.damage).to.not.be.empty
        expect(ship.damage[0]).to.deep.equal([0,0])
    })
})

describe('fireShip', ()=>{
    const {fireShip} = require('../game_logic/ship_method')
    let enemy;
    beforeEach(()=>{
        enemy = {
            ships: [
                {locations:[[0,1],[0,2],[0,3]], damage:[]}
            ]
        }
    })

    after(()=>{
        console.log('entire test suite completed')
    })
    afterEach(()=>{
        console.log('one unit test completed')
    })
    it('should attack opponent',() => {
        
        expect(fireShip(enemy, [0,1])[0]).deep.equal([0,1])
    })

    it('should not attack opponent if no ship at coord',() => {
        const enemy = {
            ships: [
                {locations:[[0,1],[0,2],[0,3]], damage:[]}
            ]
        }
        expect(fireShip(enemy, [0,4])).to.be.empty
    })
})