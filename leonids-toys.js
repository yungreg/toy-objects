// the below is (chapter 3 of leonid's toys). these objects each contain 4 key:value pairs, and there is an integer with ID tag, two strings, and a Boolean value in each one. I gotta rememebr to seopparate each of those key:value pairs with a comma.


// const gamingConsole = {
//     id: 1,
//     name: 'Sony Playstation',
//     manufacturer: 'Sony',
//     isToyBroken: false,
// }

// const basketball = {
//     id: 2,
//     name: 'Basketball',
//     manufacturer: 'Spalding',
//     isToyBroken: true,
// }

// const firetruck = {
//     id: 3,
//     name: 'Firetruck',
//     manufacturer: 'Tonka',
//     isToyBroken: false,
// }

// making leonid's toys an array below (chapter 4 of leonid's toys):

// const toysForLeonid = [ 
//     {
//         id: 1,
//         name: 'Sony Playstation',
//         manufacturer: 'Sony',
//         isToyBroken: false,
//     },
//     {
//         id: 2,
//         name: 'Basketball',
//         manufacturer: 'Spalding',
//         isToyBroken: true,
//     },
//     {
//         id: 3,
//         name: 'Firetruck',
//         manufacturer: 'Tonka',
//         isToyBroken: false,
//     }
// ]
// console.log(toysForLeonid)

// navigating an array section below (chapter 5 of leonid's toys). goal is to pull out the item's manufacturers

// const toysForLeonid = [ 
    // {
    //     id: 1,
    //     name: 'Sony Playstation',
    //     manufacturer: 'Sony',
    //     isToyBroken: false,
    // },
    // {
    //     id: 2,
    //     name: 'Basketball',
    //     manufacturer: 'Spalding',
    //     isToyBroken: true,
    // },
    // {
    //     id: 3,
    //     name: 'Firetruck',
    //     manufacturer: 'Tonka',
    //     isToyBroken: false,
    // }
// ]
// the for..of loop below contains dot notation.
// for (const toyManufacturer of toysForLeonid){ 
//     console.log(toyManufacturer.manufacturer) 
// }

// (chapter 6 of leonid's toys). Phone time.

// const phones = [
//     {
//         id: 1,
//         name: 'iPhone',
//         maker: "Apple",
//         operatingSystem: "iOS",
//         price: 900, 
//     }, //gotta remember the comma. Reminds me of Oxford Comma by Vampire Weekend.
//     {
//         id: 2,
//         name: 'Galaxy',
//         maker: 'Samsung',
//         operatingSystem: 'Android',
//         price: 600
//     }
// ]

// const pixel = {
//     id: 3,
//     name: 'Pixel',
//     maker: 'Google',
//     operatingSystem: 'Android',
//     price: 750
// }  
// phones.push(pixel) // these last 4 lines are the important part. I think i understand those callbacks now.

//commented this console log out so it wouldn't mewss with the nerw towys practice.
// for (const phone of phones){ 
//     console.log(phone.maker) 
// }

// practice: new toys

// const razer = {
//     id: 4,
//     name: 'Razer',
//     maker: 'Motorola',
//     operatingSystem: 'Android',
//     price: 1149
// }

// const blackberry = {
//     id: 5,
//     name: 'Blackberry',
//     maker: 'Nokia',
//     operatingSystem: 'Blackberry OS',
//     price: 549,
// }
// phones.push(blackberry)
// phones.push(razer)

// for (const phone of phones){ 
//     console.log(phone.maker) 
// }

// interpolation section Chapt 7 leonids toys

// const toysForLeonid = [ 
//     {
//         id: 1,
//         name: 'Sony Playstation',
//         manufacturer: 'Sony',
//         isToyBroken: false,
//     },
//     {
//         id: 2,
//         name: 'Basketball',
//         manufacturer: 'Spalding',
//         isToyBroken: true,
//     },
//     {
//         id: 3,
//         name: 'Firetruck',
//         manufacturer: 'Tonka',
//         isToyBroken: false,
//     }
// ]
// for (const toy of toysForLeonid){ 
//     console.log(`This ${toy.name} is my favorite! I'm so glad ${toy.manufacturer} made this!`) 
// }

// chapt 8: iteration w/ logic
// const toysForLeonid = [ 
    // {
    //     id: 1,
    //     name: 'Sony Playstation',
    //     manufacturer: 'Sony',
    //     isToyBroken: false,
    //     price: 400
    // },
    // {
    //     id: 2,
    //     name: 'Basketball',
    //     manufacturer: 'Spalding',
    //     isToyBroken: true,
    //     price: 50
    // },
    // {
    //     id: 3,
    //     name: 'Firetruck',
    //     manufacturer: 'Tonka',
    //     isToyBroken: false,
    //     price: 25
    // }
// ]
// for (const toy of toysForLeonid){
    // toy.price = toy.price + toy.price * .05; 
    // console.log(`This ${toy.name} from ${toy.manufacturer} now costs ${toy.price} after a 5% increase.`) 
// } 
// rememeber to add the name of the callback variable before the dot notation

// finding an item in an array, book 1, chapt 9.. self exercise. grabbed phone Array from chapter 6 exercise to use as template

const phones = [
    {
        id: 1,
        name: 'iPhone',
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900, 
    }, 
    {
        id: 2,
        name: 'Galaxy',
        maker: 'Samsung',
        operatingSystem: 'Android',
        price: 600
    }
]
for (const phone of phones){
    if (phone.price < 700) {
        console.log(`Damn! This ${phone.maker} ${phone.name} isn't as expensive as I thought! It's only ${phone.price}`)
    }
}