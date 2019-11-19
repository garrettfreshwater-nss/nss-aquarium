const addTipMouseOverEventListeners = () => {

    const tipCards = document.querySelectorAll(".tip")

    for (const card of tipCards) {
        card.addEventListener(
            "mouseover",
            (theMouseOverEvent) => {
                card.classList.add("highlightTip")
            })



        card.addEventListener("mouseout", theMouseOverEvent => {
            card.classList.remove("highlightTip")
            

        })

    }

}
export default addTipMouseOverEventListeners