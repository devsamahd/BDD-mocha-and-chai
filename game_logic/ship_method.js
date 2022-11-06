const checkForShip = (player, cord) => {
    let shipPresent, ship
    
    for(let i = 0; i< player.ships.length; i++){
        ship = player.ships[i]
        shipPresent = ship.locations.filter(coord=>{
            return coord[0] === cord[0] && coord[1] === cord[1]
        })[0]
        if (shipPresent) return ship
    }
    return false
}

const damageShip = (ship, coord) => {
    ship.damage.push(coord)
    return ship.damage
}

const fireShip = (enemy, cord) => {
    const ship = checkForShip(enemy, cord)
    if(!ship) return []
    return damageShip(ship, cord)
}

module.exports = {checkForShip, damageShip, fireShip}