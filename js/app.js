const containerElement = document.querySelector("#container")
const imageElement = document.createElement("img")

imageElement.setAttribute('src','https://storage.googleapis.com/pod_public/1300/151089.jpg')
imageElement.setAttribute('alt', 'Picture of a cat')
imageElement.setAttribute('width', '10rem')

containerElement.append(imageElement)