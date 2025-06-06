
document.body.style.background = 'linear-gradient(135deg, #e0e0e0 0%, #fafafa 100%)';
document.body.style.fontFamily = "'Segoe UI', Arial, sans-serif";

const elements = document.querySelectorAll('.greensKiosk');
elements.forEach(element => {
    element.style.backgroundColor = 'rgba(192,192,192,0.7)';
    element.style.borderRadius = '18px';
    element.style.boxShadow = '0 4px 16px 0 rgba(60,80,60,0.10)';
    element.style.padding = '32px 20px';
    element.style.margin = '32px auto';
    element.style.maxWidth = '800px';
});


const greensKioskTitle = document.getElementById('title');
const logoImg = document.createElement('img');
logoImg.src = 'images/kalelogo-removebg-preview.png'
logoImg.alt = '';
logoImg.style.verticalAlign='middle';
logoImg.style.width = '250px';
logoImg.style.height = 'auto';
logoImg.style.display = 'inline-block'
greensKioskTitle.appendChild(logoImg)
greensKioskTitle.style.color = '#006400';
greensKioskTitle.style.textAlign = 'center'
greensKioskTitle.style.letterSpacing = '4px';
greensKioskTitle.style.lineHeight = '0.1'
greensKioskTitle.style.fontWeight = 'bold';
greensKioskTitle.style.fontSize = '3.8rem';
greensKioskTitle.style.textShadow = '1px 1px 12px #c4ffc8';

const fruitsTitle = document.getElementById('fruitsTitle');
fruitsTitle.style.textTransform = "uppercase";
fruitsTitle.style.letterSpacing = '2px';
fruitsTitle.style.color = '#15803d';


allH3.forEach(h3 => {
    h3.style.textTransform = "uppercase";
    h3.style.letterSpacing = '2px';
    h3.style.color = '#15803d';
    h3.style.marginTop = '32px';
});




var items = [
    {type:'fruit', name:'Mangoes', inStock:true, img:'https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg', price: 2.50},
    {type:'fruit', name:'Bananas', inStock:true, img:'https://alphaveggies.com/wp-content/uploads/2023/06/banana-bunch-Copy-scaled.jpg', price: 1.20},
    {type:'fruit', name:'Water Melons', inStock:true, img:'https://cdn.shopify.com/s/files/1/0442/8929/4491/files/Waternalon_cut_slices_SQ_shutterstock_619179680.jpg?v=1739356465', price: 3.00},
    {type:'fruit', name:'Oranges', inStock:true, img:'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg', price: 2.00},
    {type:'vegetable', name:'Onions', inStock:true, img:'https://dorchefarm.com/wp-content/uploads/2013/06/red-onions-2.jpg', price: 1.80},
    {type:'vegetable', name:'Tomatoes', inStock:false, img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', price: 2.10},
    {type:'vegetable', name:'Kales', inStock:true, img:'https://plantvillage-production-new.s3.amazonaws.com/image/2758/file/default-2c59a6a1bb9021f49d2ff94c41c96abf.jpg', price: 2.70},
    {type:'vegetable', name:'Cabbages', inStock:true, img:'https://hips.hearstapps.com/hmg-prod/images/cabbage-royalty-free-image-511789974-1546449748.jpg?crop=0.665xw:1.00xh;0.139xw,0&resize=640:*', price: 2.20}
];

var cart = {};
var filterType = 'all';
var searchTerm = '';

var controlsDiv = document.getElementById('controls');
controlsDiv.style.display = "flex";
controlsDiv.style.justifyContent = "space-between";
controlsDiv.style.alignItems = "center";
controlsDiv.style.background = "rgba(255,255,255,0.7)";
controlsDiv.style.borderRadius = "12px";
controlsDiv.style.padding = "10px 24px";
controlsDiv.style.marginBottom = "24px";
controlsDiv.style.boxShadow = "0 2px 8px 0 rgba(60,80,60,0.10)";

var cartSpan = document.createElement('span');
cartSpan.id = 'cart';
cartSpan.textContent = '🛒 Cart: ';
cartSpan.style.fontWeight = "bold";
cartSpan.style.fontSize = "1.25rem";
var cartCountSpan = document.createElement('span');
cartCountSpan.id = 'cartCount';
cartCountSpan.textContent = '0';
cartCountSpan.style.color = "#d97706";
cartSpan.appendChild(cartCountSpan);
controlsDiv.appendChild(cartSpan);

var filterSelect = document.createElement('select');
filterSelect.id = 'filterSelect';
filterSelect.style.margin = "0 10px";
filterSelect.style.padding = "4px 12px";
filterSelect.style.borderRadius = "6px";
var optAll = document.createElement('option'); optAll.value = 'all'; optAll.textContent = 'All';
var optFruits = document.createElement('option'); optFruits.value = 'fruits'; optFruits.textContent = 'Fruits';
var optVeg = document.createElement('option'); optVeg.value = 'vegetables'; optVeg.textContent = 'Vegetables';
filterSelect.appendChild(optAll); filterSelect.appendChild(optFruits); filterSelect.appendChild(optVeg);
controlsDiv.appendChild(filterSelect);

var searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.id = 'searchInput';
searchInput.style.border = "1px solid #aaa";
searchInput.style.borderRadius = "6px";
searchInput.style.padding = "4px 12px";
controlsDiv.appendChild(searchInput);

function renderLists() {
    var listsDiv = document.getElementById('lists');
    listsDiv.innerHTML = '';
    listsDiv.style.display = "flex";
    listsDiv.style.flexDirection = "column";
    listsDiv.style.gap = "30px";
    listsDiv.style.alignItems = "center";

    var filtered = items.filter(function(item){
        var matchesType = (filterType=='all')||(filterType=='fruits'&&item.type=='fruit')||(filterType=='vegetables'&&item.type=='vegetable');
        var matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });


    var fruits = filtered.filter(i=>i.type=='fruit');
    if(fruits.length){
        var fruitsHeading = document.createElement('h3'); 
        fruitsHeading.textContent = 'Fruits';
        fruitsHeading.textContent = fruitsHeading.textContent.toUpperCase()
        listsDiv.appendChild(fruitsHeading);
        var fList = document.createElement('ul');
        fList.style.display = "flex";
        fList.style.flexWrap = "wrap";
        fList.style.listStyle = "none";
        fList.style.gap = "24px";
        fList.style.justifyContent = "center";
        fruits.forEach(function(item){
            var li = makeListItem(item);
            fList.appendChild(li);
        });
        listsDiv.appendChild(fList);
    }
    var vegs = filtered.filter(i=>i.type=='vegetable');
    if(vegs.length){
        var vegHeading = document.createElement('h3'); vegHeading.textContent = 'Vegetables';
        vegHeading.textContent = vegHeading.textContent.toUpperCase()
        listsDiv.appendChild(vegHeading);
        var vList = document.createElement('ul');
        vList.style.display = "flex";
        vList.style.flexWrap = "wrap";
        vList.style.listStyle = "none";
        vList.style.gap = "24px";
        vList.style.justifyContent = "center";
        vegs.forEach(function(item){
            var li = makeListItem(item);
            vList.appendChild(li);
        });
        listsDiv.appendChild(vList);
    }
    if(!fruits.length && !vegs.length){
        var msg = document.createElement('p'); msg.textContent = 'No items found.';
        msg.style.color = "#f87171";
        msg.style.fontWeight = "bold";
        listsDiv.appendChild(msg);
    }
}

function makeListItem(item){
    var li = document.createElement('li');
    li.style.background = "#fff";
    li.style.borderRadius = "16px";
    li.style.boxShadow = "0 4px 20px 0 rgba(60,120,60,0.11)";
    li.style.padding = "18px";
    li.style.width = "340px";
    li.style.minHeight = "400px";
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.alignItems = "center";
    li.style.position = "relative";

    var img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.width = 300;
    img.height = 300;
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    img.style.boxShadow = "0 2px 8px #c8eec8";
    li.appendChild(img);

    var name = document.createElement('div');
    name.textContent = item.name;
    name.style.fontWeight = "bold";
    name.style.fontSize = "1.3rem";
    name.style.color = "#166534";
    name.style.margin = "12px 0 2px 0";
    li.appendChild(name);

    if(item.inStock){
        var price = document.createElement('div');
        price.textContent = "Price: $" + item.price.toFixed(2);
        price.style.fontWeight = "600";
        price.style.fontSize = "1.1rem";
        price.style.color = "#1e293b";
        li.appendChild(price);
    }


    var stock = document.createElement('div');
    stock.textContent = item.inStock ? 'In stock' : 'Out of stock';
    stock.style.color = item.inStock ? "#15803d" : "#f87171";
    stock.style.marginBottom = "6px";
    stock.style.fontWeight = "600";
    li.appendChild(stock);


    var btn = document.createElement('button');
    btn.textContent = 'Add to cart';
    btn.setAttribute('data-name', item.name);
    btn.style.marginTop = "auto";
    btn.style.padding = "8px 20px";
    btn.style.borderRadius = "8px";
    btn.style.background = item.inStock ? "#22c55e" : "#ccc";
    btn.style.color = "#fff";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "1rem";
    btn.style.cursor = item.inStock ? "pointer" : "not-allowed";
    btn.style.boxShadow = "0 2px 8px #c8eec8";
    if(!item.inStock){ btn.disabled = true;}
    btn.onclick = function(){
        if(!cart[item.name]) cart[item.name]=0;
        cart[item.name]++;
        updateCartCount();
        btn.textContent = "Added!";
        setTimeout(()=>{btn.textContent = "Add to cart ";}, 900);
    };
    li.appendChild(btn);
    return li;
}

function updateCartCount(){
    var count = Object.values(cart).reduce((a,b)=>a+b,0);
    var cartCountSpan = document.getElementById('cartCount');
    cartCountSpan.textContent = count;
}

filterSelect.onchange = function(){ filterType = this.value; renderLists();}
searchInput.oninput = function(){ searchTerm = this.value; renderLists();}


var orderDiv = document.getElementById('orderSection');
orderDiv.style.marginTop = "38px";
orderDiv.style.display = "flex";
orderDiv.style.justifyContent = "center";
orderDiv.style.alignItems = "center";
orderDiv.style.flexDirection = "column";
orderDiv.style.gap = "12px";

var orderBtn = document.createElement('button');
orderBtn.textContent = 'Order';
orderBtn.id = 'orderBtn';
orderBtn.style.marginLeft = '43px'
orderBtn.style.padding = "10px 28px";
orderBtn.style.borderRadius = "8px";
orderBtn.style.background = "#22c55e";
orderBtn.style.color = "#fff";
orderBtn.style.fontWeight = "bold";
orderBtn.style.fontSize = "1.2rem";
orderBtn.style.cursor = "pointer";
orderBtn.style.boxShadow = "0 2px 8px #c8eec8";
orderDiv.appendChild(orderBtn);

var loaderSpan = document.createElement('span');
loaderSpan.id = 'loader';
loaderSpan.textContent = ' Loading...';
loaderSpan.style.display = 'none';
loaderSpan.style.color = "#166534";
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
    pop.style.position = "fixed";
    pop.style.top = "50%";
    pop.style.left = "50%";
    pop.style.transform = "translate(-50%, -50%)";
    pop.style.background = "#fff";
    pop.style.borderRadius = "18px";
    pop.style.boxShadow = "0 4px 32px 0 rgba(60,80,60,0.21)";
    pop.style.padding = "44px 32px";
    pop.style.fontSize = "1.4rem";
    pop.style.fontWeight = "bold";
    pop.style.color = "#15803d";
    pop.style.zIndex = 1000;

    var msg = document.createElement('div');
    msg.textContent = 'Thanks for ordering!';
    pop.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.marginTop = "18px";
    closeBtn.style.padding = "8px 20px";
    closeBtn.style.borderRadius = "8px";
    closeBtn.style.background = "#166534";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.fontSize = "1rem";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function(){pop.style.display='none';};
    pop.appendChild(closeBtn);
}

renderLists();
updateCartCount();


//media queries for the green kiosk
function applyResponsivenessGreensKiosk(){
const isMobile = window.innerWidth < 700

document.body.style.fontSize = isMobile ? '1.2rem': '1rem';

greensKioskTitle.style.fontSize = isMobile ? '2.1rem': '3.8rem';
greensKioskTitle.style.padding = isMobile ? '8px 0': '0';

logoImg.style.width = isMobile ? '110px':'250px';

controlsDiv.style.flexDirection = isMobile ? 'column': "row";
controlsDiv.style.gap = isMobile ? '10px': '18px';
controlsDiv.style.fontSize = isMobile ? '1.1rem': '1.25rem';

const listsDiv = document.getElementById('lists');
if(listsDiv){
    listsDiv.style.gap = isMobile ? '16px': '30px';
}
const allItemCards = document.querySelectorAll('#lists li');
allItemCards.forEach(li => {
    li.style.width = isMobile ? '92vw' : '340px';
    li.style.minHeight = isMobile ? 'auto' : '400px';
    li.style.padding = isMobile ? '10px' : '18px';

});


const allImgs = document.querySelectorAll('#lists li img');
allImgs.forEach(img => {
    img.style.width = isMobile ? '87vw' : '300px';
    img.style.height = isMobile ? 'auto' : '300px';
    img.style.maxWidth = isMobile ? '320px' : '300px';

});

const allBtns = document.querySelectorAll('#lists li button');
allBtns.forEach(btn => {
    btn.style.fontSize = isMobile ? '1.1rem' : '1rem';
    btn.style.padding = isMobile ? '12px 20px': '8px 20px';



});
document.body.style.background = 'linear-gradient(135deg, #e0e0e0 0%, #fafafa 100%)';
document.body.style.fontFamily = "'Segoe UI', Arial, sans-serif";

const elements = document.querySelectorAll('.greensKiosk');
elements.forEach(element => {
    element.style.backgroundColor = 'rgba(192,192,192,0.7)';
    element.style.borderRadius = '18px';
    element.style.boxShadow = '0 4px 16px 0 rgba(60,80,60,0.10)';
    element.style.padding = '32px 20px';
    element.style.margin = '32px auto';
    element.style.maxWidth = '800px';
});


const greensKioskTitle = document.getElementById('title');
const logoImg = document.createElement('img');
logoImg.src = 'images/kalelogo-removebg-preview.png'
logoImg.alt = '';
logoImg.style.verticalAlign='middle';
logoImg.style.width = '250px';
logoImg.style.height = 'auto';
logoImg.style.display = 'inline-block'
greensKioskTitle.appendChild(logoImg)
greensKioskTitle.style.color = '#006400';
greensKioskTitle.style.textAlign = 'center'
greensKioskTitle.style.letterSpacing = '4px';
greensKioskTitle.style.lineHeight = '0.1'
greensKioskTitle.style.fontWeight = 'bold';
greensKioskTitle.style.fontSize = '3.8rem';
greensKioskTitle.style.textShadow = '1px 1px 12px #c4ffc8';

const fruitsTitle = document.getElementById('fruitsTitle');
fruitsTitle.style.textTransform = "uppercase";
fruitsTitle.style.letterSpacing = '2px';
fruitsTitle.style.color = '#15803d';

allH3.forEach(h3 => {
    h3.style.textTransform = "uppercase";
    h3.style.letterSpacing = '2px';
    h3.style.color = '#15803d';
    h3.style.marginTop = '32px';
});




var items = [
    {type:'fruit', name:'Mangoes', inStock:true, img:'https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg', price: 2.50},
    {type:'fruit', name:'Bananas', inStock:true, img:'https://alphaveggies.com/wp-content/uploads/2023/06/banana-bunch-Copy-scaled.jpg', price: 1.20},
    {type:'fruit', name:'Water Melons', inStock:true, img:'https://cdn.shopify.com/s/files/1/0442/8929/4491/files/Waternalon_cut_slices_SQ_shutterstock_619179680.jpg?v=1739356465', price: 3.00},
    {type:'fruit', name:'Oranges', inStock:true, img:'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg', price: 2.00},
    {type:'vegetable', name:'Onions', inStock:true, img:'https://dorchefarm.com/wp-content/uploads/2013/06/red-onions-2.jpg', price: 1.80},
    {type:'vegetable', name:'Tomatoes', inStock:false, img:'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', price: 2.10},
    {type:'vegetable', name:'Kales', inStock:true, img:'https://plantvillage-production-new.s3.amazonaws.com/image/2758/file/default-2c59a6a1bb9021f49d2ff94c41c96abf.jpg', price: 2.70},
    {type:'vegetable', name:'Cabbages', inStock:true, img:'https://hips.hearstapps.com/hmg-prod/images/cabbage-royalty-free-image-511789974-1546449748.jpg?crop=0.665xw:1.00xh;0.139xw,0&resize=640:*', price: 2.20}
];

var cart = {};
var filterType = 'all';
var searchTerm = '';

var controlsDiv = document.getElementById('controls');
controlsDiv.style.display = "flex";
controlsDiv.style.justifyContent = "space-between";
controlsDiv.style.alignItems = "center";
controlsDiv.style.background = "rgba(255,255,255,0.7)";
controlsDiv.style.borderRadius = "12px";
controlsDiv.style.padding = "10px 24px";
controlsDiv.style.marginBottom = "24px";
controlsDiv.style.boxShadow = "0 2px 8px 0 rgba(60,80,60,0.10)";

var cartSpan = document.createElement('span');
cartSpan.id = 'cart';
cartSpan.textContent = '🛒 Cart: ';
cartSpan.style.fontWeight = "bold";
cartSpan.style.fontSize = "1.25rem";
var cartCountSpan = document.createElement('span');
cartCountSpan.id = 'cartCount';
cartCountSpan.textContent = '0';
cartCountSpan.style.color = "#d97706";
cartSpan.appendChild(cartCountSpan);
controlsDiv.appendChild(cartSpan);

var filterSelect = document.createElement('select');
filterSelect.id = 'filterSelect';
filterSelect.style.margin = "0 10px";
filterSelect.style.padding = "4px 12px";
filterSelect.style.borderRadius = "6px";
var optAll = document.createElement('option'); optAll.value = 'all'; optAll.textContent = 'All';
var optFruits = document.createElement('option'); optFruits.value = 'fruits'; optFruits.textContent = 'Fruits';
var optVeg = document.createElement('option'); optVeg.value = 'vegetables'; optVeg.textContent = 'Vegetables';
filterSelect.appendChild(optAll); filterSelect.appendChild(optFruits); filterSelect.appendChild(optVeg);
controlsDiv.appendChild(filterSelect);

var searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';
searchInput.id = 'searchInput';
searchInput.style.border = "1px solid #aaa";
searchInput.style.borderRadius = "6px";
searchInput.style.padding = "4px 12px";
controlsDiv.appendChild(searchInput);

function renderLists() {
    var listsDiv = document.getElementById('lists');
    listsDiv.innerHTML = '';
    listsDiv.style.display = "flex";
    listsDiv.style.flexDirection = "column";
    listsDiv.style.gap = "30px";
    listsDiv.style.alignItems = "center";

    var filtered = items.filter(function(item){
        var matchesType = (filterType=='all')||(filterType=='fruits'&&item.type=='fruit')||(filterType=='vegetables'&&item.type=='vegetable');
        var matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });


    var fruits = filtered.filter(i=>i.type=='fruit');
    if(fruits.length){
        var fruitsHeading = document.createElement('h3'); 
        fruitsHeading.textContent = 'Fruits';
        fruitsHeading.textContent = fruitsHeading.textContent.toUpperCase()
        listsDiv.appendChild(fruitsHeading);
        var fList = document.createElement('ul');
        fList.style.display = "flex";
        fList.style.flexWrap = "wrap";
        fList.style.listStyle = "none";
        fList.style.gap = "24px";
        fList.style.justifyContent = "center";
        fruits.forEach(function(item){
            var li = makeListItem(item);
            fList.appendChild(li);
        });
        listsDiv.appendChild(fList);
    }
    var vegs = filtered.filter(i=>i.type=='vegetable');
    if(vegs.length){
        var vegHeading = document.createElement('h3'); vegHeading.textContent = 'Vegetables';
        vegHeading.textContent = vegHeading.textContent.toUpperCase()
        listsDiv.appendChild(vegHeading);
        var vList = document.createElement('ul');
        vList.style.display = "flex";
        vList.style.flexWrap = "wrap";
        vList.style.listStyle = "none";
        vList.style.gap = "24px";
        vList.style.justifyContent = "center";
        vegs.forEach(function(item){
            var li = makeListItem(item);
            vList.appendChild(li);
        });
        listsDiv.appendChild(vList);
    }
    if(!fruits.length && !vegs.length){
        var msg = document.createElement('p'); msg.textContent = 'No items found.';
        msg.style.color = "#f87171";
        msg.style.fontWeight = "bold";
        listsDiv.appendChild(msg);
    }
}

function makeListItem(item){
    var li = document.createElement('li');
    li.style.background = "#fff";
    li.style.borderRadius = "16px";
    li.style.boxShadow = "0 4px 20px 0 rgba(60,120,60,0.11)";
    li.style.padding = "18px";
    li.style.width = "340px";
    li.style.minHeight = "400px";
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.alignItems = "center";
    li.style.position = "relative";

    var img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.width = 300;
    img.height = 300;
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    img.style.boxShadow = "0 2px 8px #c8eec8";
    li.appendChild(img);

    var name = document.createElement('div');
    name.textContent = item.name;
    name.style.fontWeight = "bold";
    name.style.fontSize = "1.3rem";
    name.style.color = "#166534";
    name.style.margin = "12px 0 2px 0";
    li.appendChild(name);

    if(item.inStock){
        var price = document.createElement('div');
        price.textContent = "Price: $" + item.price.toFixed(2);
        price.style.fontWeight = "600";
        price.style.fontSize = "1.1rem";
        price.style.color = "#1e293b";
        li.appendChild(price);
    }


    var stock = document.createElement('div');
    stock.textContent = item.inStock ? 'In stock' : 'Out of stock';
    stock.style.color = item.inStock ? "#15803d" : "#f87171";
    stock.style.marginBottom = "6px";
    stock.style.fontWeight = "600";
    li.appendChild(stock);


    var btn = document.createElement('button');
    btn.textContent = 'Add to cart';
    btn.setAttribute('data-name', item.name);
    btn.style.marginTop = "auto";
    btn.style.padding = "8px 20px";
    btn.style.borderRadius = "8px";
    btn.style.background = item.inStock ? "#22c55e" : "#ccc";
    btn.style.color = "#fff";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "1rem";
    btn.style.cursor = item.inStock ? "pointer" : "not-allowed";
    btn.style.boxShadow = "0 2px 8px #c8eec8";
    if(!item.inStock){ btn.disabled = true;}
    btn.onclick = function(){
        if(!cart[item.name]) cart[item.name]=0;
        cart[item.name]++;
        updateCartCount();
        btn.textContent = "Added!";
        setTimeout(()=>{btn.textContent = "Add to cart ";}, 900);
    };
    li.appendChild(btn);
    return li;
}

function updateCartCount(){
    var count = Object.values(cart).reduce((a,b)=>a+b,0);
    var cartCountSpan = document.getElementById('cartCount');
    cartCountSpan.textContent = count;
}

filterSelect.onchange = function(){ filterType = this.value; renderLists();}
searchInput.oninput = function(){ searchTerm = this.value; renderLists();}


var orderDiv = document.getElementById('orderSection');
orderDiv.style.marginTop = "38px";
orderDiv.style.display = "flex";
orderDiv.style.justifyContent = "center";
orderDiv.style.alignItems = "center";
orderDiv.style.flexDirection = "column";
orderDiv.style.gap = "12px";

var orderBtn = document.createElement('button');
orderBtn.textContent = 'Order';
orderBtn.id = 'orderBtn';
orderBtn.style.marginLeft = '43px'
orderBtn.style.padding = "10px 28px";
orderBtn.style.borderRadius = "8px";
orderBtn.style.background = "#22c55e";
orderBtn.style.color = "#fff";
orderBtn.style.fontWeight = "bold";
orderBtn.style.fontSize = "1.2rem";
orderBtn.style.cursor = "pointer";
orderBtn.style.boxShadow = "0 2px 8px #c8eec8";
orderDiv.appendChild(orderBtn);

var loaderSpan = document.createElement('span');
loaderSpan.id = 'loader';
loaderSpan.textContent = ' Loading...';
loaderSpan.style.display = 'none';
loaderSpan.style.color = "#166534";
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
    pop.style.position = "fixed";
    pop.style.top = "50%";
    pop.style.left = "50%";
    pop.style.transform = "translate(-50%, -50%)";
    pop.style.background = "#fff";
    pop.style.borderRadius = "18px";
    pop.style.boxShadow = "0 4px 32px 0 rgba(60,80,60,0.21)";
    pop.style.padding = "44px 32px";
    pop.style.fontSize = "1.4rem";
    pop.style.fontWeight = "bold";
    pop.style.color = "#15803d";
    pop.style.zIndex = 1000;

    var msg = document.createElement('div');
    msg.textContent = 'Thanks for ordering!';
    pop.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.marginTop = "18px";
    closeBtn.style.padding = "8px 20px";
    closeBtn.style.borderRadius = "8px";
    closeBtn.style.background = "#166534";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.fontSize = "1rem";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function(){pop.style.display='none';};
    pop.appendChild(closeBtn);
}

renderLists();
updateCartCount();


//media queries for the green kiosk
function applyResponsivenessGreensKiosk(){
const isMobile = window.innerWidth < 700

document.body.style.fontSize = isMobile ? '1.2rem': '1rem';

greensKioskTitle.style.fontSize = isMobile ? '2.1rem': '3.8rem';
greensKioskTitle.style.padding = isMobile ? '8px 0': '0';

logoImg.style.width = isMobile ? '110px':'250px';

controlsDiv.style.flexDirection = isMobile ? 'column': "row";
controlsDiv.style.gap = isMobile ? '10px': '18px';
controlsDiv.style.fontSize = isMobile ? '1.1rem': '1.25rem';

const listsDiv = document.getElementById('lists');
if(listsDiv){
    listsDiv.style.gap = isMobile ? '16px': '30px';
}
const allItemCards = document.querySelectorAll('#lists li');
allItemCards.forEach(li => {
    li.style.width = isMobile ? '92vw' : '340px';
    li.style.minHeight = isMobile ? 'auto' : '400px';
    li.style.padding = isMobile ? '10px' : '18px';

});


const allImgs = document.querySelectorAll('#lists li img');
allImgs.forEach(img => {
    img.style.width = isMobile ? '87vw' : '300px';
    img.style.height = isMobile ? 'auto' : '300px';
    img.style.maxWidth = isMobile ? '320px' : '300px';

});

const allBtns = document.querySelectorAll('#lists li button');
allBtns.forEach(btn => {
    btn.style.fontSize = isMobile ? '1.1rem' : '1rem';
    btn.style.padding = isMobile ? '12px 20px': '8px 20px';



});



allH3.forEach(h3 => {
    h3.style.fontSize = isMobile ? '1.4rem': '2rem';
    h3.style.marginTop = isMobile ? '20px' : '32px';
});
}

applyResponsivenessGreensKiosk();


window.addEventListener('resize', applyResponsivenessGreensKiosk);


console.log(document.getElementById('lists'));

allH3 = document.querySelectorAll('h3')
allH3.forEach(h3 => {
    h3.style.fontSize = isMobile ? '1.4rem': '2rem';
    h3.style.marginTop = isMobile ? '20px' : '32px';
});
}

applyResponsivenessGreensKiosk();


window.addEventListener('resize', applyResponsivenessGreensKiosk);


console.log(document.getElementById('lists'));
