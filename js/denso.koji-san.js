const openDialog = document.getElementById("openDialog")
const closeDialog = document.getElementById("closeDialog")

openDialog.addEventListener("click", () => {
    showModal.showModal()
})

closeDialog.addEventListener("click", () => {
    showModal.close()
})