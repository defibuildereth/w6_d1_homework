// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//   // I think this will say Miss Scarlet. Noice.

// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// // changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // I think that the changeMurderer function is going to throw an error, because murderer has been assigned as a const so it can't be re-assigned. If it keeps running as far as verdict, I think it'll say Professor Plum. Yeah ok cool error as expected, I'll comment out that function call.. Professor Plum, grand.

// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//First verdict is Mrs Peacock, second verdict Professor Plum. Yup

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// // Mrs Peacock. Aye

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// // can edit the properties, just not reassign, so this'll go through fine and the weapon will be revolver. Yyup

// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Mrs White I think, no specification so the variable is global, think it can be reassigned but not sure. Yea ok.

// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// //ok, so. changemurderer sets and runs plottwist, which sets and runs unexpectedoutcome, which sets murderer as miss scarlet gloablly. so miss scarlet? hmm. no. Mr Green. actually don't get this one, if ep 6 changed the global variable, why doesn't this one?

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock'; //same
//     scenario.room = 'Dining Room'; //fine so far

//     const plotTwist = function (room) {
//         if (scenario.room === room) { //true
//             scenario.murderer = 'Colonel Mustard'; //yes
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) { //false
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//seems like it should be lead pipe. ah shit yea no, unexpectedoutcome will run so it's the candle stick. fair enough

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//I think Professor Plum, as the let murderer Mrs Peacock will be block scope so only changed it inside that loop? Yea ok.