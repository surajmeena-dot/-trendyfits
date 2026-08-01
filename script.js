const products=[
{name:'Buda Jeans Polo',price:'₹310',link:'https://ajiio.in/8CEqpia'},
{name:'John Players Shirt',price:'₹618',link:'https://ajiio.in/D8JLAG7'}
];
const wrap=document.getElementById('products');
products.forEach(p=>{
wrap.innerHTML+=`<div class="card"><h3>${p.name}</h3><p>${p.price}</p><a class="btn" href="${p.link}">Shop Now</a></div>`;
});