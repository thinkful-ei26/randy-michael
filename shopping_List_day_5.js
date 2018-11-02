'use strict';
const store =[
        {name:"lime",checked:false},
        {name:"banana",checked:false},
        {name:"apples",checked:false}
];

function renderShoppingList(){

    //render DOM
    console.log('`renderShopping` ran');

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


