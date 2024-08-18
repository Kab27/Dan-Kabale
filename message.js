const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'en cours...';

   const serviceID = 'default_service';
   const templateID = 'template_tchuxcc';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Envoyer';
      alert('Envoi Réussi !');
    }, (err) => {
      btn.value = 'Envoyer';
      alert(JSON.stringify(err));
    });
});