//function to decode a string
const decodeString = (encodedString) => {
    let characters = [];
    for (let i = 0; i < encodedString.length; i++) {
        const decodedCharacter = encodedString.charCodeAt(i) - 5;
        const encodedCharacter = String.fromCharCode(decodedCharacter);
        characters.push(encodedCharacter);
    }
    return characters.join('');
}

//function to  reverse a string
const reverseString = (string) => {
    return string.split('').reverse().join('');
}

// secret message
const encodedString = "8757%TLSNRTI%TYSFX%YXJK[JI%YF%^YWFU%JPFP%JMY%SNTO";

const decodedString = decodeString(encodedString);
const reverseStringDecoded = reverseString(decodedString);

// 
console.log(`Encoded String: ${encodedString}`);
console.log(`Decoded String: ${reverseStringDecoded}`);

