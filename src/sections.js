/* eslint-disable prefer-const */
import DOMInterface from './dom_interface.js'
import GitHubLogo from './assets/githublogo.png'
import { TaskModule, Task } from './tasks.js'
import Storage from './local_storage.js'
import { format, isBefore, parseISO } from 'date-fns'

export default function loadSections () {
  const projects = { proj_1: 'None' }
  const counter = 0
  const headerText = 'Todo://'
  const importFont = '<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Alkatra&family=Bree+Serif&family=Gentium+Book+Plus&family=Tilt+Neon&family=Yatra+One&display=swap" rel="stylesheet">'
  const footerText = '© ' + new Date().getFullYear() + ' coffeedevr | '
  const addProjImg = '<svg id="add-proj-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>'
  const addNote = '<svg id="add-task-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>'

  if (localStorage.getItem('projects') === null) { localStorage.setItem('projects', JSON.stringify(projects)) }
  if (localStorage.getItem('counter') === null) { localStorage.setItem('counter', JSON.stringify(counter)) }

  document.getElementsByTagName('head')[0].innerHTML += importFont

  document.body.appendChild(DOMInterface.createElement('div', 'header-container', ''))
  document.body.appendChild(DOMInterface.createElement('div', 'content-container', ''))
  document.body.appendChild(DOMInterface.createElement('div', 'footer-container', ''))

  DOMInterface.insertToByClass('header-container', DOMInterface.createElement('div', 'header-title-wrapper', ''))
  DOMInterface.insertToByClass('header-title-wrapper', DOMInterface.createElement('h1', '', 'header-title-text'))
  DOMInterface.insertTextContentById('header-title-text', headerText)
  document.querySelector('.header-title-wrapper').innerHTML += addNote

  document.querySelector('#add-task-btn').addEventListener('click', (event) => showAddForm('', event))

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
  DOMInterface.insertToByClass('proj-nav', DOMInterface.createElement('div', '', 'proj-nav-title'))
  DOMInterface.insertToById('proj-nav-title', DOMInterface.createElement('h1', '', 'proj-title-text'))
  DOMInterface.insertToByClass('proj-nav', DOMInterface.createElement('ul', 'nav-proj-list', ''))
  if (Object.keys(JSON.parse(localStorage.getItem('projects'))).length >= 1) { generateProjList() }
  DOMInterface.insertTextContentById('home-title-text', 'Home')
  DOMInterface.insertTextContentById('proj-nav-title', 'Projects')
  document.querySelector('#proj-nav-title').innerHTML += addProjImg

  DOMInterface.insertToByClass('content-container', DOMInterface.createElement('div', 'notes-wrapper', ''))
  DOMInterface.insertToByClass('notes-wrapper', DOMInterface.createElement('div', 'container-header-wrapper', ''))
  DOMInterface.insertToByClass('container-header-wrapper', DOMInterface.createElement('h2', '', 'container-header-text'))
  DOMInterface.insertTextContentById('container-header-text', 'All Tasks')

  document.querySelector('#add-proj-btn').addEventListener('click', showAddProjForm)
}

function generateHomeList () {
  const homeItems = ['Tasks', 'Today', 'Urgent']
  const imglinks = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V9H7V8H9V12H8M9.25 14C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10V18H7V17.08L9 15H7V14H9.25" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M12 10C14 10 15 12.42 13.59 13.84C12.17 15.26 9.75 14.25 9.75 12.25C9.75 11 10.75 10 12 10M16.5 17.88V18H7.5V17.88C7.5 16.63 9.5 15.63 12 15.63S16.5 16.63 16.5 17.88Z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>']

  for (let i = 0; i < homeItems.length; i++) {
    DOMInterface.insertToByClass('nav-home-list', DOMInterface.createElement('li', 'nav-home-list-item', 'home-item-' + (i + 1)))
    DOMInterface.insertTextContentById('home-item-' + (i + 1), homeItems[i])
    document.getElementById('home-item-' + (i + 1)).innerHTML += imglinks[i]
  }

  const lists = document.querySelectorAll('.nav-home-list-item')
  lists.forEach(item => {
    item.addEventListener('click', loadTasks)
  })
}

function generateProjList () {
  const projList = Object.values(JSON.parse(localStorage.getItem('projects')))
  const projKeys = Object.keys(JSON.parse(localStorage.getItem('projects')))
  const projNum = Object.keys(JSON.parse(localStorage.getItem('projects'))).length

  for (let i = 0; i < projNum; i++) {
    DOMInterface.insertToByClass('nav-proj-list', DOMInterface.createElement('li', 'nav-proj-list-item', projKeys[i]))
    DOMInterface.insertTextContentById(projKeys[i], projList[i])
    if (projList[i] !== 'None') {
      DOMInterface.insertToById(projKeys[i], DOMInterface.createElement('div', 'proj-control-container', 'proj-item-control' + (i + 1)))
      DOMInterface.insertToById('proj-item-control' + (i + 1), DOMInterface.createElement('button', 'edit-btn', 'edit-' + 'proj-item-' + (i + 1)))
      DOMInterface.insertToById('proj-item-control' + (i + 1), DOMInterface.createElement('button', 'del-btn', 'del-' + ('proj-item-' + (i + 1))))
      document.querySelector('#' + 'del-' + ('proj-item-' + (i + 1))).addEventListener('click', deleteProject)
      document.querySelector('#' + 'edit-' + ('proj-item-' + (i + 1))).addEventListener('click', editProject)
    }
  }

  const lists = document.querySelectorAll('.nav-proj-list-item')
  lists.forEach(item => {
    item.addEventListener('click', loadTasks)
  })
}

function showAddProjForm (event) {
  event.stopImmediatePropagation()

  const rmvBtn = '<svg id="close-form-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>'
  document.body.appendChild(DOMInterface.createElement('div', '', 'form-wrapper'))
  DOMInterface.insertToById('form-wrapper', DOMInterface.createElement('form', 'form-proj-container', ''))
  DOMInterface.insertToByClass('form-proj-container', DOMInterface.createElement('div', 'form-row-1', 'form-title'))
  DOMInterface.insertTextContentById('form-title', 'Add Project://')
  document.querySelector('#form-title').innerHTML += rmvBtn

  DOMInterface.insertToByClass('form-proj-container', DOMInterface.createElement('div', 'form-row-2', ''))
  DOMInterface.insertToByClass('form-row-2', DOMInterface.createElement('label', '', 'label-1'))
  document.querySelector('#label-1').setAttribute('for', 'title')
  DOMInterface.insertTextContentById('label-1', 'Name:')
  DOMInterface.insertToById('label-1', DOMInterface.createElement('input', 'form-controls', 'title'))
  document.querySelector('#title').setAttribute('type', 'text')
  document.querySelector('#title').setAttribute('name', 'title')
  document.querySelector('#title').setAttribute('minLength', '3')
  document.querySelector('#title').setAttribute('maxLength', '12')
  document.querySelector('#title').setAttribute('placeholder', 'Enter project name...')
  document.querySelector('#title').setAttribute('required', true)

  DOMInterface.insertToByClass('form-proj-container', DOMInterface.createElement('div', 'form-row-5', ''))
  DOMInterface.insertToByClass('form-row-5', DOMInterface.createElement('button', '', 'add-task-form-btn'))
  DOMInterface.insertTextContentById('add-task-form-btn', 'Add Project')
  document.querySelector('#add-task-form-btn').setAttribute('type', 'submit')
  document.querySelector('#add-task-form-btn').addEventListener('click', validateProjForm)
  document.querySelector('#close-form-btn').addEventListener('click', closeForm)
}

function showAddForm (taskID, event) {
  event.stopImmediatePropagation()

  const task = Storage.getNote(event.target.id.substr(-5))
  const projList = Object.values(JSON.parse(localStorage.getItem('projects')))
  const projNum = Object.keys(JSON.parse(localStorage.getItem('projects'))).length
  const rmvBtn = '<svg id="close-form-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>'

  document.body.appendChild(DOMInterface.createElement('div', '', 'form-wrapper'))
  DOMInterface.insertToById('form-wrapper', DOMInterface.createElement('form', 'form-container', ''))
  DOMInterface.insertToByClass('form-container', DOMInterface.createElement('div', 'form-row-1', 'form-title'))
  event.target.id.includes('edit') ? DOMInterface.insertTextContentById('form-title', 'Edit Task://') : DOMInterface.insertTextContentById('form-title', 'Add Task://')
  document.querySelector('#form-title').innerHTML += rmvBtn

  DOMInterface.insertToByClass('form-container', DOMInterface.createElement('div', 'form-row-2', ''))
  DOMInterface.insertToByClass('form-row-2', DOMInterface.createElement('label', '', 'label-1'))
  document.querySelector('#label-1').setAttribute('for', 'title')
  DOMInterface.insertTextContentById('label-1', 'Title:')
  DOMInterface.insertToById('label-1', DOMInterface.createElement('input', 'form-controls', 'title'))
  document.querySelector('#title').setAttribute('type', 'text')
  document.querySelector('#title').setAttribute('name', 'title')
  document.querySelector('#title').setAttribute('minLength', '3')
  document.querySelector('#title').setAttribute('maxLength', '30')
  document.querySelector('#title').setAttribute('placeholder', 'Enter title...')
  document.querySelector('#title').setAttribute('required', true)
  if (event.target.id.includes('edit') === true) { document.getElementById('title').value = task.title }

  DOMInterface.insertToByClass('form-row-2', DOMInterface.createElement('label', '', 'label-3'))
  document.querySelector('#label-3').setAttribute('for', 'dueDate')
  DOMInterface.insertTextContentById('label-3', 'Due Date:')
  DOMInterface.insertToById('label-3', DOMInterface.createElement('input', 'form-controls', 'dueDate'))
  document.querySelector('#dueDate').setAttribute('type', 'date')
  document.querySelector('#dueDate').setAttribute('value', format(new Date(), 'yyyy-MM-dd'))
  document.querySelector('#dueDate').setAttribute('name', 'dueDate')
  if (event.target.id.includes('edit') === true) { document.getElementById('dueDate').value = task.dueDate }

  DOMInterface.insertToByClass('form-container', DOMInterface.createElement('div', 'form-row-3', ''))
  DOMInterface.insertToByClass('form-row-3', DOMInterface.createElement('label', '', 'label-2'))
  document.querySelector('#label-2').setAttribute('for', 'description')
  document.querySelector('#label-2').setAttribute('type', 'text')
  DOMInterface.insertTextContentById('label-2', 'Description:')
  DOMInterface.insertToById('label-2', DOMInterface.createElement('textarea', 'form-controls', 'description'))
  document.querySelector('#description').setAttribute('name', 'description')
  document.querySelector('#description').setAttribute('placeholder', 'Enter description...  (optional)')
  document.querySelector('#description').setAttribute('rows', '5')
  document.querySelector('#description').setAttribute('cols', '20')
  document.querySelector('#description').setAttribute('maxLength', '240')
  if (event.target.id.includes('edit') === true) { document.getElementById('description').value = task.description }

  DOMInterface.insertToByClass('form-container', DOMInterface.createElement('div', 'form-row-4', ''))
  DOMInterface.insertToByClass('form-row-4', DOMInterface.createElement('label', '', 'label-4'))
  document.querySelector('#label-4').setAttribute('for', 'priority')
  DOMInterface.insertTextContentById('label-4', 'Priority:')
  DOMInterface.insertToById('label-4', DOMInterface.createElement('select', 'form-controls', 'priority'))
  document.querySelector('#priority').setAttribute('name', 'priority')
  DOMInterface.insertToById('priority', DOMInterface.createElement('option', '', 'option-1'))
  document.querySelector('#option-1').setAttribute('value', 'None')
  document.querySelector('#option-1').textContent = 'None'
  DOMInterface.insertToById('priority', DOMInterface.createElement('option', '', 'prio-option-2'))
  document.querySelector('#prio-option-2').setAttribute('value', 'Urgent')
  document.querySelector('#prio-option-2').textContent = 'Urgent'
  if (event.target.id.includes('edit') === true) { document.getElementById('priority').value = task.priority }

  DOMInterface.insertToByClass('form-row-4', DOMInterface.createElement('label', '', 'label-5'))
  document.querySelector('#label-5').setAttribute('for', 'project')
  DOMInterface.insertTextContentById('label-5', 'Project:')
  DOMInterface.insertToById('label-5', DOMInterface.createElement('select', 'form-controls', 'project'))
  document.querySelector('#priority').setAttribute('name', 'project')
  if (event.target.id.includes('edit') === true) { document.getElementById('project').value = task.project }

  for (let i = 0; i < projNum; i++) {
    DOMInterface.insertToById('project', DOMInterface.createElement('option', '', 'proj-option-' + i))
    document.querySelector('#proj-option-' + i).setAttribute('value', projList[i])
    document.querySelector('#proj-option-' + i).textContent = projList[i]
  }

  DOMInterface.insertToByClass('form-container', DOMInterface.createElement('div', 'form-row-5', ''))
  DOMInterface.insertToByClass('form-row-5', DOMInterface.createElement('button', '', 'add-task-form-btn'))
  DOMInterface.insertTextContentById('add-task-form-btn', 'Add Task')
  document.querySelector('#add-task-form-btn').setAttribute('type', 'submit')
  document.querySelector('#add-task-form-btn').addEventListener('click', () => validateForm(taskID))
  document.querySelector('#close-form-btn').addEventListener('click', closeForm)

  const title = document.querySelector('#title')
  const dueDate = document.querySelector('#dueDate')

  title.addEventListener('input', () => {
    if (title.validity.tooShort) {
      title.setCustomValidity('Your title must comprise of 3 characters and up.')
      title.reportValidity()
    } else {
      title.setCustomValidity('')
    }
  })

  dueDate.addEventListener('input', () => {
    const res = isBefore(parseISO(dueDate.value), parseISO(format(new Date(), 'yyyy-MM-dd')))
    if (res === true) {
      dueDate.setCustomValidity('Your due date must not be set before the current date.')
      dueDate.reportValidity()
    } else {
      dueDate.setCustomValidity('')
    }
  })
}

function addProj (name) {
  const projs = Storage.getNote('projects')
  const projsIndex = 'proj_' + Object.keys(projs).length + 1
  projs[projsIndex] = name
  localStorage.setItem('projects', JSON.stringify(projs))
}

function closeForm () {
  document.body.removeChild(document.body.lastChild)
}

function validateProjForm () {
  const title = document.querySelector('#title')
  if (title.value.length < 3) { return }

  addProj(title.value)
}

function validateForm (taskID) {
  const title = document.querySelector('#title')
  const dueDate = document.querySelector('#dueDate')
  const res = isBefore(parseISO(dueDate.value), parseISO(format(new Date(), 'yyyy-MM-dd')))

  if (title.value.length < 3 || res === true) { return }
  addTaskEvent(taskID)
}

function addTaskEvent (taskID) {
  const title = document.querySelector('#title')
  const dueDate = document.querySelector('#dueDate')
  const prio = document.querySelector('#priority')
  const proj = document.querySelector('#project')
  const desc = document.querySelector('#description')

  if (taskID.includes('note') === true) {
    const note = new Task(title.value, desc.value, dueDate.value, prio.value, proj.value)
    localStorage.setItem(taskID, JSON.stringify(note))
  } else {
    TaskModule.createTask(title.value, desc.value, dueDate.value, prio.value, proj.value)
  }
}

function loadTasks (event) {
  const text = event.target.textContent
  const element = document.querySelector('.notes-wrapper')
  setActiveCategory(event.target.id)

  switch (text) {
    case 'Tasks':
      element.removeChild(element.lastElementChild)
      createTasksDOM(TaskModule.retrieveTasks())
      break
    case 'Today':
      element.removeChild(element.lastElementChild)
      createTasksDOM(TaskModule.retrieveTasksDueToday())
      break
    case 'Urgent':
      element.removeChild(element.lastElementChild)
      createTasksDOM(TaskModule.retrieveTasksUrgent())
      break
    default:
      element.removeChild(element.lastElementChild)
      createTasksDOM(TaskModule.retrieveTasksByProj(text))
  }
}

function setActiveCategory (id) {
  const removeElement = document.querySelector('.selected')
  const addElement = document.getElementById(id)
  removeElement.classList.toggle('selected')
  addElement.classList.toggle('selected')
}

function createTasksDOM (tasks) {
  DOMInterface.insertToByClass('notes-wrapper', DOMInterface.createElement('div', 'notes-container', ''))

  if (tasks === 'undefined') { return }
  let taskList = Object.keys(tasks).sort()

  for (let obj = 0; obj < taskList.length; obj++) {
    if (taskList[obj] === 'projects') { continue }
    if (taskList[obj] === 'counter') { continue }
    DOMInterface.insertToByClass('notes-container', DOMInterface.createElement('div', 'tasks-card', taskList[obj]))
    if (Storage.getNote(taskList[obj]).check === true) { document.querySelector('#' + taskList[obj]).classList.toggle('crossed') }
    Storage.getNote(taskList[obj]).priority === 'Urgent'
      ? document.querySelector('#' + taskList[obj]).classList.toggle('priority')
      : document.querySelector('#' + taskList[obj]).classList.toggle('not-urgent')
    DOMInterface.insertToById(taskList[obj], DOMInterface.createElement('input', '', taskList[obj] + '-check'))
    document.getElementById(taskList[obj] + '-check').setAttribute('type', 'checkbox')
    document.getElementById(taskList[obj] + '-check').addEventListener('click', crossTask)
    DOMInterface.insertToById(taskList[obj], DOMInterface.createElement('p', 'tasks-title', taskList[obj] + '-title-text'))
    DOMInterface.insertTextContentById(taskList[obj] + '-title-text', Storage.getNote(taskList[obj]).title)
    DOMInterface.insertToById(taskList[obj], DOMInterface.createElement('p', 'tasks-prio', taskList[obj] + '-prio-text'))
    DOMInterface.insertTextContentById(taskList[obj] + '-prio-text', TaskModule.getTaskDue(Storage.getNote(taskList[obj]).dueDate))
    DOMInterface.insertToById(taskList[obj], DOMInterface.createElement('p', 'tasks-due', taskList[obj] + '-due-text'))
    DOMInterface.insertTextContentById(taskList[obj] + '-due-text', Storage.getNote(taskList[obj]).dueDate)
    DOMInterface.insertToById(taskList[obj], DOMInterface.createElement('div', 'notes-control-wrapper', taskList[obj] + '-control-wrapper'))
    DOMInterface.insertToById(taskList[obj] + '-control-wrapper', DOMInterface.createElement('button', 'edit-btn', 'edit-' + taskList[obj]))
    DOMInterface.insertToById(taskList[obj] + '-control-wrapper', DOMInterface.createElement('button', 'del-btn', 'del-' + taskList[obj]))
    document.querySelector('#' + 'del-' + taskList[obj]).addEventListener('click', deleteTask)
    document.querySelector('#' + 'edit-' + taskList[obj]).addEventListener('click', (event) => showAddForm(taskList[obj], event))
    document.querySelector('#' + taskList[obj] + '-title-text').addEventListener('mouseover', showDesc)
    document.querySelector('#' + taskList[obj] + '-title-text').addEventListener('mouseout', showTitle)
    loadCheckBox(Storage.getNote(taskList[obj]), taskList[obj])
  }
}

function deleteTask (event) {
  const elementId = event.target.parentNode.parentNode
  elementId.parentNode.removeChild(elementId)
  Storage.deleteNote(elementId.id)
}

function editProject (event) {
  event.stopImmediatePropagation()

  const projId = event.target.parentNode.parentNode
  projId.parentNode.removeChild(projId)
  editProjectData(projId, 'Replace')
}

function deleteProject (event) {
  event.stopImmediatePropagation()

  const projId = event.target.parentNode.parentNode
  projId.parentNode.removeChild(projId)
  editProjectData(projId, '')
}

function editProjectData (projId, replacement) {
  const project = Storage.getNote('projects')
  const projectId = projId.id
  const taskList = TaskModule.retrieveTasksByProj(projId.textContent)
  replacement !== '' ? project[projectId] = replacement : delete project[projectId]
  Storage.makeNote('projects', project)

  editTaskProjects(taskList, replacement)
}

function editTaskProjects (taskList, replacement) {
  for (let obj in taskList) {
    const object = JSON.parse(taskList[obj])
    replacement !== '' ? object.project = replacement : object.project = 'None'
    localStorage.setItem(obj, JSON.stringify(object))
  }
  location.reload()
}

function showTitle (event) {
  const parentId = event.target.parentNode.id
  const task = Storage.getNote(parentId)

  const element = document.getElementById(event.target.id)
  const check = document.getElementById(parentId + '-check')
  const prioText = document.getElementById(parentId + '-prio-text')
  const dueText = document.getElementById(parentId + '-due-text')
  const control = document.getElementById(parentId + '-control-wrapper')

  element.textContent = task.title
  prioText.classList.toggle('hide')
  dueText.classList.toggle('hide')
  control.classList.toggle('hide')
  check.classList.toggle('hide')
}

function showDesc (event) {
  const parentId = event.target.parentNode.id
  const task = Storage.getNote(parentId)

  const element = document.getElementById(event.target.id)
  const check = document.getElementById(parentId + '-check')
  const prioText = document.getElementById(parentId + '-prio-text')
  const dueText = document.getElementById(parentId + '-due-text')
  const control = document.getElementById(parentId + '-control-wrapper')

  task.description.length >= 1 ? element.textContent = task.description : element.textContent = 'No description available'
  prioText.classList.toggle('hide')
  dueText.classList.toggle('hide')
  control.classList.toggle('hide')
  check.classList.toggle('hide')
}

function crossTask (event) {
  const elementId = event.target.parentNode.id
  const element = document.getElementById(elementId)
  const object = Storage.getNote(elementId)
  element.classList.toggle('crossed')
  loadCheckClick(object, elementId)
}

function loadCheckClick (object, elementId) {
  if (object.check === true) {
    object.check = false
    Storage.makeNote(elementId, object)
    document.querySelector('#' + elementId + ' > input').checked = false
  } else {
    object.check = true
    Storage.makeNote(elementId, object)
    document.querySelector('#' + elementId + ' > input').checked = true
  }
}

function loadCheckBox (object, elementId) {
  object.check === true ? document.querySelector('#' + elementId + ' > input').checked = true : document.querySelector('#' + elementId + ' > input').checked = false
}

function defaultTasks () {
  const addElement = document.getElementById('home-item-1')
  addElement.classList.toggle('selected')
  createTasksDOM(TaskModule.retrieveTasks())
}

export { defaultTasks, loadTasks, loadSections }
