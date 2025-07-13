/* ─── Product catalogue (60 items, 20 each) ─────── */
const products = [
  /* —— Groceries —— */
  {id:  1,cat:'groceries',name:'Basmati Rice 5 kg',      price:649, img:'https://media.istockphoto.com/id/671580286/photo/rice.jpg?s=1024x1024&w=is&k=20&c=QrIMkDQIZYoBKQRTu4antAMxGSyKmHa14oYiO5S0OqE='},
  {id:  2,cat:'groceries',name:'Organic Wheat Flour 1 kg',price: 85, img:'https://images.pexels.com/photos/8107991/pexels-photo-8107991.jpeg?cs=srgb&dl=pexels-mart-production-8107991.jpg&fm=jpg&_gl=1*am4pq8*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDA5MjYkajU5JGwwJGgw'},
  {id:  3,cat:'groceries',name:'Almonds 500 g',          price:399, img:'https://images.pexels.com/photos/3997459/pexels-photo-3997459.jpeg?cs=srgb&dl=pexels-aksbykas-3997459.jpg&fm=jpg&_gl=1*13eieh5*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDEwOTckajQ0JGwwJGgw'},
  {id:  4,cat:'groceries',name:'Honey 250 g',            price:199, img:'https://images.pexels.com/photos/6422025/pexels-photo-6422025.jpeg?cs=srgb&dl=pexels-roman-odintsov-6422025.jpg&fm=jpg&_gl=1*1nz5v3x*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDExODkkajIxJGwwJGgw'},
  {id:  5,cat:'groceries',name:'Olive Oil 1 L',          price:549, img:'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?cs=srgb&dl=pexels-pixabay-33783.jpg&fm=jpg&_gl=1*51sh38*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDEyNTQkajQ3JGwwJGgw'},
  {id:  6,cat:'groceries',name:'Instant Coffee 200 g',   price:299, img:'https://media.istockphoto.com/id/172723934/photo/spoon-of-instant-coffee.jpg?s=612x612&w=0&k=20&c=0FH756FaEb5J8ZjG8p0hBZNWUUb28CDxa83ozwzGEh0='},
  {id:  7,cat:'groceries',name:'Brown Sugar 1 kg',       price:119, img:'https://media.istockphoto.com/id/1311967162/photo/brown-sugar-and-sugar-cubes.jpg?s=1024x1024&w=is&k=20&c=Wyqi-ItaBt_DQd1P3fJhunclc-7O1wGieaHAaoxuKEE='},
  {id:  8,cat:'groceries',name:'Green Tea 100 bags',     price:229, img:'https://images.pexels.com/photos/7565503/pexels-photo-7565503.jpeg'},
  {id:  9,cat:'groceries',name:'Corn Flakes 500 g',      price:185, img:'https://media.istockphoto.com/id/492864559/photo/corn-flakes-with-milk.jpg?s=612x612&w=is&k=20&c=ndytBwxmk2qn0CF6FLQLvlVheAtSd5FiubIzPN9sj64='},
  {id: 10,cat:'groceries',name:'Peanut Butter 340 g',    price:249, img:'https://images.pexels.com/photos/6659904/pexels-photo-6659904.jpeg'},
  {id: 11,cat:'groceries',name:'Pasta Penne 500 g',      price: 95, img:'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg'},
  {id: 12,cat:'groceries',name:'Tomato Ketchup 1 kg',    price:149, img:'https://media.istockphoto.com/id/1475341515/photo/tomato-ketchup-in-a-bowl-on-wooden-background.jpg?s=612x612&w=is&k=20&c=PMn189OZjEFB_Y8BX2Q4Ffp1BfEyS2w4JusFnRQhxXw='},
  {id: 13,cat:'groceries',name:'Cashews 250 g',          price:299, img:'https://images.pexels.com/photos/4499222/pexels-photo-4499222.jpeg?cs=srgb&dl=pexels-shkrabaanthony-4499222.jpg&fm=jpg&_gl=1*1iisku0*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDIxMDUkajQ5JGwwJGgw'},
  {id: 14,cat:'groceries',name:'Black Pepper 100 g',     price: 89, img:'https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg?cs=srgb&dl=pexels-eva-bronzini-5988689.jpg&fm=jpg&_gl=1*1ly8rg5*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDIxNDYkajgkbDAkaDA.'},
  {id: 15,cat:'groceries',name:'Tuna Cans (pack of 3)',  price:379, img:'https://images.pexels.com/photos/7245479/pexels-photo-7245479.jpeg'},
  {id: 16,cat:'groceries',name:'Chocolate Spread 750 g', price:399, img:'https://images.pexels.com/photos/7523703/pexels-photo-7523703.jpeg?cs=srgb&dl=pexels-cherry-ann-gonzales-13140546-7523703.jpg&fm=jpg&_gl=1*l4ojfj*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDIyNjAkajMzJGwwJGgw'},
  {id: 17,cat:'groceries',name:'Muesli 700 g',           price:329, img:'https://images.pexels.com/photos/3672/food-fruits-cereals-breakfast.jpg'},
  {id: 18,cat:'groceries',name:'Sea Salt 1 kg',          price: 79, img:'https://media.istockphoto.com/id/466041394/photo/sea-salt.jpg?s=612x612&w=is&k=20&c=pw9rsbN12TfIRJ9JdjfFsp_8ofN0MvG4B3HFyqP4Q80='},
  {id: 19,cat:'groceries',name:'Coconut Water 6 pcs',    price:299, img:'https://images.pexels.com/photos/7676717/pexels-photo-7676717.jpeg'},
  {id: 20,cat:'groceries',name:'Soya Chunks 500 g',      price:109, img:'https://images.pexels.com/photos/4518587/pexels-photo-4518587.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4518587.jpg&fm=jpg&_gl=1*142wcbp*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNDA3NjgkbzEkZzEkdDE3NTIzNDI0ODAkajEyJGwwJGgw'},

  /* —— Home Appliances —— */
  {id: 21,cat:'home',name:'Mixer Grinder 750 W',         price:2499, img:'https://media.istockphoto.com/id/942298386/photo/various-kitchen-utensils-on-the-table.jpg?s=612x612&w=0&k=20&c=YZHCkHIMEZ95-EJy8NVOqOmz0myw-IqXX6LdecbM1Go='},
  {id: 22,cat:'home',name:'Air Fryer 4 L',               price:5399, img:'https://images.pexels.com/photos/19417959/pexels-photo-19417959.jpeg'},
  {id: 23,cat:'home',name:'Steam Iron 2000 W',           price:1999, img:'https://images.pexels.com/photos/4376052/pexels-photo-4376052.jpeg'},
  {id: 24,cat:'home',name:'Vacuum Cleaner 1200 W',       price:4999, img:'https://images.pexels.com/photos/4107277/pexels-photo-4107277.jpeg'},
  {id: 25,cat:'home',name:'Room Heater 800 W',           price:1899, img:'https://images.pexels.com/photos/32969454/pexels-photo-32969454.jpeg'},
  {id: 26,cat:'home',name:'Electric Kettle 1.5 L',       price:1299, img:'https://images.pexels.com/photos/1921673/pexels-photo-1921673.jpeg'},
  {id: 27,cat:'home',name:'Ceiling Fan 1200 mm',         price:2299, img:'https://media.istockphoto.com/id/1205875924/photo/ceiling-fan-is-mounted-on-the-ceiling-of-a-room.jpg?b=1&s=612x612&w=0&k=20&c=S9iqoXQuNHsdguTEvIQyNxQaXrYD_r8lGZb-n4-6Cas='},
  {id: 28,cat:'home',name:'Hand Blender 300 W',          price: 899, img:'https://images.pexels.com/photos/8805079/pexels-photo-8805079.jpeg'},
  {id: 29,cat:'home',name:'Induction Cooktop 2000 W',    price:2499, img:'https://images.pexels.com/photos/3933193/pexels-photo-3933193.jpeg?cs=srgb&dl=pexels-tanya-gorelova-2199357-3933193.jpg&fm=jpg'},
  {id: 30,cat:'home',name:'Water Purifier 7 L',          price:8499, img:'https://images.pexels.com/photos/19202597/pexels-photo-19202597.jpeg'},
  {id: 31,cat:'home',name:'Electric Rice Cooker 2 L',    price:2499, img:'https://www.istockphoto.com/photo/kitchen-equipment-automatic-rice-cooker-gray-gm1218421458-356025731?utm_source=pexels&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=srp_inline_media&utm_term=Electric%20Rice%20Cooker'},
  {id: 32,cat:'home',name:'Hair Dryer 1600 W',           price:1499, img:'https://www.pexels.com/photo/woman-getting-her-hair-dry-3993471/'},
  {id: 33,cat:'home',name:'Smart LED Bulb 9 W',          price: 699, img:'https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?cs=srgb&dl=pexels-jonathanborba-14309813.jpg&fm=jpg&_gl=1*1hfkmk*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA1MzEkajUwJGwwJGgw'},
  {id: 34,cat:'home',name:'Air Cooler 20 L',             price:5999, img:'https://images.pexels.com/photos/28940390/pexels-photo-28940390.jpeg'},
  {id: 35,cat:'home',name:'OTG Oven 18 L',               price:4699, img:'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg'},
  {id: 36,cat:'home',name:'Dishwasher 12 Place',         price:29999,img:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg'},
  {id: 37,cat:'home',name:'Chimney Auto‑Clean',          price:10499,img:'https://images.pexels.com/photos/30459254/pexels-photo-30459254.jpeg?cs=srgb&dl=pexels-vahapdmr-30459254.jpg&fm=jpg&_gl=1*1noirfp*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA0MzckajEzJGwwJGgw'},
  {id: 38,cat:'home',name:'Refrigerator 185 L',          price:17499,img:'https://images.pexels.com/photos/28456609/pexels-photo-28456609.jpeg?cs=srgb&dl=pexels-zeleboba-28456609.jpg&fm=jpg&_gl=1*cid1fn*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA3OTIkajUkbDAkaDA.'},
  {id: 39,cat:'home',name:'Front‑Load Washer 6 kg',      price:23999,img:'https://images.pexels.com/photos/32973125/pexels-photo-32973125.jpeg?cs=srgb&dl=pexels-tr-ng-nguy-n-thanh-2150411289-32973125.jpg&fm=jpg&_gl=1*1i7x5io*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODEwMTUkajQ3JGwwJGgw'},
  {id: 40,cat:'home',name:'Smart Air Purifier',          price:7999, img:'https://media.istockphoto.com/id/2101122136/photo/woman-hand-holding-tv-remote.jpg?s=1024x1024&w=is&k=20&c=3Uy-hnZhvST2_LfO_3Xl85PRInPCXr0-GfMGjbrrwYw='},

  /* —— Electronics —— */
  {id: 41,cat:'electronics',name:'Smartphone 5G 128 GB', price:21999,img:'https://media.istockphoto.com/id/1096443984/photo/creative-background-male-hand-holding-a-phone-with-a-5g-hologram-on-the-background-of-the.jpg?s=1024x1024&w=is&k=20&c=rMbbzNYbbVb7y6_kHPg2bScSQPjla5ZUedlFCSljW18='},
  {id: 42,cat:'electronics',name:'Tablet 10.4″ 64 GB',   price:16999,img:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg'},
  {id: 43,cat:'electronics',name:'Gaming Laptop 16 GB',  price:68999,img:'https://images.pexels.com/photos/30459254/pexels-photo-30459254.jpeg?cs=srgb&dl=pexels-vahapdmr-30459254.jpg&fm=jpg&_gl=1*1noirfp*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA0MzckajEzJGwwJGgw'},
  {id: 44,cat:'electronics',name:'Wireless Earbuds Pro', price: 3499,img:'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg'},
  {id: 45,cat:'electronics',name:'Bluetooth Speaker 20 W',price:2499,img:'https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?cs=srgb&dl=pexels-jonathanborba-14309813.jpg&fm=jpg&_gl=1*1hfkmk*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA1MzEkajUwJGwwJGgw'},
  {id: 46,cat:'electronics',name:'4K Smart TV 43″',      price:28999,img:'https://media.istockphoto.com/id/2101122136/photo/woman-hand-holding-tv-remote.jpg?s=1024x1024&w=is&k=20&c=3Uy-hnZhvST2_LfO_3Xl85PRInPCXr0-GfMGjbrrwYw='},
  {id: 47,cat:'electronics',name:'DSLR Camera 24 MP',    price:35999,img:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?cs=srgb&dl=pexels-pixabay-51383.jpg&fm=jpg&_gl=1*1tlb3l2*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA2NzYkajUxJGwwJGgw'},
  {id: 48,cat:'electronics',name:'Smart Watch AMOLED',   price: 5999,img:'https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?cs=srgb&dl=pexels-didsss-3783416.jpg&fm=jpg&_gl=1*1g0erni*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA3MzgkajU5JGwwJGgw'},
  {id: 49,cat:'electronics',name:'Portable SSD 1 TB',    price: 7499,img:'https://images.pexels.com/photos/28456609/pexels-photo-28456609.jpeg?cs=srgb&dl=pexels-zeleboba-28456609.jpg&fm=jpg&_gl=1*cid1fn*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA3OTIkajUkbDAkaDA.'},
  {id: 50,cat:'electronics',name:'VR Headset',           price:10999,img:'https://images.pexels.com/photos/3761125/pexels-photo-3761125.jpeg'},
  {id: 52,cat:'electronics',name:'Noise‑Cancel Headphones',price:6999,img:'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg'},
  {id: 53,cat:'electronics',name:'Action Camera 4K',     price:12999,img:'https://images.pexels.com/photos/32973125/pexels-photo-32973125.jpeg?cs=srgb&dl=pexels-tr-ng-nguy-n-thanh-2150411289-32973125.jpg&fm=jpg&_gl=1*1i7x5io*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODEwMTUkajQ3JGwwJGgw'},
  {id: 54,cat:'electronics',name:'Smart Home Hub',       price: 3499,img:'https://images.pexels.com/photos/28940390/pexels-photo-28940390.jpeg'},
  {id: 55,cat:'electronics',name:'Drone 1080p',          price:19999,img:'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg'},
  {id: 56,cat:'electronics',name:'Wireless Router AX',   price: 3299,img:'https://images.pexels.com/photos/32973125/pexels-photo-32973125.jpeg?cs=srgb&dl=pexels-tr-ng-nguy-n-thanh-2150411289-32973125.jpg&fm=jpg&_gl=1*1i7x5io*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODEwMTUkajQ3JGwwJGgw'},
  {id: 57,cat:'electronics',name:'Graphics Tablet',      price: 2899,img:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg'},
  {id: 58,cat:'electronics',name:'Bluetooth Soundbar',   price: 5599,img:'https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?cs=srgb&dl=pexels-didsss-3783416.jpg&fm=jpg&_gl=1*1g0erni*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA3MzgkajU5JGwwJGgw'},
  {id: 59,cat:'electronics',name:'Portable Projector',   price:14999,img:'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?cs=srgb&dl=pexels-pixabay-51383.jpg&fm=jpg&_gl=1*1tlb3l2*_ga*MTk4MDc4OTY4MS4xNzUyMzQwNzY5*_ga_8JE65Q40S6*czE3NTIzNzk1MjckbzIkZzEkdDE3NTIzODA2NzYkajUxJGwwJGgw'},
  {id: 60,cat:'electronics',name:'Power Bank 20000 mAh', price: 2499,img:'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg'}
];

/* ─── Local cart storage (optional persistence) ──── */
const CART_KEY = "sss_mart_cart";

/* —— Helpers —— */
const qs = sel => document.querySelector(sel);
const qsa = sel => [...document.querySelectorAll(sel)];

/* ─── Cart functions ─────────────────────────────── */
function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY)||"[]"); }
function saveCart(c){ localStorage.setItem(CART_KEY,JSON.stringify(c)); }
function updateCartCount(){
  qs('#cart-count').textContent = getCart().reduce((t,i)=>t+i.qty,0);
}
function addToCart(id){
  const cart = getCart();
  const found = cart.find(i=>i.id===id);
  found ? found.qty++ : cart.push({id,qty:1});
  saveCart(cart); updateCartCount();
  showToast("✅ Added to cart!");
}

/* ─── Toast —— */
function showToast(msg){
  const t=document.createElement('div');
  t.className='toast'; t.textContent=msg;
  qs('#toast-container').appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

/* ─── UI rendering ───────────────────────────────── */
function renderProducts(filter='all'){
  const grid = qs('#product-grid'); grid.innerHTML='';
  products.filter(p=>filter==='all'||p.cat===filter).forEach(p=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

/* ─── Filter button handling ─────────────────────── */
function setupFilters(){
  qsa('.filter-btn').forEach(btn=>{
    btn.onclick = () =>{
      qsa('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    };
  });
}

/* ─── Init on page load ──────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  setupFilters();
  renderProducts();   // default 'all'
  updateCartCount();
});
