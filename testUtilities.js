const expect = require('chai').expect

const titleCase = (title) => {
    const arr = title.split(' ')
    let sentence = [];
    arr.forEach(ar => {
        let word = ar[0].toUpperCase() + ar.substring(1)
        sentence.push(word)
    })
    return sentence.join(' ')
}

expect(titleCase('the great mouse detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('vertigo')).to.equal('Vertigo')
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective')