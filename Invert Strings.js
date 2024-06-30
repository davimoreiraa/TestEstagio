arrayInverted = []
function choseString(string) {
    // arrayStr =  string.split('')

    while(arrayStr != false) {
        lastChar = arrayStr[arrayStr.length -1]
        arrayInverted.push(lastChar)
        arrayStr.pop()
    }

    newString = ''
    for(i in arrayInverted) {
        newString = newString + arrayInverted[i]
    }

    console.log(newString)
}

choseString("Olá! Meu nome é Davi")
