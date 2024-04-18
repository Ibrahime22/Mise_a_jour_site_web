document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const streetNumber = document.getElementById('street-number').value;
    const postalCode = document.getElementById('postal-code').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validation du numéro de téléphone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
    }

    // Validation du code postal
    const postalCodeRegex = /^[0-9]{5}$/;
    if (!postalCodeRegex.test(postalCode)) {
        alert('Veuillez entrer un code postal valide.');
        return;
    }

    // Vérifiez si les mots de passe sont corrects
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    
    console.log('Prénom:', firstname, 'Nom:', lastname, 'Téléphone:', phone, 'Rue:', street, 'Numéro de rue:', streetNumber, 'Code postal:', postalCode, 'Email:', email, 'Mot de passe:', password);

     window.location.href = 'accueil.html';
});
