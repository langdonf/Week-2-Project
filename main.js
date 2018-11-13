// Cereal items
var cerealItems = [
	{
		img: './images/cereal/cheerios.jpg',
    name: 'Cheerios',
    price: 19.55
	},
	{
		img: './images/cereal/crunch.jpg',
    name: 'Crunch',
    price: 16.25
	},
	{
		img: './images/cereal/fruit-loops.jpg',
    name: 'Fruit Loops',
    price: 17.95
	},
	{
		img: './images/cereal/puffs.jpg',
    name: 'Puffs',
    price: 13.65
	},
	{
		img: './images/cereal/raisin-bran.jpg',
    name: 'Raisin Bran',
    price: 29.75
	}
];

// Juice items
var juiceItems = [
	{
		img: './images/juice/apple-juice.jpg',
    name: 'Apple Juice',
    price: 11.15
	},
	{
		img: './images/juice/carrot-juice.jpg',
    name: 'Carrot Juice',
    price: 15.25
	},
	{
		img: './images/juice/grape-juice.jpeg',
    name: 'Grape Juice',
    price: 14.55
	},
	{
		img: './images/juice/Orange-juice.jpg',
    name: 'Orange Juice',
    price: 119.15
	},
	{
		img: './images/juice/tomato-juice.jpg',
    name: 'Tomato Juice',
    price: 13.45
	}
];

// Candy items
var candyItems = [
	{
		img: './images/candy/kit-kat.jpg',
    name: 'Kit Kat Bar',
    price: 9.55
  },
  {
		img: './images/candy/twix.jpg',
    name: 'Twix Bar',
    price: 11.05
	},
	{
		img: './images/candy/m&ms.jpg',
    name: 'M&M\'s',
    price: 8.75
	},
	{
		img: './images/candy/skittles.jpg',
    name: 'Skittles',
    price: 10.35
	},
	{
		img: './images/candy/snickers.jpg',
    name: 'Snickers',
    price: 8.65,
	}
];

// Dairy items
var dairyItems = [
	{
		img: './images/dairy/Milk.jpg',
    name: 'Milk',
    price: 19.55
	},
	{
		img: './images/dairy/Eggs.jpg',
    name: 'Eggs',
    price: 16.25
	},
	{
		img: './images/dairy/Butter.jpg',
    name: 'Butter',
    price: 17.95
	},
	{
		img: './images/dairy/Cream.jpg',
    name: 'Cream',
    price: 13.65
	},
	{
		img: './images/dairy/Half-Half.jpg',
    name: 'Half-Half',
    price: 29.75
	}
];

// Meat items
var meatItems = [
	{
		img: './images/meat/bacon.jpg',
    name: 'Bacon',
    price: 19.55
	},
	{
		img: './images/meat/ribeye.jpg',
    name: 'Ribeye',
    price: 16.25
	},
	{
		img: './images/meat/hot-dogs.jpg',
    name: 'Hot Dogs',
    price: 17.95
	},
	{
		img: './images/meat/sausage.jpg',
    name: 'Sausage',
    price: 13.65
	},
	{
		img: './images/meat/ground-beef.jpg',
    name: 'Ground Beef',
    price: 29.75
	}
];

var total = 0;

////////////////////Adds items to cart///////////////////////////
addToCart = function(shoppingItem, price){
  var list = document.createElement('li');
  var item = `${shoppingItem} ..................... ${price}`;
  list.className = "shopping-item";
  list.innerHTML = item;
  document.querySelector('#cart ul').appendChild(list);
  /* Gets price, adds to current total, and appends to cart*/
  total = total + parseFloat(price);
  /* fixes weird bug where total would have like 20 decimal places */
  total = Math.round(100*total)/100;
  var totalSum = `Total = $${total}`;
  var totalItem = document.createElement('P');
  totalItem.className = "sum";
  totalItem.innerHTML = totalSum;
  document.getElementById('totalArea').innerHTML = '';
  document.querySelector('#totalArea').appendChild(totalItem);
}


////////////////////////Clear Cart///////////////////////////

clearCart = function(){
  document.getElementById('totalArea').innerHTML = '';
  document.querySelector('#cart ul').innerHTML = '';
};

document.getElementById('clear').addEventListener('click', clearCart);

//////////////////Populate Shopping Area////////////////////

populateCandy = function(){
  document.getElementById('items').innerHTML = '';
  for (let i = 0; i < candyItems.length; i++){
    var card = `<div class="card"><a href="#">
                <img src=${candyItems[i].img} alt="" style="width:100%">
                  <div class="container">
                    <h4>${candyItems[i].name}</h4>
                    <h5>${candyItems[i].price}</h5>
                  </div></a>
                </div>`;
    var div = document.createElement('P');
    div.innerHTML = card;
    document.getElementById('items').appendChild(div);
  };
}

populateCereal = function(){
  document.getElementById('items').innerHTML = ''
  for (let i = 0; i < cerealItems.length; i++){
    var card = `<div class="card"><a href="#">
                <img src=${cerealItems[i].img} alt="" style="width:100%">
                  <div class="container">
                    <h4>${cerealItems[i].name}</h4>
                    <h5>${cerealItems[i].price}</h5></a>
                  </div>
                </div>`
    var div = document.createElement('P');
    div.innerHTML = card;
    document.getElementById('items').appendChild(div); 
  };
}

populateJuice = function(){
  document.getElementById('items').innerHTML = ''
  for (let i = 0; i < juiceItems.length; i++){
    var card = `<div class="card"><a href="#">
                <img src=${juiceItems[i].img} alt="" style="width:100%">
                <div class="container">
                  <h4>${juiceItems[i].name}</h4>
                  <h5>${juiceItems[i].price}</h5></a>
                </div>
                </div>`
    var div = document.createElement('P');
    div.innerHTML = card;
    document.getElementById('items').appendChild(div); 
  };
}

populateMeat = function(){
  document.getElementById('items').innerHTML = '';
  for (let i = 0; i < meatItems.length; i++){
    var card = `<div class="card"><a href="#">
                <img src=${meatItems[i].img} alt="" style="width:100%">
                  <div class="container">
                    <h4>${meatItems[i].name}</h4>
                    <h5>${meatItems[i].price}</h5>
                  </div></a>
                </div>`;
    var div = document.createElement('P');
    div.innerHTML = card;
    document.getElementById('items').appendChild(div);
  };
}

populateDairy = function(){
  document.getElementById('items').innerHTML = '';
  for (let i = 0; i < dairyItems.length; i++){
    var card = `<div class="card"><a href="#">
                <img src=${dairyItems[i].img} alt="" style="width:100%">
                  <div class="container">
                    <h4>${dairyItems[i].name}</h4>
                    <h5>${dairyItems[i].price}</h5>
                  </div></a>
                </div>`;
    var div = document.createElement('P');
    div.innerHTML = card;
    document.getElementById('items').appendChild(div);
  };
}

///////////Grabs Product Information//////////////
$('#items').on('click', '.card', function() {
  var itemName = $(this).find('h4').text();
  var itemPrice = $(this).find('h5').text();
  addToCart(itemName, itemPrice);
  }
);

//////////////////Adds Event Listeners///////////
document.getElementById('juice').addEventListener('click', populateJuice);
document.getElementById('cereal').addEventListener('click', populateCereal);
document.getElementById('candy').addEventListener('click', populateCandy);
document.getElementById('dairy').addEventListener('click', populateDairy);
document.getElementById('meat').addEventListener('click', populateMeat);