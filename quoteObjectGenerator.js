// Create a factory function to create objects for each quote with author info and store in an array



const order = 3;




const seederString = 'All our dreams can come true, if we have the courage to pursue them. The secret of getting to live the dream, is getting started.';

const generatorObject = (seed) => {
    let trigram = {};
    for (let i = 0; i <= seed.length - order; i++) { // iterate over length of entire string, subtract order of each gram to avoid extra spaces at the end
        let trigramKeys = seederString.substring(i, i + order); // select each substrng of 3 characters
        if (!trigram[trigramKeys]) { // if object does not have that key then add it and set value as an array
            trigram[trigramKeys] = [];
            trigram[trigramKeys].push(seederString.charAt(i + order)); //push the characters the substring is followed by into an array
        } else {
            trigram[trigramKeys].push(seederString.charAt(i + order));
        }

    }
    return trigram;
}

const generateMessage = (trigram) => {
    let finalArray;
    let randomIndex = Math.floor(Math.random() * trigram[trigramKeys].length);
    let currentGram = seederString.substring(0, order);
    let result = currentGram;
    for (let i = 0; i < 60; i++) {
        finalArray = trigram[trigramKeys];
        if (!finalArray) {
            break;
        }
        let next = finalArray[randomIndex];
        result += next;
        let len = result.length;
        currentGram = result.substring(len - 3, len);
    }
}



console.log(JSON.stringify(generateMessage(generatorObject(seederString))));