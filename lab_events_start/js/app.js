document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // Add event for clicking 'save' button
  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault() 

    const list = document.querySelector("#reading-list")

    const container = document.createElement("li")
    container.classList.add("book-list")

    list.appendChild(container)

    const titleElement = document.createElement("h3")
    titleElement.textContent = event.target.title.value

    const authorElement = document.createElement("h4")
    authorElement.textContent = event.target.author.value

    const categoryElement = document.createElement("p")
    categoryElement.textContent = event.target.category.value

    container.appendChild(titleElement)
    container.appendChild(authorElement)
    container.appendChild(categoryElement)

    document.getElementById("new-item-form").reset()

  })

  // Create delete button
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete All"
  const body = document.querySelector("body")
  const heading = document.querySelector("h1")
  body.insertBefore(deleteButton, heading)

  // Add event for clicking on delete button
  deleteButton.addEventListener("click", () => {
    const allContainers = document.querySelectorAll("li")
    allContainers.forEach(container => {
      container.remove()
    })
  })





})
