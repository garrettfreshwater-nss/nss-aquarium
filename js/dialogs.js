const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END

    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bitey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bitey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--redrum").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--redrum")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--sharkie").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--sharkie")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--willard").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--willard")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--gator").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--gator")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--doll").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--doll")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents