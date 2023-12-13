let angle = 0;
let radius = 50;
let mouse_click = null;

function circlePattern() 
{
    const container = document.querySelector('.pulsing-circle-container');
    const circle = document.createElement('div');
    circle.classList.add('pulsing-circle');

    const random_color = 
    {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };

    circle.style.backgroundColor = 'rgb(' + random_color.r + ', ' + random_color.g + ', ' + random_color.b + ')';

    circle.dataset.initialR = random_color.r;
    circle.dataset.initialG = random_color.g;
    circle.dataset.initialB = random_color.b;

    const x = container.offsetWidth / 2 + Math.cos(angle) * radius - 50;
    const y = container.offsetHeight / 2 + Math.sin(angle) * radius - 50;

    circle.style.left = circle.style.left = x + 'px';
    circle.style.top = circle.style.top = y + 'px';

    container.appendChild(circle);

    angle += Math.PI / 8;
    if (angle >= 2 * Math.PI)
    {
        angle = 0;
        radius += 40;
    }
}

function updateCircleColor(event) 
{
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const screen_width = window.innerWidth;
    const screen_height = window.innerHeight;

    const circles = document.querySelectorAll('.pulsing-circle');

    circles.forEach(circle =>
    {
        const initialR = parseInt(circle.dataset.initialR, 10);
        const initialG = parseInt(circle.dataset.initialG, 10);
        const initialB = parseInt(circle.dataset.initialB, 10);

        const red = (initialR + Math.round((mouseX / screen_width) * 120)) % 256;
        const blue = (initialB + Math.round((mouseY / screen_height) * 120)) % 256;

        circle.style.backgroundColor = 'rgb(' + red + ', ' + initialG + ', ' + blue + ')';
    });
}

function createCircles()
{
    if (!mouse_click) 
    {
        mouse_click = setInterval(circlePattern, 250);
    }
}

document.addEventListener('DOMContentLoaded', function()
{
    const container = document.querySelector('.pulsing-circle-container');
    if (container) 
    {
        container.addEventListener('click', createCircles);
    }
    else 
    {
        console.error('Could not find the container to attach the click event listener.');
    }
    document.addEventListener('mousemove', updateCircleColor);
});