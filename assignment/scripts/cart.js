console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!



// - Create a variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//          --- we want 'basket' and push the items into it
//   - return `true` indicating the item was added
 //       -- return true 

 const maxItems =5;

let basket = [];
//console.log(basket);

// 3. ( Stretch Goal) Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`


/** 
 * call function isFull
 * create an if statment 
 *  if 
 */
function addItem(item){
    basket.push(item)
     isFull(){
        //console.log(basket);
         return true;
    }
}

// orginal code from question 2. 
// function addItem(item){
//     basket.push(item)
//     //console.log(basket);
//     return true;
// }

// console.log ---- call function amd add the arguements 
//output--- we are  using the function to add the milk, egg and bead to the basket
// return true 
console.log(addItem(['milk','egg', 'bread']));

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

    function listItems(){
        for(let i = 0; i < basket.length; i++){
            console.log (basket[i]);
        }
    }

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array

    listItems(basket);

    function empty(){
        basket.length = 0;
    console.log(basket);

       }

// try while loop
// function empty(){
//     while(basket.length > 0){
//         basket.pop()
//         console.log(basket);
// }

// }

empty();

// 2.(stratch Goal) 
//Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items ---basket < maxitems.length
/**if statement:
 *  if basket < maxitems
 * return false
 */
//   - return `true` otherwise (equal or more than maxItems)

function isFull(){
    if( basket < maxItems ){
        console.log(basket);
    return false
    } else {
        return true
    }
}

console.log("is the basket full ", isFull());
// ### Stretch Goals 


// 1. Add a global `const` named `maxItems` and set it to 5.




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
