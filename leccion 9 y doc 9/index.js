//mobile menu

const burgerIcon = document.getElementById('burger')
const navbarMenu = document.getElementById('nav-links')


burgerIcon.addEventListener(
    "click",
    ()=>{
        burgerIcon.classList.toggle('is-active')
        navbarMenu.classList.toggle('is-active')
    }
)

//tabs
const tabs = document.querySelectorAll('.tabs li')
const tabContentBoxes = document.querySelectorAll('#tab-content > div')

tabs.forEach(
    (tab)=>{
        tab.addEventListener(
            "click",
            ()=>{
                tabs.forEach(
                    (item)=>item.classList.remove('is-active')
                )
                tab.classList.add('is-active')

                const target = tab.dataset.target
                tabContentBoxes.forEach(
                    box=>{
                        if(box.getAttribute('id') === target){
                            box.classList.remove('is-hidden')
                        }
                        else{
                            box.classList.add('is-hidden')
                        }
                    }
                )
            }
        )
    }
)

//Modal
const signUpButton = document.getElementById('sign-up-id')
const background = document.querySelector('#modal-message > .modal-background')

signUpButton.addEventListener(
    "click",
    ()=>{
        const modal = document.getElementById('modal-message')
        modal.classList.add('is-active')
    }
)


background.addEventListener(
    "click",
    ()=>{
        const modal = document.getElementById('modal-message')
        modal.classList.remove('is-active')
    }
)