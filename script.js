// 2 Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, 
// змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.

// ! Database 
const photos = [
    "https://images.unsplash.com/photo-1748452478615-6f417bc4d29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1746311473391-0c0bf08ad9b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1748701821466-0b9f8bf839ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1748423510843-1a7aeb5ff1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1720886074864-fa359e543c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
];

// ! Variables
const input = document.querySelector(".slider__input"); 
const image = document.querySelector(".slider__image"); 

//! Listeners and Functions
input.addEventListener('input', _.debounce(slider, 500));

function slider(event){ 
    const index = event.target.value;
    image.src = photos[index]; 
}


// 2 Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: Використовуйте метод debounce з бібліотеки lodash. 
// Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.

// ! Variables 
const box = document.getElementById("box"); 

// ! Listeners and Function
document.addEventListener('mousemove', _.debounce(moveTheBox, 100)); 

function moveTheBox(event){ 
    const x = event.clientX;
    const y = event.clientY;
    box.style.left = x + "px";
    box.style.top = y + "px";
}
