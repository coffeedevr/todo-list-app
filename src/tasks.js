import Storage from './local_storage.js'

const noteCount = localStorage.length

const Notes = function (title, description, dueDate, priority, project, status) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.project = project
  this.status = status
}

function makeNote (title, description, dueDate, priority, project, status) {
  const note = new Notes(title, description, dueDate, priority, project, status)
  Storage.makeNote('note-' + noteCount, note)
}

export { makeNote as default }
