document.body.addEventListener('mousemove', function(e) 
{
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const screen_width = window.innerWidth;
    const screen_height = window.innerHeight;

    const red = Math.round((mouseX / screen_width) * 120) + 135;
    const blue = Math.round((mouseY / screen_height) * 120) + 135;

    document.body.style.backgroundColor = 'rgb(' + red + ', 200, ' + blue + ')';
});