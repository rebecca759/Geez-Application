import productdb, {
    bulkcreate
} from './module.js'

const db = productdb("GeezDB",{
    letters: `++id, letter1, letter2, letter3, letter4, letter5, letter6, letter7`, 
    numbers: `++id, amharic, geez, numGeez`, 
    months: `++id, amharic, geez`,
    //verb: `++id, verbG, verbAm, verbQ, verbA, verbB, verbM, verbGi, verbW`
});

var count = 0;
var removed_num = false;

//UI Vars
const list_item = document.querySelector('.my-list');
const letter_buttons = document.querySelector('.letter-list');
const main_letter = document.querySelector('.main-letter');
const letter_input = document.querySelector('#search-letters');
const search_button = document.querySelector('#searchlet-btn');
const searchnums_button = document.querySelector('#searchnums-btn');
const number_input = document.querySelector('#search-nums');
const letTab = document.querySelector('.lettersTab');
const numTab = document.querySelector('.numbers-tab');
const daysTab = document.querySelector('.days-tab');
const monthTab = document.querySelector('.monthsTab');
const testTab = document.querySelector('.testTab');

//Get Each letter from HTML
const letter_1 = document.querySelector('.letter-1');
const letter_2 = document.querySelector('.letter-2');
const letter_3 = document.querySelector('.letter-3');
const letter_4 = document.querySelector('.letter-4');
const letter_5 = document.querySelector('.letter-5');
const letter_6 = document.querySelector('.letter-6');
const letter_7 = document.querySelector('.letter-7');

//UI Vars for numbers
const numAmharic = document.querySelector('.numAmharic');
const numGeez = document.querySelector('.numGeez');
const num_buttons = document.querySelector('.num-list');
const numMain = document.querySelector('.main_num');
const numberTab = document.querySelector('.numberTab');
const wordTab = document.querySelector('.wordTab');


//UI Vars for months
const monthOne = document.querySelector('.month-1');
const monthTwo = document.querySelector('.month-2');
const monthThree = document.querySelector('.month-3');
const monthFour = document.querySelector('.month-4');
const monthFive = document.querySelector('.month-5');
const monthSix = document.querySelector('.month-6');
const monthSeven = document.querySelector('.month-7');
const monthEight = document.querySelector('.month-8');
const monthNine = document.querySelector('.month-9');
const monthTen = document.querySelector('.month-10');
const monthEleven = document.querySelector('.month-11');
const monthTwelve = document.querySelector('.month-12');
const monthThirteen = document.querySelector('.month-13');






//Populate the database

//Populate letters table
bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})


bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

bulkcreate(db.letters, {
    letter1: '???',
    letter2: '???',
    letter3: '???',
    letter4: '???',
    letter5: '???',
    letter6: '???',
    letter7: '???'
})

//Popluate numbers table
bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "???????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "????????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "????????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})


bulkcreate(db.numbers, {
    amharic: "????????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "??????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "??????/?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "??????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "????????????",
    geez: "????????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "?????????",
    geez: "?????????",
    numGeez: "???"
})

bulkcreate(db.numbers, {
    amharic: "????????? ??????",
    geez: "????????? ?????????",
    numGeez: "???"
})

//Populate months table
bulkcreate(db.months, {
    amharic: "???????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "?????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "??????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "????????????"
})

bulkcreate(db.months, {
    amharic: "??????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "?????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "?????????",
    geez: "?????????"
})

bulkcreate(db.months, {
    amharic: "????????????",
    geez: "????????????"
})



// get each descrption from HTML
const desc1 = document.querySelector('.number-desc');
const desc2 = document.querySelector('.number-desc2');

let lists = list_item.children;
let buttons = letter_buttons.children;

//We're using delegation on both
list_item.addEventListener('click',change);
letter_buttons.addEventListener('click',changeButtons);

num_buttons.addEventListener('click', changeNumbers);

//Event listener for search
search_button.addEventListener('click',searchLetters);
searchnums_button.addEventListener('click',searchNumbers);

function change(e) {
    var active;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].style.color == 'white') {
            active = lists[i].textContent;
        }

        lists[i].style.background = 'white';
        lists[i].style.color = 'black';
    }

    if (active == "???????????? ????????????") {
        if (e.target.textContent == "???????????? ???????????? ????????????") {
            alert("??????????????? ???????????? ?????? ?????????")
        }
    }
    if ( !(e.target.classList.contains('disabled')) ) {
        e.target.style.background = '#a5702a';
        e.target.style.color = 'white';
    }
    
}

function changeButtons(e) {
    if (e.target.classList.contains("btn")) {
        let old_buttons = e.target.parentElement.children;

        for (let i = 0; i < old_buttons.length; i++) {
            old_buttons[i].style.background = 'white';
            old_buttons[i].style.color = '#6d4512';
        }

        if (e.target.textContent == "???") {
            db.letters.get(1, function(firstRow) {
                letter_1.innerHTML = firstRow['letter1'];
                letter_2.innerHTML = firstRow['letter2'];
                letter_3.innerHTML = firstRow['letter3'];
                letter_4.innerHTML = firstRow['letter4'];
                letter_5.innerHTML = firstRow['letter5'];
                letter_6.innerHTML = firstRow['letter6'];
                letter_7.innerHTML = firstRow['letter7'];
            })
        }

        else if (e.target.textContent == "???") {
            db.letters.get(2, function(secondRow) {
                letter_1.innerHTML = secondRow['letter1'];
                letter_2.innerHTML = secondRow['letter2'];
                letter_3.innerHTML = secondRow['letter3'];
                letter_4.innerHTML = secondRow['letter4'];
                letter_5.innerHTML = secondRow['letter5'];
                letter_6.innerHTML = secondRow['letter6'];
                letter_7.innerHTML = secondRow['letter7'];
            })  
        }

        else if (e.target.textContent == "???") {
            db.letters.get(3, function(thirdRow) {
                letter_1.innerHTML = thirdRow['letter1'];
                letter_2.innerHTML = thirdRow['letter2'];
                letter_3.innerHTML = thirdRow['letter3'];
                letter_4.innerHTML = thirdRow['letter4'];
                letter_5.innerHTML = thirdRow['letter5'];
                letter_6.innerHTML = thirdRow['letter6'];
                letter_7.innerHTML = thirdRow['letter7'];
            })
        }

        else if (e.target.textContent == "???") {
            db.letters.get(4, function(fourthRow) {
                letter_1.innerHTML = fourthRow['letter1'];
                letter_2.innerHTML = fourthRow['letter2'];
                letter_3.innerHTML = fourthRow['letter3'];
                letter_4.innerHTML = fourthRow['letter4'];
                letter_5.innerHTML = fourthRow['letter5'];
                letter_6.innerHTML = fourthRow['letter6'];
                letter_7.innerHTML = fourthRow['letter7'];
            })  
        }

        else if (e.target.textContent == "???") {
            db.letters.get(5, function(fifthRow) {
                letter_1.innerHTML = fifthRow['letter1'];
                letter_2.innerHTML = fifthRow['letter2'];
                letter_3.innerHTML = fifthRow['letter3'];
                letter_4.innerHTML = fifthRow['letter4'];
                letter_5.innerHTML = fifthRow['letter5'];
                letter_6.innerHTML = fifthRow['letter6'];
                letter_7.innerHTML = fifthRow['letter7'];
            })   

        }

        else if (e.target.textContent == "???") {
            db.letters.get(6, function(sixthRow) {
                letter_1.innerHTML = sixthRow['letter1'];
                letter_2.innerHTML = sixthRow['letter2'];
                letter_3.innerHTML = sixthRow['letter3'];
                letter_4.innerHTML = sixthRow['letter4'];
                letter_5.innerHTML = sixthRow['letter5'];
                letter_6.innerHTML = sixthRow['letter6'];
                letter_7.innerHTML = sixthRow['letter7'];
            })   

        }

        else if (e.target.textContent == "???") {
            db.letters.get(7, function(seventhRow) {
                letter_1.innerHTML = seventhRow['letter1'];
                letter_2.innerHTML = seventhRow['letter2'];
                letter_3.innerHTML = seventhRow['letter3'];
                letter_4.innerHTML = seventhRow['letter4'];
                letter_5.innerHTML = seventhRow['letter5'];
                letter_6.innerHTML = seventhRow['letter6'];
                letter_7.innerHTML = seventhRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(8, function(EighthRow) {
                letter_1.innerHTML = EighthRow['letter1'];
                letter_2.innerHTML = EighthRow['letter2'];
                letter_3.innerHTML = EighthRow['letter3'];
                letter_4.innerHTML = EighthRow['letter4'];
                letter_5.innerHTML = EighthRow['letter5'];
                letter_6.innerHTML = EighthRow['letter6'];
                letter_7.innerHTML = EighthRow['letter7'];
            })   
        }
        
        else if (e.target.textContent == "???") {
            db.letters.get(9, function(NinthRow) {
                letter_1.innerHTML = NinthRow['letter1'];
                letter_2.innerHTML = NinthRow['letter2'];
                letter_3.innerHTML = NinthRow['letter3'];
                letter_4.innerHTML = NinthRow['letter4'];
                letter_5.innerHTML = NinthRow['letter5'];
                letter_6.innerHTML = NinthRow['letter6'];
                letter_7.innerHTML = NinthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(10, function(TenthRow) {
                letter_1.innerHTML = TenthRow['letter1'];
                letter_2.innerHTML = TenthRow['letter2'];
                letter_3.innerHTML = TenthRow['letter3'];
                letter_4.innerHTML = TenthRow['letter4'];
                letter_5.innerHTML = TenthRow['letter5'];
                letter_6.innerHTML = TenthRow['letter6'];
                letter_7.innerHTML = TenthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(11, function(EleventhRow) {
                letter_1.innerHTML = EleventhRow['letter1'];
                letter_2.innerHTML = EleventhRow['letter2'];
                letter_3.innerHTML = EleventhRow['letter3'];
                letter_4.innerHTML = EleventhRow['letter4'];
                letter_5.innerHTML = EleventhRow['letter5'];
                letter_6.innerHTML = EleventhRow['letter6'];
                letter_7.innerHTML = EleventhRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(12, function(twelvthRow) {
                letter_1.innerHTML = twelvthRow['letter1'];
                letter_2.innerHTML = twelvthRow['letter2'];
                letter_3.innerHTML = twelvthRow['letter3'];
                letter_4.innerHTML = twelvthRow['letter4'];
                letter_5.innerHTML = twelvthRow['letter5'];
                letter_6.innerHTML = twelvthRow['letter6'];
                letter_7.innerHTML = twelvthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(13, function(thirtnhRow) {
                letter_1.innerHTML = thirtnhRow['letter1'];
                letter_2.innerHTML = thirtnhRow['letter2'];
                letter_3.innerHTML = thirtnhRow['letter3'];
                letter_4.innerHTML = thirtnhRow['letter4'];
                letter_5.innerHTML = thirtnhRow['letter5'];
                letter_6.innerHTML = thirtnhRow['letter6'];
                letter_7.innerHTML = thirtnhRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(14, function(fortnthRow) {
                letter_1.innerHTML = fortnthRow['letter1'];
                letter_2.innerHTML = fortnthRow['letter2'];
                letter_3.innerHTML = fortnthRow['letter3'];
                letter_4.innerHTML = fortnthRow['letter4'];
                letter_5.innerHTML = fortnthRow['letter5'];
                letter_6.innerHTML = fortnthRow['letter6'];
                letter_7.innerHTML = fortnthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(15, function(fiftnthRow) {
                letter_1.innerHTML = fiftnthRow['letter1'];
                letter_2.innerHTML = fiftnthRow['letter2'];
                letter_3.innerHTML = fiftnthRow['letter3'];
                letter_4.innerHTML = fiftnthRow['letter4'];
                letter_5.innerHTML = fiftnthRow['letter5'];
                letter_6.innerHTML = fiftnthRow['letter6'];
                letter_7.innerHTML = fiftnthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(16, function(SixtnthRow) {
                letter_1.innerHTML = SixtnthRow['letter1'];
                letter_2.innerHTML = SixtnthRow['letter2'];
                letter_3.innerHTML = SixtnthRow['letter3'];
                letter_4.innerHTML = SixtnthRow['letter4'];
                letter_5.innerHTML = SixtnthRow['letter5'];
                letter_6.innerHTML = SixtnthRow['letter6'];
                letter_7.innerHTML = SixtnthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(17, function(SevntinthRow) {
                letter_1.innerHTML = SevntinthRow['letter1'];
                letter_2.innerHTML = SevntinthRow['letter2'];
                letter_3.innerHTML = SevntinthRow['letter3'];
                letter_4.innerHTML = SevntinthRow['letter4'];
                letter_5.innerHTML = SevntinthRow['letter5'];
                letter_6.innerHTML = SevntinthRow['letter6'];
                letter_7.innerHTML = SevntinthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(18, function(eightinthRow) {
                letter_1.innerHTML = eightinthRow['letter1'];
                letter_2.innerHTML = eightinthRow['letter2'];
                letter_3.innerHTML = eightinthRow['letter3'];
                letter_4.innerHTML = eightinthRow['letter4'];
                letter_5.innerHTML = eightinthRow['letter5'];
                letter_6.innerHTML = eightinthRow['letter6'];
                letter_7.innerHTML = eightinthRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(19, function(ninetinth) {
                letter_1.innerHTML = ninetinth['letter1'];
                letter_2.innerHTML = ninetinth['letter2'];
                letter_3.innerHTML = ninetinth['letter3'];
                letter_4.innerHTML = ninetinth['letter4'];
                letter_5.innerHTML = ninetinth['letter5'];
                letter_6.innerHTML = ninetinth['letter6'];
                letter_7.innerHTML = ninetinth['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(20, function(Twenty) {
                letter_1.innerHTML = Twenty['letter1'];
                letter_2.innerHTML = Twenty['letter2'];
                letter_3.innerHTML = Twenty['letter3'];
                letter_4.innerHTML = Twenty['letter4'];
                letter_5.innerHTML = Twenty['letter5'];
                letter_6.innerHTML = Twenty['letter6'];
                letter_7.innerHTML = Twenty['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(21, function(TwOne) {
                letter_1.innerHTML = TwOne['letter1'];
                letter_2.innerHTML = TwOne['letter2'];
                letter_3.innerHTML = TwOne['letter3'];
                letter_4.innerHTML = TwOne['letter4'];
                letter_5.innerHTML = TwOne['letter5'];
                letter_6.innerHTML = TwOne['letter6'];
                letter_7.innerHTML = TwOne['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(22, function(TwTwo) {
                letter_1.innerHTML = TwTwo['letter1'];
                letter_2.innerHTML = TwTwo['letter2'];
                letter_3.innerHTML = TwTwo['letter3'];
                letter_4.innerHTML = TwTwo['letter4'];
                letter_5.innerHTML = TwTwo['letter5'];
                letter_6.innerHTML = TwTwo['letter6'];
                letter_7.innerHTML = TwTwo['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(23, function(TwThree) {
                letter_1.innerHTML = TwThree['letter1'];
                letter_2.innerHTML = TwThree['letter2'];
                letter_3.innerHTML = TwThree['letter3'];
                letter_4.innerHTML = TwThree['letter4'];
                letter_5.innerHTML = TwThree['letter5'];
                letter_6.innerHTML = TwThree['letter6'];
                letter_7.innerHTML = TwThree['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(24, function(TFourRow) {
                letter_1.innerHTML = TFourRow['letter1'];
                letter_2.innerHTML = TFourRow['letter2'];
                letter_3.innerHTML = TFourRow['letter3'];
                letter_4.innerHTML = TFourRow['letter4'];
                letter_5.innerHTML = TFourRow['letter5'];
                letter_6.innerHTML = TFourRow['letter6'];
                letter_7.innerHTML = TFourRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(25, function(TFiveRow) {
                letter_1.innerHTML = TFiveRow['letter1'];
                letter_2.innerHTML = TFiveRow['letter2'];
                letter_3.innerHTML = TFiveRow['letter3'];
                letter_4.innerHTML = TFiveRow['letter4'];
                letter_5.innerHTML = TFiveRow['letter5'];
                letter_6.innerHTML = TFiveRow['letter6'];
                letter_7.innerHTML = TFiveRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(26, function(TSixRow) {
                letter_1.innerHTML = TSixRow['letter1'];
                letter_2.innerHTML = TSixRow['letter2'];
                letter_3.innerHTML = TSixRow['letter3'];
                letter_4.innerHTML = TSixRow['letter4'];
                letter_5.innerHTML = TSixRow['letter5'];
                letter_6.innerHTML = TSixRow['letter6'];
                letter_7.innerHTML = TSixRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(27, function(TSevenRow) {
                letter_1.innerHTML = TSevenRow['letter1'];
                letter_2.innerHTML = TSevenRow['letter2'];
                letter_3.innerHTML = TSevenRow['letter3'];
                letter_4.innerHTML = TSevenRow['letter4'];
                letter_5.innerHTML = TSevenRow['letter5'];
                letter_6.innerHTML = TSevenRow['letter6'];
                letter_7.innerHTML = TSevenRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(28, function(TEightRow) {
                letter_1.innerHTML = TEightRow['letter1'];
                letter_2.innerHTML = TEightRow['letter2'];
                letter_3.innerHTML = TEightRow['letter3'];
                letter_4.innerHTML = TEightRow['letter4'];
                letter_5.innerHTML = TEightRow['letter5'];
                letter_6.innerHTML = TEightRow['letter6'];
                letter_7.innerHTML = TEightRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(29, function(TNineRow) {
                letter_1.innerHTML = TNineRow['letter1'];
                letter_2.innerHTML = TNineRow['letter2'];
                letter_3.innerHTML = TNineRow['letter3'];
                letter_4.innerHTML = TNineRow['letter4'];
                letter_5.innerHTML = TNineRow['letter5'];
                letter_6.innerHTML = TNineRow['letter6'];
                letter_7.innerHTML = TNineRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(30, function(ThirtyRow) {
                letter_1.innerHTML = ThirtyRow['letter1'];
                letter_2.innerHTML = ThirtyRow['letter2'];
                letter_3.innerHTML = ThirtyRow['letter3'];
                letter_4.innerHTML = ThirtyRow['letter4'];
                letter_5.innerHTML = ThirtyRow['letter5'];
                letter_6.innerHTML = ThirtyRow['letter6'];
                letter_7.innerHTML = ThirtyRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(31, function(TOneRow) {
                letter_1.innerHTML = TOneRow['letter1'];
                letter_2.innerHTML = TOneRow['letter2'];
                letter_3.innerHTML = TOneRow['letter3'];
                letter_4.innerHTML = TOneRow['letter4'];
                letter_5.innerHTML = TOneRow['letter5'];
                letter_6.innerHTML = TOneRow['letter6'];
                letter_7.innerHTML = TOneRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(32, function(TTwoRow) {
                letter_1.innerHTML = TTwoRow['letter1'];
                letter_2.innerHTML = TTwoRow['letter2'];
                letter_3.innerHTML = TTwoRow['letter3'];
                letter_4.innerHTML = TTwoRow['letter4'];
                letter_5.innerHTML = TTwoRow['letter5'];
                letter_6.innerHTML = TTwoRow['letter6'];
                letter_7.innerHTML = TTwoRow['letter7'];
            })   
        }

        else if (e.target.textContent == "???") {
            db.letters.get(33, function(TThreeRow) {
                letter_1.innerHTML = TThreeRow['letter1'];
                letter_2.innerHTML = TThreeRow['letter2'];
                letter_3.innerHTML = TThreeRow['letter3'];
                letter_4.innerHTML = TThreeRow['letter4'];
                letter_5.innerHTML = TThreeRow['letter5'];
                letter_6.innerHTML = TThreeRow['letter6'];
                letter_7.innerHTML = TThreeRow['letter7'];
            })   

        }

        main_letter.innerHTML = e.target.textContent;

        e.target.style.background = '#6d4512';
        e.target.style.color = 'white';
    }
}

function searchLetters() {
    //check if search input is empty
    if (letter_input.value == '') {
        letter_input.style.borderColor = "red";
        return;//Avoiding else statement
    }
   
    letter_input.style.borderColor = '#ebebeb';

    //get search letter input

    var letter = letter_input.value.charAt(0);

    let letter_class = "???";

    if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }


  
    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }

    else if (letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???" || letter == "???") {
        letter_class = "???";
    }


    loop1:
        for (let i = 0; i < letter_buttons.children.length; i++) {
            let buttons_list = letter_buttons.children
    loop2:
            for (let j = 0; j < buttons_list.length; j++) {
                let buttons = buttons_list[j].children;

    loop3:
                for (let k = 0; k < buttons.length; k++) {
                    if (buttons[k].textContent == letter_class) {
                        buttons[k].style.background = '#6d4512';
                        buttons[k].style.color = 'white';
                    }

                    else {
                        buttons[k].style.background = 'white';
                        buttons[k].style.color = '#6d4512';
                    }
                } 
            } 
            break loop1;   
        }

    if (letter_class == "???") {
        $('#myCarousel').carousel(0);
        db.letters.get(1, function(rowOne) {
            main_letter.innerHTML = rowOne['letter1'];
            letter_1.innerHTML = rowOne['letter1'];
            letter_2.innerHTML = rowOne['letter2'];
            letter_3.innerHTML = rowOne['letter3'];
            letter_4.innerHTML = rowOne['letter4'];
            letter_5.innerHTML = rowOne['letter5'];
            letter_6.innerHTML = rowOne['letter6'];
            letter_7.innerHTML = rowOne['letter7'];
        })  
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(0);
        db.letters.get(2, function(rowTwo) {
            main_letter.innerHTML = rowTwo['letter1'];
            letter_1.innerHTML = rowTwo['letter1'];
            letter_2.innerHTML = rowTwo['letter2'];
            letter_3.innerHTML = rowTwo['letter3'];
            letter_4.innerHTML = rowTwo['letter4'];
            letter_5.innerHTML = rowTwo['letter5'];
            letter_6.innerHTML = rowTwo['letter6'];
            letter_7.innerHTML = rowTwo['letter7'];
        })
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(0);
        db.letters.get(3, function(rowThree) {
            main_letter.innerHTML = rowThree['letter1'];
            letter_1.innerHTML = rowThree['letter1'];
            letter_2.innerHTML = rowThree['letter2'];
            letter_3.innerHTML = rowThree['letter3'];
            letter_4.innerHTML = rowThree['letter4'];
            letter_5.innerHTML = rowThree['letter5'];
            letter_6.innerHTML = rowThree['letter6'];
            letter_7.innerHTML = rowThree['letter7'];
        })
    }


  
    else if (letter_class == "???") {
        $('#myCarousel').carousel(1);
        db.letters.get(4, function(rowFour) {
            main_letter.innerHTML = rowFour['letter1'];
            letter_1.innerHTML = rowFour['letter1'];
            letter_2.innerHTML = rowFour['letter2'];
            letter_3.innerHTML = rowFour['letter3'];
            letter_4.innerHTML = rowFour['letter4'];
            letter_5.innerHTML = rowFour['letter5'];
            letter_6.innerHTML = rowFour['letter6'];
            letter_7.innerHTML = rowFour['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(1);
        db.letters.get(5, function(rowFive) {
            main_letter.innerHTML = rowFive['letter1'];
            letter_1.innerHTML = rowFive['letter1'];
            letter_2.innerHTML = rowFive['letter2'];
            letter_3.innerHTML = rowFive['letter3'];
            letter_4.innerHTML = rowFive['letter4'];
            letter_5.innerHTML = rowFive['letter5'];
            letter_6.innerHTML = rowFive['letter6'];
            letter_7.innerHTML = rowFive['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }


    else if (letter_class == "???") {
        $('#myCarousel').carousel(1);
        db.letters.get(6, function(rowSix) {
            main_letter.innerHTML = rowSix['letter1'];
            letter_1.innerHTML = rowSix['letter1'];
            letter_2.innerHTML = rowSix['letter2'];
            letter_3.innerHTML = rowSix['letter3'];
            letter_4.innerHTML = rowSix['letter4'];
            letter_5.innerHTML = rowSix['letter5'];
            letter_6.innerHTML = rowSix['letter6'];
            letter_7.innerHTML = rowSix['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(1);
        db.letters.get(7, function(rowSeven) {
            main_letter.innerHTML = rowSeven['letter1'];
            letter_1.innerHTML = rowSeven['letter1'];
            letter_2.innerHTML = rowSeven['letter2'];
            letter_3.innerHTML = rowSeven['letter3'];
            letter_4.innerHTML = rowSeven['letter4'];
            letter_5.innerHTML = rowSeven['letter5'];
            letter_6.innerHTML = rowSeven['letter6'];
            letter_7.innerHTML = rowSeven['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(1);
        db.letters.get(8, function(rowSeven) {
            main_letter.innerHTML = rowSeven['letter1'];
            letter_1.innerHTML = rowSeven['letter1'];
            letter_2.innerHTML = rowSeven['letter2'];
            letter_3.innerHTML = rowSeven['letter3'];
            letter_4.innerHTML = rowSeven['letter4'];
            letter_5.innerHTML = rowSeven['letter5'];
            letter_6.innerHTML = rowSeven['letter6'];
            letter_7.innerHTML = rowSeven['letter7'];
        })

        console.log($('#myCarousel').carousel(1));
    }

    else if (letter_class == "???") {
        $('#myCarousel').carousel(2);
        db.letters.get(9, function(rowSeven) {
            main_letter.innerHTML = rowSeven['letter1'];
            letter_1.innerHTML = rowSeven['letter1'];
            letter_2.innerHTML = rowSeven['letter2'];
            letter_3.innerHTML = rowSeven['letter3'];
            letter_4.innerHTML = rowSeven['letter4'];
            letter_5.innerHTML = rowSeven['letter5'];
            letter_6.innerHTML = rowSeven['letter6'];
            letter_7.innerHTML = rowSeven['letter7'];
        })

        console.log($('#myCarousel').carousel(2));
    }


    

}

function changeNumbers(e) {
    if (e.target.classList.contains("btn")) {
        let old_buttons = e.target.parentElement.children;

        for (let i = 0; i < old_buttons.length; i++) {
            old_buttons[i].style.background = 'white';
            old_buttons[i].style.color = '#6d4512';
        }

        if (e.target.textContent == "1") {
            db.numbers.get(1, function(rowOne) { 
                numMain.innerHTML = rowOne['numGeez'];
                numAmharic.innerHTML = rowOne['amharic'];
                numGeez.innerHTML = rowOne['geez'];
            })
        }

        else if (e.target.textContent == "2") {
            db.numbers.get(2, function(rowTwo) { 
                numMain.innerHTML = rowTwo["numGeez"];
                numAmharic.innerHTML = rowTwo["amharic"];
                numGeez.innerHTML = rowTwo["geez"];
            })
        }

        else if (e.target.textContent == "3") {
            db.numbers.get(3, function(rowThree) { 
                numMain.innerHTML = rowThree["numGeez"];
                numAmharic.innerHTML = rowThree["amharic"];
                numGeez.innerHTML = rowThree["geez"];
            })
        }

        else if (e.target.textContent == "4") {
            db.numbers.get(4, function(rowFour) { 
                numMain.innerHTML = rowFour["numGeez"];
                numAmharic.innerHTML = rowFour["amharic"];
                numGeez.innerHTML = rowFour["geez"];
            })
        }

        else if (e.target.textContent == "5") {
            db.numbers.get(5, function(rowFive) { 
                numMain.innerHTML = rowFive["numGeez"];
                numAmharic.innerHTML = rowFive["amharic"];
                numGeez.innerHTML = rowFive["geez"];
            })
        }

        else if (e.target.textContent == "6") {
            db.numbers.get(6, function(rowSix) { 
                numMain.innerHTML = rowSix["numGeez"];
                numAmharic.innerHTML = rowSix["amharic"];
                numGeez.innerHTML = rowSix["geez"];
            })
        }

        else if (e.target.textContent == "7") {
            db.numbers.get(7, function(rowSeven) { 
                numMain.innerHTML = rowSeven["numGeez"];
                numAmharic.innerHTML = rowSeven["amharic"];
                numGeez.innerHTML = rowSeven["geez"];
            })
        }

        else if (e.target.textContent == "8") {
            db.numbers.get(8, function(rowEight) { 
                numMain.innerHTML = rowEight["numGeez"];
                numAmharic.innerHTML = rowEight["amharic"];
                numGeez.innerHTML = rowEight["geez"];
            })
        }

        else if (e.target.textContent == "9") {
            db.numbers.get(9, function(rowNine) { 
                numMain.innerHTML = rowNine["numGeez"];
                numAmharic.innerHTML = rowNine["amharic"];
                numGeez.innerHTML = rowNine["geez"];
            })
        }

        else if (e.target.textContent == "10") {
            db.numbers.get(10, function(rowTen) { 
                numMain.innerHTML = rowTen["numGeez"];
                numAmharic.innerHTML = rowTen["amharic"];
                numGeez.innerHTML = rowTen["geez"];
            })
        }

        else if (e.target.textContent == "20") {
            db.numbers.get(11, function(rowEleven) { 
                numMain.innerHTML = rowEleven["numGeez"];
                numAmharic.innerHTML = rowEleven["amharic"];
                numGeez.innerHTML = rowEleven["geez"];
            })
        }

        else if (e.target.textContent == "30") {
            db.numbers.get(12, function(rowTwelve) { 
                numMain.innerHTML = rowTwelve["numGeez"];
                numAmharic.innerHTML = rowTwelve["amharic"];
                numGeez.innerHTML = rowTwelve["geez"];
            })
        }

        else if (e.target.textContent == "40") {
            db.numbers.get(13, function(rowThirteen) { 
                numMain.innerHTML = rowThirteen["numGeez"];
                numAmharic.innerHTML = rowThirteen["amharic"];
                numGeez.innerHTML = rowThirteen["geez"];
            })
        }

        else if (e.target.textContent == "50") {
            db.numbers.get(14, function(rowFourteen) { 
                numMain.innerHTML = rowFourteen["numGeez"];
                numAmharic.innerHTML = rowFourteen["amharic"];
                numGeez.innerHTML = rowFourteen["geez"];
            })
        }

        else if (e.target.textContent == "60") {
            db.numbers.get(15, function(rowFiftn) { 
                numMain.innerHTML = rowFiftn["numGeez"];
                numAmharic.innerHTML = rowFiftn["amharic"];
                numGeez.innerHTML = rowFiftn["geez"];
            })
        }

        else if (e.target.textContent == "70") {
            db.numbers.get(16, function(rowSixtn) { 
                numMain.innerHTML = rowSixtn["numGeez"];
                numAmharic.innerHTML = rowSixtn["amharic"];
                numGeez.innerHTML = rowSixtn["geez"];
            })
        }

        else if (e.target.textContent == "80") {
            db.numbers.get(17, function(rowSeventn) { 
                numMain.innerHTML = rowSeventn["numGeez"];
                numAmharic.innerHTML = rowSeventn["amharic"];
                numGeez.innerHTML = rowSeventn["geez"];
            })
        }

        else if (e.target.textContent == "90") {
            db.numbers.get(18, function(rowEightn) { 
                numMain.innerHTML = rowEightn["numGeez"];
                numAmharic.innerHTML = rowEightn["amharic"];
                numGeez.innerHTML = rowEightn["geez"];
            })
        }

        else if (e.target.textContent == "100") {
            db.numbers.get(19, function(rowNintn) { 
                numMain.innerHTML = rowNintn["numGeez"];
                numAmharic.innerHTML = rowNintn["amharic"];
                numGeez.innerHTML = rowNintn["geez"];
            })
        }

        e.target.style.background = '#6d4512';
        e.target.style.color = 'white';

    }
}

function searchNumbers() {
    //check if search input is empty
    if (number_input.value == '') {
        number_input.style.borderColor = "red";
        return;
    }

    number_input.style.borderColor = '#ebebeb';

    //get search letter input

    var number = number_input.value;


    loop1:
        for (let i = 0; i < num_buttons.children.length; i++) {
            let buttons_list = num_buttons.children
    loop2:
            for (let j = 0; j < buttons_list.length; j++) {
                let buttons = buttons_list[j].children;

    loop3:
                for (let k = 0; k < buttons.length; k++) {
                    if (buttons[k].textContent == number) {
                        buttons[k].style.background = '#6d4512';
                        buttons[k].style.color = 'white';
                    }

                    else {
                        buttons[k].style.background = 'white';
                        buttons[k].style.color = '#6d4512';
                    }
                }
            } 
            break loop1;     
        }
   
    if (number == "1") {
        $('#numCarousel').carousel(0);
        db.numbers.get(1, function(rowOne) {
            numMain.innerHTML = rowOne['numGeez'];
            numAmharic.innerHTML = rowOne['amharic'];
            numGeez.innerHTML = rowOne['geez'];
        })  
    }

    else if (number == "2") {
        $('#numCarousel').carousel(0);
        db.numbers.get(2, function(rowTwo) {
            numMain.innerHTML = rowTwo['numGeez'];
            numAmharic.innerHTML = rowTwo['amharic'];
            numGeez.innerHTML = rowTwo['geez'];
        })  
    }

    else if (number == "3") {
        $('#numCarousel').carousel(0);
        db.numbers.get(3, function(rowThree) {
            numMain.innerHTML = rowThree['numGeez'];
            numAmharic.innerHTML = rowThree['amharic'];
            numGeez.innerHTML = rowThree['geez'];
        })  
    }

    else if (number == "4") {
        $('#numCarousel').carousel(0);
        db.numbers.get(4, function(rowFour) {
            numMain.innerHTML = rowFour['numGeez'];
            numAmharic.innerHTML = rowFour['amharic'];
            numGeez.innerHTML = rowFour['geez'];
        })  
    }

    else if (number == "5") {
        $('#numCarousel').carousel(1);
        db.numbers.get(5, function(rowFive) {
            numMain.innerHTML = rowFive['numGeez'];
            numAmharic.innerHTML = rowFive['amharic'];
            numGeez.innerHTML = rowFive['geez'];
        })  
    }

    else if (number == "6") {
        $('#numCarousel').carousel(1);
        db.numbers.get(6, function(rowSix) {
            numMain.innerHTML = rowSix['numGeez'];
            numAmharic.innerHTML = rowSix['amharic'];
            numGeez.innerHTML = rowSix['geez'];
        })  
    }

    else if (number == "7") {
        $('#numCarousel').carousel(1);
        db.numbers.get(7, function(rowSeven) {
            numMain.innerHTML = rowSeven['numGeez'];
            numAmharic.innerHTML = rowSeven['amharic'];
            numGeez.innerHTML = rowSeven['geez'];
        })  
    }

    else if (number == "8") {
        $('#numCarousel').carousel(1);
        db.numbers.get(8, function(rowEight) {
            numMain.innerHTML = rowEight['numGeez'];
            numAmharic.innerHTML = rowEight['amharic'];
            numGeez.innerHTML = rowEight['geez'];
        })  
    }

    else if (number == "9") {
        $('#numCarousel').carousel(2);
        db.numbers.get(9, function(rowNine) {
            numMain.innerHTML = rowNine['numGeez'];
            numAmharic.innerHTML = rowNine['amharic'];
            numGeez.innerHTML = rowNine['geez'];
        })  
    }

    else if (number == "10") {
        $('#numCarousel').carousel(2);
        db.numbers.get(10, function(rowTen) {
            numMain.innerHTML = rowTen['numGeez'];
            numAmharic.innerHTML = rowTen['amharic'];
            numGeez.innerHTML = rowTen['geez'];
        })  
    }

    else if (number == "20") {
        $('#numCarousel').carousel(2);
        db.numbers.get(11, function(rowEleven) {
            numMain.innerHTML = rowEleven['numGeez'];
            numAmharic.innerHTML = rowEleven['amharic'];
            numGeez.innerHTML = rowEleven['geez'];
        })  
    }

    else if (number == "30") {
        $('#numCarousel').carousel(2);
        db.numbers.get(12, function(rowTwelve) {
            numMain.innerHTML = rowTwelve['numGeez'];
            numAmharic.innerHTML = rowTwelve['amharic'];
            numGeez.innerHTML = rowTwelve['geez'];
        })  
    }

    else if (number == "40") {
        $('#numCarousel').carousel(3);
        db.numbers.get(13, function(rowThirteen) {
            numMain.innerHTML = rowThirteen['numGeez'];
            numAmharic.innerHTML = rowThirteen['amharic'];
            numGeez.innerHTML = rowThirteen['geez'];
        })  
    }

    else if (number == "50") {
        $('#numCarousel').carousel(3);
        db.numbers.get(14, function(rowFourtn) {
            numMain.innerHTML = rowFourtn['numGeez'];
            numAmharic.innerHTML = rowFourtn['amharic'];
            numGeez.innerHTML = rowFourtn['geez'];
        })  
    }

    else if (number == "60") {
        $('#numCarousel').carousel(3);
        db.numbers.get(15, function(rowFiftn) {
            numMain.innerHTML = rowFiftn['numGeez'];
            numAmharic.innerHTML = rowFiftn['amharic'];
            numGeez.innerHTML = rowFiftn['geez'];
        })  
    }

    else if (number == "70") {
        $('#numCarousel').carousel(3);
        db.numbers.get(16, function(rowSixtn) {
            numMain.innerHTML = rowSixtn['numGeez'];
            numAmharic.innerHTML = rowSixtn['amharic'];
            numGeez.innerHTML = rowSixtn['geez'];
        })  
    }

    else if (number == "80") {
        $('#numCarousel').carousel(4);
        db.numbers.get(17, function(rowSeventn) {
            numMain.innerHTML = rowSeventn['numGeez'];
            numAmharic.innerHTML = rowSeventn['amharic'];
            numGeez.innerHTML = rowSeventn['geez'];
        })  
    }

    else if (number == "90") {
        $('#numCarousel').carousel(4);
        db.numbers.get(18, function(rowEightn) {
            numMain.innerHTML = rowEightn['numGeez'];
            numAmharic.innerHTML = rowEightn['amharic'];
            numGeez.innerHTML = rowEightn['geez'];
        })  
    }

    else {
        number_input.style.borderColor = "red";

    }
      
}

db.months.get(1,function(firstRow) {
    monthOne.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(2,function(firstRow) {
    monthTwo.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})


db.months.get(3,function(firstRow) {
    monthThree.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})


db.months.get(4,function(firstRow) {
    monthFour.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})


db.months.get(5,function(firstRow) {
    monthFive.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})


db.months.get(6,function(firstRow) {
    monthSix.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(7,function(firstRow) {
    monthSeven.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(8,function(firstRow) {
    monthEight.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(9,function(firstRow) {
    monthNine.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(10,function(firstRow) {
    monthTen.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(11,function(firstRow) {
    monthEleven.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(12,function(firstRow) {
    monthTwelve.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})

db.months.get(13,function(firstRow) {
    monthThirteen.innerHTML = `${firstRow['amharic']} : ${firstRow['geez']}`
})


numTab.addEventListener('click',alertNum)
daysTab.addEventListener('click',alertDay)
monthTab.addEventListener('click',alertMonth)
testTab.addEventListener('click',alertTest)

function alertNum(e) {
    console.log('he')
    if (e.target.classList.contains('disabled')) {
        alert("?????? ????????? ?????? ???????????? ???????????? ?????? ????????????")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            numTab.classList.remove('disabled')
            removed_num = true;

        }
    
    }
}   

function alertDay(e) {
    if (e.target.classList.contains('disabled')) {
        alert("?????? ????????? ?????? ???????????? ???????????? ?????? ????????????")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            daysTab.classList.remove('disabled')
            removed_num = true;

        }
    
    }
}

function alertMonth(e) {
    if (e.target.classList.contains('disabled')) {
        alert("?????? ????????? ?????? ???????????? ???????????? ?????? ????????????")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            monthTab.classList.remove('disabled')
            removed_num = true;

        }
    
    }
}

function alertTest(e) {
    if (e.target.classList.contains('disabled')) {
        alert("????????? ??????????????? ???????????? ?????? ????????????")
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-2) {
            // you're at the bottom of the page
            console.log('scrolld')
            testTab.classList.remove('disabled')
            removed_num = true;
        }
    
    }
}


