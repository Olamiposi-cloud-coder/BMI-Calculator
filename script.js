"use strict"

// const massInput = document.querySelector('#mass');
// const heightInput = document.querySelector('#height');
// const btn = document.querySelector('.btn')

// function calculateBMI() {

//     const mass = Number(massInput.value);
//     const height = Number(heightInput.value);

//     const bmi = mass / height ** 2;
//     return bmi;
// }

// btn.addEventListener('click', () => {
//     const bmi = Math.floor(calculateBMI());
//     console.log(bmi)
// })

// const hasDriversLicense = true;
// const hasGoodVision = false;


// if (hasDriversLicense && hasGoodVision) {
//     console.log("You Can proceed to taking your children to school") ;
// } else if (hasDriversLicense || hasGoodVision) {
//     console.log("You have to process your Driver's License before you can drive");
// } else (!hasDriversLicense && !hasGoodVision) ;{
//     console.log("You must not drive!!!😞😞😞");
// }

// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 81;

// const koalasFirstScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 86;

// const dolphinsAverage = Math.floor((dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3);
// const koalaAverage = Math.floor((koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3);

// const minimumScore = 100;

// console.log(dolphinsAverage, koalaAverage)




// if (dolphinsAverage > koalaAverage && dolphinsAverage >= minimumScore) {
//     console.log("Team Dolphins is the winner of the Competition");
// } else if (koalaAverage > dolphinsAverage && koalaAverage >= minimumScore) {
//     console.log("Team Koalas is the winner of the Competition");
// } else if (dolphinsAverage === koalaAverage && dolphinsAverage >= minimumScore
//     && koalaAverage >= minimumScore){
//     console.log("The Competition ends in tie")
// } else {
//     console.log("There is no winner in the Competition")
// }

// dolphinsAverage > koalaAverage && dolphinsAverage >= minimumScore ? 
// console.log("Team Dolphins is the winner of the competition") : 
// console.log("There is no winner in the competition"); 

// const day = prompt("Please enter day of the week");

// if (day === 'monday') {
//     console.log('Plan course structure')
//     console.log('Go to coding meetups')
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos')
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples')
// } else if (day === 'friday') {
//     console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend!!!')
// } else {
//     console.log('Not a valid day')
// }

// const bill = 40;
// let tip;
// if (bill >= 50 && bill <= 300) {
//     tip = 0.15 * bill; 
// } else {
//     tip = 0.2 * bill; 
// }
// const totalValue = bill + tip; 
// console.log(totalValue);
// if (bill >= 50 && bill <= 300) {
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`);
// } else {
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`);
// }


// const bill = 275;
// const tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
// const totalValue = bill + tip;
// console.log(totalValue);
// (bill >= 50 && bill <= 300) ? console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${totalValue}`) : console.log("NO TIPS FOR YOU!!!");


// const bill = 30;
// const firstTip = 15 / 100 * bill;
// const secondTip = 20 / 100 * bill;
// const firstTotalValue = bill + firstTip;
// const secondTotalValue = bill + secondTip;

// console.log(firstTotalValue, secondTotalValue)

// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${firstTip}, and the total value is ${firstTotalValue}`) :
// console.log(`The bill was ${bill}, the tip was ${secondTip}, and the total value is ${secondTotalValue}`);


let hasDriverLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive")

function calAge () {
    let currentYear = 2024;
    let dateOfBirth = 2000;
    let age = currentYear - dateOfBirth;
    console.log(age)
    return age;
}

calAge();
calAge();
calAge();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const appleText = apples === 1 ? 'apple' : 'apples';
//     const orangeText = oranges === 1 ? 'orange' : 'oranges';
//     const juice = `Juice made with ${apples} ${appleText} and ${oranges} ${orangeText}.`;
//     return juice;
// }

// fruitProcessor(2, 1)
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    let appleText, orangeText;

    if (apples === 1) {
        appleText = 'apple';
    } else {
        appleText = 'apples';
    }

    if (oranges === 1) {
        orangeText = 'orange';
    } else {
        orangeText = 'oranges';
    }

    const juice = `Juice made with ${apples} ${appleText} and ${oranges} ${orangeText}.`;

    console.log(juice)
    return juice;
}

fruitProcessor(2, 1);


// function newFruitProcessor(limes, grapes) {
//     console.log(limes, grapes)
//     let limeText, grapeText;
//     if (limes === 1) {
//         limeText = 'lime';
//     } else {
//         limeText = 'limes'
//     }

//     if (grapes === 1) {
//         grapeText = 'grape';
//     } else {
//         grapeText = 'grapes'
//     }

//     const fruitJuice = `Fruit Juice made from ${grapes} ${grapeText} and ${limes} ${limeText}`

//     console.log(fruitJuice)
//     return fruitJuice; 
// }

// Arrow funtion

const cutFruitPieces = (fruit) => fruit * 4;

const newFruitProcessor = (limes, grapes) => {
    const limePieces = cutFruitPieces(limes);
    const grapePieces = cutFruitPieces(grapes);
    let limeText, grapeText, limePiecesText, grapePiecesText;
    limes <= 1 ? (limeText = 'lime') : (limeText = 'limes');
    grapes <= 1 ? (grapeText = 'grape') : (grapeText = 'grapes');
    limePiecesText = limePieces <= 1 ? 'piece' : 'pieces'; 
    grapePiecesText = grapePieces <= 1 ? 'piece' : 'pieces';
    
    const fruitJuice = `Fruit Juice made from ${grapePieces} ${grapePiecesText} of ${grapes} ${grapeText} and ${limePieces} ${limePiecesText} ${limes} ${limeText}`
    return fruitJuice;
};

console.log(newFruitProcessor(0,1))
const homeMadeJuice = newFruitProcessor(3, 0);
console.log(homeMadeJuice)

function calAge1(birthYear) {
    const presentYear = 2024
    const newAge = presentYear - birthYear;
    return newAge;
}

console.log(calAge1(2000))

const calAge2 = birthYear =>  2034 - birthYear;
console.log(calAge2(2000)) 

const yearUntilRetirement = () => {
    const firstName = 'Olami';
    const lastName = 'Cloud';
    const retirement = 65 - calAge2(2000);
    const yearOfRetirement = `Mr ${firstName} ${lastName} retires in the next ${retirement} years.`

    return  yearOfRetirement;
}

console.log(yearUntilRetirement())


const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsAvg = calcAverage(88, 54, 41);
const koalaAvg = calcAverage(23, 34, 27);

// #FUNCTION EXPRESSIONS

// const checkWinner = function(avgDolphins, avgKoala) {

//     if (avgDolphins >= 2 * avgKoala) {
//         return (`Dolphins Wins (${avgDolphins} vs. ${avgKoala})`)
//     } else if (avgKoala >= 2 * avgDolphins) {
//         return `Koalas Wins ( ${avgKoala} vs. ${avgDolphins})`
//     } else {
//         return `NO team wins... `
//     }
// }
// console.log(koalaAvg, dolphinsAvg)
// const winner = checkWinner(dolphinsAvg, koalaAvg);
// console.log(winner)

// #FUNCTION DECLARATIONS

// function checkWinner (avgDolphins, avgKoala) {
//     if (avgDolphins >= 2 * avgKoala) {
//         return (`Dolphins Wins (${avgDolphins} vs. ${avgKoala})`)
//     } else if (avgKoala >= 2 * avgDolphins) {
//         return `Koalas Wins ( ${avgKoala} vs. ${avgDolphins})`
//     } else {
//         return `NO team wins... `
//     }
// }

// console.log(koalaAvg, dolphinsAvg)
// const winner = checkWinner(dolphinsAvg, koalaAvg);
// console.log(winner)


// #ARROW FUNCTION
const checkWinner = (avgDolphins, avgKoala) => {
    if (avgDolphins >= 2 * avgKoala) {
        return (`Dolphins Wins (${avgDolphins} vs. ${avgKoala})`)
    } else if (avgKoala >= 2 * avgDolphins) {
        return `Koalas Wins ( ${avgKoala} vs. ${avgDolphins})`
    } else {
        return `NO team wins... `
    }
}

console.log(checkWinner(dolphinsAvg, koalaAvg))


// #ARRAYS

const friends = ['Zarah', 'Olamide', 'Basith', 'Sultan', 'Abubakar'];
console.log(friends[3], friends[2], friends[0]);

friends.push('Abiodun');

console.log(friends[friends.length - 1]);

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[i];
    }
}

console.log(friends)

function calcAge(birthYear) {
    return 2024 - birthYear;
}

const birthYears = [1997, 2000, 2002, 2005, 2010];

const ageLawal = calcAge(birthYears[0])
const ageIdris = calcAge(birthYears[1])
const ageZainab = calcAge(birthYears[birthYears.length - 1])

console.log(ageLawal, ageIdris, ageZainab)

const ages = birthYears.map((years) => calcAge(years));
console.log(ages, ages.length)


function calcTip (bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill; 
    } else {
        tip = 0.2 * bill; 
    }
    return tip;
}

const bills = [125, 555, 44];
const tips = bills.map((tip) => calcTip(tip))
const newTips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = tips.reduce((total, tip) => total + tip, 0)
const totall = [bills[0] + newTips[0], bills[1] + newTips[1], bills[2] + newTips[2]]
console.log(tips)
console.log(newTips)
console.log(total)
console.log(totall) 

const cloud = {
    firstName: 'Idris',
    lastName: 'Musa',
    middleName: 'Olayinka',
    jobTitle: 'Web Developer',
    completedNysc: true,
    age: 2024 - 2000
};

const nameKey = 'Name';
const jobKey = 'Title';
cloud['first' + nameKey] = cloud.firstName;
cloud['middle' + nameKey] = cloud.middleName;
cloud['last' + nameKey] = cloud.lastName;

const interestedIn = prompt("What would you like to know about Cloud? Choose between firstName, lastName, age, job, and friends");

if (interestedIn === 'job') {
    console.log(cloud['job' + jobKey]);
} else if (interestedIn === 'name' || interestedIn === 'fullName') {
    const fullName = `${cloud['first' + nameKey]} ${cloud['middle' + nameKey]} ${cloud['last' + nameKey]}`;
    console.log(fullName)
}
else if (cloud[interestedIn]) {
    console.log(cloud[interestedIn])
} else {
    console.log("Invalid selection!!! Please select a valid option...")
}