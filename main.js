const accordion = document.querySelector('.accordion')

accordion.addEventListener('click',function(e){
    const activePanel = e.target.closest(".accordion-panel")
    if (!activePanel) {
      return
    }

    toggleToActive(activePanel)
})

function toggleToActive(panelToActivate){
    // For Browsers that support :has selector

    const buttons = panelToActivate.parentElement.querySelectorAll('.accordion-trigger')
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content')

    buttons.forEach(button => {
        button.setAttribute("aria-expanded",'false')
        button.closest(".accordion-panel").dataset.expanded = false
    });
    contents.forEach(content => {
        content.setAttribute("aria-hidden",'false')
    })

    panelToActivate.dataset.expanded = true;
    panelToActivate.querySelector('.accordion-content').setAttribute("aria-hidden",true)
    panelToActivate.querySelector('.accordion-trigger').setAttribute("aria-expanded",true)

}
