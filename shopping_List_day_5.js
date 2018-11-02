'use strict';
const store =[
        {name:"lime",checked:false},
        {name:"banana",checked:false},
        {name:"apples",checked:false},
        {name:"soup",checked:false}
];

function renderShoppingList(){

    //for each item in STORE generate a string template for <li>
    //item name rendered as inner text

    const toStringify = templateCreator(store).join("");
 

        //items index in store set as data attribute on the <li>

        //items checked state

    //make one string out of stuff

    //insert the string into the DOM 

    console.log(toStringify);


    //traverse to shopping list form
    

    //look for <ul>


    $('shopping-list js-shopping-list').html(toStringify);

    //render DOM
    console.log('`renderShopping` ran');

    

}


function templateCreator(store){

    const tempStore = [];

    for(let i = 0; i < store.length; i++){

        tempStore.push(
        `
        <li>
        <span class="shopping-item shopping-item__checked">${store[i][name]}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button> <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                </div>
        </li>;`);

        
        
    }

    console.log('hello');

    console.log(tempStore);

    return tempStore;

    

    }

   



function handleNewItemSubmit(){

    //handle when new items are added by user
    console.log('`handleNewItemSubmit` ran');

}

function handleItemCheckClicked() {

    //User clicks check button
    console.log('`handleItemCheckClicked` ran');

    
}

function handleDeleteitemClicked() {

    //User clicks delete item
    console.log('`handleDeleteItemClicked` ran');
    
}


//controller function run all other functions
function handleShoppingList(){

handleDeleteitemClicked();
handleItemCheckClicked();
handleNewItemSubmit();
renderShoppingList();

}

$(handleShoppingList);


