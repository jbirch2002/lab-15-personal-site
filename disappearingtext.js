document.addEventListener('DOMContentLoaded', function () {
    var message = document.getElementById('click-message');
    document.addEventListener('click', function()
    {
        message.style.display = 'none';
    });
});