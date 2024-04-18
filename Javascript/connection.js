document.getElementById('login-form').addEventListener('submit', function(event)  {
    event.preventDefault(); // Empêche le rechargement de la page

    const  phone = document.getElementById('phone').value;
    const  password = document.getElementById('password').value;

    
    console.log('Numéro de téléphone:', phone, 'Mot de passe:', password);
    
     window.location.href = 'accueil.html';
});


