const createPlayer = (name)=>{
    const player = {
        name,
        pos: []
    }
    return player
}

const pickable = (cord) => {
    const edey = [
        [0,0], [0,1], [0,2],
        [1,0], [1,1], [1,2],
        [2,0], [2,1], [2,2]
    ].filter(pkable => pkable[0]===cord[0] && pkable[1] === cord[1])
    if(edey.length >0) return true
    return false
}

const ispicked = (player, enemy, cord) => {
    const pickedbyplayer = player.pos.filter(pos => pos[0] === cord[0] && pos[1] === cord[1])
    const pickedbyenemy = enemy.pos.filter(pos => pos[0] === cord[0] && pos[1] === cord[1])
    return (pickedbyplayer.length > 0 || pickedbyenemy.length > 0 ) ? true : false
}

const setPlayerPosition = (player, cord) => {
    player.pos.push(cord)
    return player.pos
}

const pick = (player, enemy, cord) => {
   const cando = pickable(cord) && !ispicked(player,enemy,cord) ? true : false
   if (!cando) return "Can't pick this position"
   setPlayerPosition(player, cord)
   return true
}

module.exports = {createPlayer, pickable, ispicked, pick, setPlayerPosition}