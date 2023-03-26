import DOMInterface from './dom_interface.js'
import GitHubLogo from './assets/githublogo.png'
import Storage from './local_storage'

export default function loadSections () {
  const projects = { proj_0: 'None' }
  const headerText = 'Todo://'
  const importFont = '<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Alkatra&family=Bree+Serif&family=Tilt+Neon&family=Yatra+One&display=swap" rel="stylesheet">'
  const footerText = '© ' + new Date().getFullYear() + ' coffeedevr | '
  const addProjText = 'Add a Project'
  const addProjImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab-plus</title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>'

  if (localStorage.getItem('projects') === null) { localStorage.setItem('projects', JSON.stringify(projects)) }

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

  DOMInterface.insertToByClass('content-container', DOMInterface.createElement('div', 'home-nav-wrapper', ''))
  DOMInterface.insertToByClass('content-container', DOMInterface.createElement('div', 'proj-nav-wrapper', ''))
  DOMInterface.insertToByClass('home-nav-wrapper', DOMInterface.createElement('div', 'home-nav', ''))
  DOMInterface.insertToByClass('home-nav', DOMInterface.createElement('h1', '', 'home-title-text'))
  DOMInterface.insertToByClass('home-nav', DOMInterface.createElement('ul', 'nav-home-list', ''))
  generateHomeList()
  DOMInterface.insertToByClass('proj-nav-wrapper', DOMInterface.createElement('div', 'proj-nav', ''))
  DOMInterface.insertToByClass('proj-nav', DOMInterface.createElement('h1', '', 'proj-title-text'))
  DOMInterface.insertToByClass('proj-nav', DOMInterface.createElement('ul', 'nav-proj-list', ''))
  if (Object.keys(JSON.parse(localStorage.getItem('projects'))).length > 1) { generateProjList() }
  DOMInterface.insertTextContentById('home-title-text', 'Home')
  DOMInterface.insertTextContentById('proj-title-text', 'Projects')
  DOMInterface.insertToByClass('nav-proj-list', DOMInterface.createElement('li', 'nav-proj-list-item', 'add-proj'))
  DOMInterface.insertTextContentById('add-proj', addProjText)
  document.getElementById('add-proj').innerHTML += addProjImg

  DOMInterface.insertToByClass('content-container', DOMInterface.createElement('div', 'notes-wrapper', ''))
  DOMInterface.insertToByClass('notes-wrapper', DOMInterface.createElement('div', 'container-header-wrapper', ''))
  DOMInterface.insertToByClass('container-header-wrapper', DOMInterface.createElement('h2', '', 'container-header-text'))
  DOMInterface.insertTextContentById('container-header-text', 'All Tasks')
}

function generateHomeList () {
  const homeItems = ['Tasks', 'Today', 'Urgent']
  const imglinks = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-list-outline</title><path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V9H7V8H9V12H8M9.25 14C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10V18H7V17.08L9 15H7V14H9.25" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-account-outline</title><path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M12 10C14 10 15 12.42 13.59 13.84C12.17 15.26 9.75 14.25 9.75 12.25C9.75 11 10.75 10 12 10M16.5 17.88V18H7.5V17.88C7.5 16.63 9.5 15.63 12 15.63S16.5 16.63 16.5 17.88Z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>']

  for (let i = 0; i < homeItems.length; i++) {
    DOMInterface.insertToByClass('nav-home-list', DOMInterface.createElement('li', 'nav-home-list-item', 'home-item-' + i))
    DOMInterface.insertTextContentById('home-item-' + i, homeItems[i])
    document.getElementById('home-item-' + i).innerHTML += imglinks[i]
  }
}

function generateProjList () {
  const projList = Object.values(JSON.parse(localStorage.getItem('projects')))
  const projNum = Object.keys(JSON.parse(localStorage.getItem('projects'))).length
  console.log(projList)

  for (let i = 1; i < projNum; i++) {
    DOMInterface.insertToByClass('nav-proj-list', DOMInterface.createElement('li', 'nav-proj-list-item', 'proj-item-' + i))
    DOMInterface.insertTextContentById('proj-item-' + i, projList[i])
  }
}

function loadTasks () {}
function loadToday () {}
function loadUrgent () {}
function loadProjects () {}
