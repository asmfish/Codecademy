/*Program to generate random messages*/
//define data structure as object
const wordList = {
    love: ['kind', 'open', 'respectful', 'affectionate', 'adoring', 'passionate',
        'devoted','warm','fond','caring','compassionate', 'devoted'],

    work: ['creative', 'reliable', 'diligent', 'industrious',
        'assiduous','energetic', 'organized','flexible','resourceful', 
        'disciplined', 'self-motivated', 'ambitious', 'honest', 'determined', 'confident'],

    charachter: ['brave','adventurous','independent', 'cheerful', 'funny', 
    'imaginative', 'ambitious', 'confident', 'creative', 'loyal', 'generous', 'careful'
, 'intelligent', 'bright', 'humble', 'calm', 'cooperative', 'honest']
}

//generates random number less than the length of an array
const generateRandomNumber = length =>{
    return Math.floor(Math.random() * length);
}

//generate random message
const genereateMessage = () =>{
    let msg = '';
    let randomWords = [];
    let randomWord = '';
    let randomMessages = [];

    for(let prop in wordList){
        //reset random words
        randomWords = [];

        //selects three words from each category
        while(randomWords.length < 3){
            randomWord = wordList[prop][generateRandomNumber(wordList[prop].length)];

            if(!randomWords.includes(randomWord)){
                randomWords.push(randomWord);
            }
        }

        //prepend beginning phrases based on the category
        switch(prop){
            case 'love':
                msg = 'In love, you are';
                break;
            case 'charachter':
                msg = 'Your character is';
                break;
            case 'work':
                msg = 'At work, you are';
                break;
        }

        //add the begining phrases with the 3 random words
        randomMessages.push(`${msg} ${randomWords.slice(0, randomWords.length - 1).join(', ')} and ${randomWords[randomWords.length - 1]}!`)
    }

    //display the rgenerated messages
    randomMessages.forEach(msg =>{
        console.log(msg);
    })
}

//generate ascii art
const asciiTitle = () =>{
    const font = {
        'L': [
            "*    ",
            "*    ",
            "*    ",
            "*    ",
            "*****"
        ],
        'U': [
            "*   *",
            "*   *",
            "*   *",
            "*   *",
            " *** ",
        ],
        'C': [
            " *** ",
            "*    ",
            "*    ",
            "*    ",
            " *** ",
        ],
        'K': [
            "*   *",
            "*  * ",
            "* *  ",
            "*  * ",
            "*   *"
        ],
        'Y': [
            "*   *",
            " * * ",
            "  *  ",
            "  *  ",
            "  *  "
        ],
    }

    let lines = [];
    for(let i = 0; i < font['L'].length; i++){
        lines = [];
        for(let f in font){
            lines.push(font[f][i])
        }

        console.log(lines.join(' '))
    }
}

//run and test the functions
asciiTitle();
genereateMessage();




