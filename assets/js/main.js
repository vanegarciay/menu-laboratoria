/*var padre = document.getElementById("padre");
var icono = document.getElementById("icono");

icono.addEventListener("click", despleglable);

function despleglable() {

    var home = document.createElement("div");
    var homep = document.createElement("p");
    homep.setAttribute("class", "letras_blanca");
    var homeT = document.createTextNode("home");
    homep.appendChild(homeT);
    home.appendChild(homep);
    padre.appendChild(home);

    var about = document.createElement("div");
    about.setAttribute("class", "cajas_menu");
    var aboutp = document.createElement("p");
    aboutp.setAttribute("class", "letras_blanca");
    var aboutT = document.createTextNode("About");
    aboutp.appendChild(aboutT);
    about.appendChild(aboutp);
    padre.appendChild(about);

    var products = document.createElement("div");
    products.setAttribute("class", "cajas_menu");
    var productsp = document.createElement("p");
    productsp.setAttribute("class", "letras_blanca");
    var productsT = document.createTextNode("Productos");
    productsp.appendChild(productsT);
    products.appendChild(productsp);
    padre.appendChild(products);

    var services = document.createElement("div");
    services.setAttribute("class", "cajas_menu");
    var servicesp = document.createElement("p");
    servicesp.setAttribute("class", "letras_blanca");
    var servicesT = document.createTextNode("Services");
    servicesp.appendChild(servicesT);
    services.appendChild(servicesp);
    padre.appendChild(services);

    var customers = document.createElement("div");
    customers.setAttribute("class", "cajas_menu");
    var customersp = document.createElement("p");
    customersp.setAttribute("class", "letras_blanca");
    var customersT = document.createTextNode("Customers");
    customersp.appendChild(customersT);
    customers.appendChild(customersp);
    padre.appendChild(customers);

    var contact = document.createElement("div");
    contact.setAttribute("class", "cajas_menu");
    var contactp = document.createElement("p");
    contactp.setAttribute("class", "letras_blanca");
    var contactT = document.createTextNode("Contact");
    contactp.appendChild(contactT);
    contact.appendChild(contactp);
    padre.appendChild(contact);
}*/

var barra = document.getElementById("barra");

barra.addEventListener("click",function(){
    document.getElementById("hidden").classList.remove("contenedor");

});




