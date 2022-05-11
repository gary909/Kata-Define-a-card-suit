function defineSuit(card) {
    let lastLetter = card[card.length - 1]
    if (lastLetter == '♣') {
        return 'clubs';
    } else if (lastLetter == '♦') {
        return 'diamonds';
    } else if (lastLetter == '♥') {
        return 'hearts';
    } else if (lastLetter == '♠') {
        return 'spades';
    }
    // return lastLetter;
}

console.log(defineSuit('Q♠')); // 'spades'
console.log(defineSuit('9♦')); // 'diamonds'
console.log(defineSuit('J♥')); // 'hearts'