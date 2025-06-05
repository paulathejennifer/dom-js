const elements = document.querySelector('.greensKiosk')
    elements.forEach(element => {
        element.style.backGroundColro = 'silver'
    })


const greensKioskTitle = document.getElementById('title')
    title.style.color = 'green';


const fruitsTitleUpper = document.getElementById('fruitsTitle')
fruitsTitle.style.textTransform = 'uppercase';


const vegTitleUpper = document.getElementById('vegTitle')
vegTitle.style.textTransform = 'uppercase'


const list = document.getElementById('fruitList')

const listItem = document.createElement('li')


const newNode = document.createTextNode('New Item')

listItem.append(newNode)

list.appendChild(listItem)

listItem.textContent = 'Oranges';


const vegList = document.getElementById('vegList')

const vegListItem = document.createElement('li')


const vegNewNode = document.createTextNode('New Item')

vegListItem.append(vegNewNode)

vegList.appendChild(vegListItem)

vegListItem.textContent = 'Cabbage';

var items = [
    {type:'fruit', name: 'Mangoes', inStock: true, img: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p06hk0h6.jpg'},
    {type: 'fruit', name: 'Bananas', inStock: true, img: 'https://alphaveggies.com/wp-content/uploads/2023/06/banana-bunch-Copy-scaled.jpg'},
    {type:'fruit', name:'Water Melons', inStock:false, img:'https://cdn.shopify.com/s/files/1/0442/8929/4491/files/Waternalon_cut_slices_SQ_shutterstock_619179680.jpg?v=1739356465'},
    {type:'fruit', name:'Oranges', inStock:true, img:'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg'},
    {type: 'vegetable', name:'Onions', inStock:true, img: 'https://dorchefarm.com/wp-content/uploads/2013/06/red-onions-2.jpg'},
    {type: 'vegetable', name:'Tomatoes', inStock:true, img: 'https://bittmanproject.com/wp-content/uploads/engin-akyurt-HrCatSbULFY-unsplash-scaled.jpg'},
    {type: 'vegetable', name:'Kales', inStock:false, img: 'https://backyardlarder.co.uk/wp-content/uploads/2016/09/DSC_0644.jpg'},
    {type: 'vegetable', name: 'Cabbage', inStock:true, img: 'https://hips.hearstapps.com/hmg-prod/images/cabbage-royalty-free-image-511789974-1546449748.jpg?crop=0.665xw:1.00xh;0.139xw,0&resize=640:*'}


];
