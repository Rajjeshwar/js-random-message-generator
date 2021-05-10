const order = 3;

let ngramObject = { // Data set for markov chain
    //ngramKey: ngramValue
};

const seederString = 'The day is hot and the night is long. At the end of a long night comes a bright day and a beautiful sunrise.';

//let randomNumber = Math.floor(Math.random() * ngramObject[ngramKey].length);

const generateNgramObject = () => {

    for (i = 0; i < seederString.length - order; i++) {
        let ngramKey = seederString.substring(i, i + order); // set substring length, increment substring starting value by 1, create a key for each sub string
        if (!ngramObject[ngramKey]) { // for each key choose the character after the substring and add as value to the key
            ngramObject[ngramKey] = []; // if new key then add new key then init new empty array and input or if old, input in older array
            ngramObject[ngramKey].push(seederString.charAt(i + order)); // we do not need to calculate probabilities for each element of ngramKey array because by allowing duplicates I dont need to count the number of times a element is inserted
        } else {
            ngramObject[ngramKey].push(seederString.charAt(i + order));
        }
    }

    return ngramObject;

};

const generateMessage = () => {

    let currentGram = seederString.substring(0, order); // to create the string we need, currentNgram value + nextNgram value (next value obtained from possible Ngram values ie- each of the arrays corresponding to a key)
    let finalString = currentGram;
    for (let j = 0; j < 40; j++) {
        if (!ngramObject[currentGram]) {
            break;
        }
        let nextNgram = ngramObject[currentGram][Math.floor(Math.random() * ngramObject[currentGram].length)];
        finalString += nextNgram;
        let len = finalString.length;
        currentGram = finalString.substring(len - 3, len);

    }

    return finalString;

};

generateNgramObject();
console.log(JSON.stringify(generateMessage()));