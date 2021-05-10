const order = 3;

let ngramObject = { // Data set for markov chain
    //ngramKey: ngramValue
};

const seederString = 'The day is hot and the night is long. At the end of a long night comes a bright day and a beautiful sunrise.';

//let randomNumber = Math.floor(Math.random() * ngramObject[ngramKey].length);

const generateNgramObject = (inputString) => {

    for (i = 0; i < seederString.length; i++) {
        let ngramKey = inputString.substring(i, i + order);
        if (!ngramObject[ngramKey]) {
            ngramObject[ngramKey] = [];
            ngramObject[ngramKey].push(inputString.charAt(i + order));
        } else {
            ngramObject[ngramKey].push(inputString.charAt(i + order));
        }
    }

    return ngramObject;

};

console.log(JSON.stringify(generateNgramObject(seederString)));