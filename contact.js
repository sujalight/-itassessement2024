document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        popup.style.display = 'block';
    });

   
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
