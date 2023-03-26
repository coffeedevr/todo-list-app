import DOMInterface from './dom_interface.js'
import GitHubLogo from './assets/githublogo.png'

export default function loadSections () {
  const headerText = 'Todo://'
  const importFont = '<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Alkatra&family=Bree+Serif&family=Tilt+Neon&family=Yatra+One&display=swap" rel="stylesheet">'
  const footerText = '© ' + new Date().getFullYear() + ' coffeedevr | '

  document.getElementsByTagName('head')[0].innerHTML += importFont

  document.body.appendChild(DOMInterface.createElement('div', 'header-container', ''))
  document.body.appendChild(DOMInterface.createElement('div', 'content-container', ''))
  document.body.appendChild(DOMInterface.createElement('div', 'footer-container', ''))

  DOMInterface.insertToByClass('header-container', DOMInterface.createElement('div', 'header-title-wrapper', ''))
  DOMInterface.insertToByClass('header-title-wrapper', DOMInterface.createElement('h1', '', 'header-title-text'))
  DOMInterface.insertTextContentById('header-title-text', headerText)

  DOMInterface.insertToByClass('footer-container', DOMInterface.createElement('p', '', 'footer-text'))
  DOMInterface.insertTextContentById('footer-text', footerText)
  DOMInterface.insertToByClass('footer-container', DOMInterface.createImgById('github-logo', GitHubLogo))
}
