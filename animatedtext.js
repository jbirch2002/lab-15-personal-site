function animatedText(text_element, n, speed) 
{
    const element = document.getElementById(text_element);
    const text = element.getAttribute('new-text');

    if (n < text.length)
    {
        element.innerHTML = text.substring(0, n + 1);
        setTimeout(function()
        {
            animatedText(text_element, n + 1, speed);
        }, speed);
    }
}

document.addEventListener('DOMContentLoaded', function() 
{
    const text_element = 'animatedText';
    const speed = 100;

    const element = document.getElementById(text_element);
    const text = element.innerText;
    element.setAttribute('data-text', text);

    element.innerHTML = '';

    animatedText(text_element, 0, speed);
});