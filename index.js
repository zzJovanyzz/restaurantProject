import { fillHomePage } from "./pageLoad";
import { contactComponent } from "./components/contact";
import { homeComponent } from "./components/home";
import { menuComponent } from "./components/menu";


let loadContactComponent = () =>{

    document.getElementById('tabContainer').innerText = ""
    document.getElementById('tabContainer').insertAdjacentElement('beforeend', contactComponent())
}

let loadMenuComponent = () =>{

    document.getElementById('tabContainer').innerText = ""
    document.getElementById('tabContainer').insertAdjacentElement('beforeend', menuComponent())
}

let loadHomeComponent = () =>{

    document.getElementById('tabContainer').innerText = ""
    document.getElementById('tabContainer').insertAdjacentElement('beforeend', homeComponent())
}

fillHomePage();
document.getElementById('homeButton').addEventListener('click', loadHomeComponent)
document.getElementById('contactButton').addEventListener('click', loadContactComponent)
document.getElementById('menuButton').addEventListener('click', loadMenuComponent)


