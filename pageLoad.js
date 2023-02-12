import { myNav} from "./components/nav";
import { homeComponent } from "./components/home";



const fillHomePage = () =>{

    

    let contentDiv = document.getElementById('content')

    contentDiv.insertAdjacentElement('beforeend', myNav())
    // console.log(document.getElementById('homeButton').innerText)

    let tabContainer = document.createElement('div')
    tabContainer.setAttribute('id', 'tabContainer')



    document.getElementById('content').insertAdjacentElement('beforeend', tabContainer)
    tabContainer.insertAdjacentElement('beforeend', homeComponent())

    
    
}

export {fillHomePage}