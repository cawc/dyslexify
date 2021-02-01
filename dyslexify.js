scrambleAllText(document.body)

function scrambleAllText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let content = node.textContent
        let editedContent = scrambleTextBlock(content)
        node.textContent = editedContent
    } else {
        for (let i = 0; i < node.childNodes.length; i++) {
            scrambleAllText(node.childNodes[i])
        }
    }
}

function scrambleTextBlock(text) {
    let textArray = text.split(' ')
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = scrambleLetters(textArray[i])        
    }
    return textArray.join(' ')
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

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                const newNode = mutation.addedNodes[i];
                scrambleAllText(newNode);
            }
        }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
