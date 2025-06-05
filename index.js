 
    // Data with img property (use your own URLs if you want)
    //make the background of the body into silver
const elements = document.querySelectorAll('.greensKiosk')

elements.forEach(element => {
    element.style.backgroundColor = 'silver'
})


// make h1 for greensKiosk into green color
const greensKioskTitle = document.getElementById('title')
title.style.color = 'green';


//Make h3 to uppercase
const fruitsTitle =document.getElementById('fruitsTitle');
fruitsTitle.style.textTransform = "uppercase";


//Add new fruit

const findList = document.getElementById('fruitList')


const listItem = document.createElement('li')


const newNode = document.createTextNode('New Item');

listItem.append(newNode);

findList.appendChild(listItem)

listItem.textContent = "Avocados"



//Add new veggie
const findListTwo = document.getElementById('vegList')

const vegListItem = document.createElement('li')

const newVegNode = document.createTextNode('New Veggie')

vegListItem.append(newVegNode)

findListTwo.append(vegListItem)

vegListItem.textContent = "Cauliflower"







    var items = [
          {type:'fruit', name: 'Mangoes', inStock: true, img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg'},
    {type: 'fruit', name: 'Bananas', inStock: true, img: 'https://alphaveggies.com/wp-content/uploads/2023/06/banana-bunch-Copy-scaled.jpg'},
      {type:'fruit', name:'Mangoes', inStock:true, img:'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg'},
      {type:'fruit', name:'Bananas', inStock:false, img:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'},
      {type:'fruit', name:'Water Melons', inStock:true, img:'https://cdn.shopify.com/s/files/1/0442/8929/4491/files/Waternalon_cut_slices_SQ_shutterstock_619179680.jpg?v=1739356465'},
      {type:'fruit', name:'Oranges', inStock:true, img:'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg'},
      {type:'vegetable', name:'Onions', inStock:true, img:'https://dorchefarm.com/wp-content/uploads/2013/06/red-onions-2.jpg'},
      {type:'vegetable', name:'Tomatoes', inStock:false, img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'},
      {type:'vegetable', name:'Kales', inStock:true, img:'https://plantvillage-production-new.s3.amazonaws.com/image/2758/file/default-2c59a6a1bb9021f49d2ff94c41c96abf.jpg'},
      {type:'vegetable', name:'Cabbage', inStock:true, img:'https://hips.hearstapps.com/hmg-prod/images/cabbage-royalty-free-image-511789974-1546449748.jpg?crop=0.665xw:1.00xh;0.139xw,0&resize=640:*'}
    ];

    var cart = {};
    var filterType = 'all';
    var searchTerm = '';

    var controlsDiv = document.getElementById('controls');
    var cartSpan = document.createElement('span');
    cartSpan.id = 'cart';
    cartSpan.textContent = '🛒 Cart: ';
    var cartCountSpan = document.createElement('span');
    cartCountSpan.id = 'cartCount';
    cartCountSpan.textContent = '0';
    cartSpan.appendChild(cartCountSpan);
    controlsDiv.appendChild(cartSpan);

    var filterSelect = document.createElement('select');
    filterSelect.id = 'filterSelect';
    var optAll = document.createElement('option'); optAll.value = 'all'; optAll.textContent = 'All';
    var optFruits = document.createElement('option'); optFruits.value = 'fruits'; optFruits.textContent = 'Fruits';
    var optVeg = document.createElement('option'); optVeg.value = 'vegetables'; optVeg.textContent = 'Vegetables';
    filterSelect.appendChild(optAll); filterSelect.appendChild(optFruits); filterSelect.appendChild(optVeg);
    controlsDiv.appendChild(filterSelect);

    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.id = 'searchInput';
    controlsDiv.appendChild(searchInput);

    function renderLists() {
      var listsDiv = document.getElementById('lists');
      listsDiv.innerHTML = '';
      var filtered = items.filter(function(item){
        var matchesType = (filterType=='all')||(filterType=='fruits'&&item.type=='fruit')||(filterType=='vegetables'&&item.type=='vegetable');
        var matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      });

      var fruits = filtered.filter(i=>i.type=='fruit');
      if(fruits.length){
        var fH = document.createElement('h3'); fH.textContent = 'Fruits';
        listsDiv.appendChild(fH);
        var fList = document.createElement('ul');
        fruits.forEach(function(item){
          var li = makeListItem(item);
          fList.appendChild(li);
        });
        listsDiv.appendChild(fList);
      }
      var vegs = filtered.filter(i=>i.type=='vegetable');
      if(vegs.length){
        var vH = document.createElement('h3'); vH.textContent = 'Vegetables';
        listsDiv.appendChild(vH);
        var vList = document.createElement('ul');
        vegs.forEach(function(item){
          var li = makeListItem(item);
          vList.appendChild(li);
        });
        listsDiv.appendChild(vList);
      }
      if(!fruits.length && !vegs.length){
        var msg = document.createElement('p'); msg.textContent = 'No items found.';
        listsDiv.appendChild(msg);
      }
    }

    function makeListItem(item){
      var li = document.createElement('li');
      // Image
      var img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      img.width = 300; // Small size, feel free to change or remove
      li.appendChild(img);
      // Stock and Name
      var stock = document.createElement('span');
      stock.textContent = item.inStock ? ' (In stock) ' : ' (Out of stock) ';
      li.appendChild(stock);
      var name = document.createElement('span');
      name.textContent = item.name + ' ';
      li.appendChild(name);
      // Button
      var btn = document.createElement('button');
      btn.textContent = 'Add to cart';
      btn.setAttribute('data-name', item.name);
      if(!item.inStock){ btn.disabled = true;}
      btn.onclick = function(){
        if(!cart[item.name]) cart[item.name]=0;
        cart[item.name]++;
        updateCartCount();
      };
      li.appendChild(btn);
      return li;
    }

    function updateCartCount(){
      var count = Object.values(cart).reduce((a,b)=>a+b,0);
      cartCountSpan.textContent = count;
    }

    filterSelect.onchange = function(){ filterType = this.value; renderLists();}
    searchInput.oninput = function(){ searchTerm = this.value; renderLists();}

    // Order section
    var orderDiv = document.getElementById('orderSection');
    var orderBtn = document.createElement('button');
    orderBtn.textContent = 'Order';
    orderBtn.id = 'orderBtn';
    orderDiv.appendChild(orderBtn);

    var loaderSpan = document.createElement('span');
    loaderSpan.id = 'loader';
    loaderSpan.textContent = ' Loading...';
    loaderSpan.style.display = 'none';
    orderDiv.appendChild(loaderSpan);

    orderBtn.onclick = function(){
      if(Object.keys(cart).length===0){ alert('Cart is empty!'); return;}
      loaderSpan.style.display='inline';
      orderBtn.disabled = true;
      setTimeout(function(){
        loaderSpan.style.display='none';
        orderBtn.disabled = false;
        cart = {}; updateCartCount();
        showPopup();
      }, 1500);
    };

    function showPopup(){
      var pop = document.getElementById('popup');
      pop.innerHTML = '';
      pop.style.display = 'block';
      var msg = document.createElement('div');
      msg.textContent = 'Thanks for ordering!';
      pop.appendChild(msg);
      var closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.onclick = function(){pop.style.display='none';};
      pop.appendChild(closeBtn);
    }

    // Initial render
    renderLists();
    updateCartCount();

   