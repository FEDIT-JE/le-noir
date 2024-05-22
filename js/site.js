function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('exampleInputText1').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const subject = document.getElementById('exampleInputSubject1').value;
    const message = document.getElementById('exampleFormControlTextarea1').value;
    
    const mailtoLink = `mailto:jan.eggenberger@bluewin.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;

  }