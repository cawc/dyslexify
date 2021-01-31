let textElements = ['p', 'h1', 'h2', 'h3', 'li', 'a', 'span', 'button']


    textElements.forEach(tagName => {
        scrambleElements(document.getElementsByTagName(tagName))
    })

function scrambleElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText && elements[i].innerText.length > 3) {
            let sentence = elements[i].innerText;
            let editedSentence = sentence.split(' ')
            for (let j = 0; j < editedSentence.length; j++) {
                editedSentence[j] = scrambleLetters(editedSentence[j]);
            }
            editedSentence = editedSentence.join(' ')
            elements[i].innerText = editedSentence;
        }
    }
}

function scrambleLetters(word) {
    if (!word || word.length < 4) {
        return word
    }
    let innerWord = word.substring(1,word.length-1)
    let shuffledInnerWord = innerWord.split('').sort(()=>0.5-Math.random()).join('')
    word = word[0] + shuffledInnerWord + word[word.length-1]
    return word
}
