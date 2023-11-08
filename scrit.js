let container = document.createElement("div"); container.className= 'container'
let block1 = document.createElement('div'); block1.classList ='block block1';
let block2 = document.createElement('div'); block2.className ='block block2';
let block3 = document.createElement('div'); block3.className ='block block3';
let block4 = document.createElement('div'); block4.className ='block block4';
let block5 = document.createElement('div'); block5.className ='block block5';
let block6 = document.createElement('div'); block6.className ='block block6';
let block7 = document.createElement('div'); block7.className ='block block7';
let block8 = document.createElement('div'); block8.className ='block block8';
let block9 = document.createElement('div'); block9.className ='block block9';


let p1 = document.createElement('p'); p1.innerHTML = '7:25 AM';
let p2 = document.createElement('p'); p2.innerHTML = '8:15 PM';
let p3 = document.createElement('p'); p3.innerHTML ='Translate';
let p4 = document.createElement('p'); p4.innerHTML = 'Bike';
let p5 = document.createElement('p'); p5.innerHTML = 'Boat';
let p6 = document.createElement('p'); p6.innerHTML = 'Drive ';
let p7 = document.createElement('p'); p7.innerHTML ='Morning';
let p8 = document.createElement('p'); p8.innerHTML = 'Afternoon';
let p9 = document.createElement('p'); p9.innerHTML = 'Nignt';

let img1 = document.createElement('img'); img1.src ='./img/1.png'; 
let img2 = document.createElement('img'); img2.src ='./img/2.png'; 
let img3 = document.createElement('img'); img3.src ='./img/3.png';
let img4 = document.createElement('img'); img4.src ='./img/4.png';
let img5 = document.createElement('img'); img5.src ='./img/5.png';
let img6 = document.createElement('img'); img6.src ='./img/6.png';
let img7 = document.createElement('img'); img7.src ='./img/7.png';
let img8 = document.createElement('img'); img8.src ='./img/8.png';
let img9 = document.createElement('img'); img9.src ='./img/9.png';


let t1 = document.createElement('span'); t1.innerHTML = 'Boston';
let t2 = document.createElement('span'); t2.innerHTML = 'Madrid';
let t3 = document.createElement('span'); t3.innerHTML ='Spanish';
let t4 = document.createElement('span'); t4.innerHTML = '13.1 Miles';
let t5 = document.createElement('span'); t5.innerHTML = '90 Minutes';
let t6 = document.createElement('span'); t6.innerHTML = '48 Miles ';
let t7 = document.createElement('span'); t7.innerHTML ='Coffee';
let t8 = document.createElement('span'); t8.innerHTML = 'Gym';
let t9 = document.createElement('span'); t9.innerHTML = 'Hot Tub';

document.body.append(container);
container.append(block1,block2,block3,block4,block5,block6,block7,block8,block9);
block1.append(p1);
block2.append(p2);
block3.append(p3);
block4.append(p4);
block5.append(p5);
block6.append(p6);
block7.append(p7);
block8.append(p8);
block9.append(p9);

block1.append(img1);
block2.append(img2);
block3.append(img3);
block4.append(img4);
block5.append(img5);
block6.append(img6);
block7.append(img7);
block8.append(img8);
block9.append(img9);

block1.append(t1);
block2.append(t2);
block3.append(t3);
block4.append(t4);
block5.append(t5);
block6.append(t6);
block7.append(t7);
block8.append(t8);
block9.append(t9);