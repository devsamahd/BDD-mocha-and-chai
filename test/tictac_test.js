const expect = require('chai').expect

describe('TicTac Game',()=>{

    describe('InGame events', () => {
        const {createPlayer, pickable, ispicked, pick, setPlayerPosition} = require('../tic_tac_logic/main')
        let player, enemy
        before(()=>{
            player = {
                name: "samahd",
                pos: [[0,1]]
            }
            enemy = {
                name: "samahd",
                pos: [[2,1]]
            }
        })

        it('Should create new player',()=>{
            const playee = {
                name: "samahd",
                pos: []
            }
            expect(createPlayer('samahd')).to.deep.equal(playee)
        })

        it('should check if position is pickable',()=>{
            expect(pickable([1,1])).to.be.true
            expect(pickable([0,2])).to.be.true
            expect(pickable([3,1])).to.be.false
        })

        it('Should check if it hasn`t been picked', () => {
            expect(ispicked(player, enemy, [0,1])).to.be.true
            expect(ispicked(player, enemy, [1,1])).to.be.false
            expect(ispicked(player, enemy, [2,1])).to.be.true
        })

        it('should set clicked cord to player pos',()=> {
            expect(setPlayerPosition(player, [2,2])).to.deep.equal([[0,1],[2,2]])
        })

        it('Should allow player pick new position or not',()=>{
            expect(pick(player, enemy, [0,0])).to.be.true
            expect(pick(player, enemy, [2,0])).to.be.true
            expect(pick(player, enemy, [0,3])).to.equal("Can't pick this position")
            expect(pick(player, enemy, [0,1])).to.equal("Can't pick this position")
            expect(pick(player, enemy, [2,1])).to.equal("Can't pick this position")
        })

    })


})