function submit(){
    document.querySelector('.pop-up').style.display= "inline";
}
function display_none(){
    document.querySelector('.pop-up').style.display= "none";
}
function displayMenu(){
    // document.querySelector('.Class_for_Mobile').style.display= "flex";
    let menu = document.querySelector('.Class_for_Mobile');

    menu.classList.toggle('show');
    // if(menu.style.display === "none"){
    //     menu.style.display="flex";
    // }else{
    //     menu.style.display="none";
    // }
}
function submitToWhatsapp(){
    let name = document.querySelector('.name-input').value;
    let message = document.querySelector('textarea').value;

    if (!message.trim()) {
        alert("Please enter a message!"); 
        return;
    }
    let phoneNumber = "923035878430";
    let whatsappMessage = `Hello, my name is ${name || "Anonymous"} and I want to say: ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank"); // Open WhatsApp in a new tab
}   
