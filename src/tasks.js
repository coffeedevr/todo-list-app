import Storage from './local_storage.js'
import { format, parseISO, compareAsc } from 'date-fns'

const noteCount = localStorage.length

function Task (title, description, dueDate, priority, project) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.project = project
}

const TaskModule = (() => {
  const createTask = (title, description, dueDate, priority, project) => {
    // const a = format(dueDate, 'yyyy-MM-dd')
    const note = new Task(title, description, dueDate, priority, project)
    Storage.makeNote('note' + noteCount, note)
  }

  const getTask = (key) => {
    return Storage.getNote(key)
  }

  const retrieveTasks = () => {
    return { ...localStorage }
  }

  const retrieveTasksUrgent = () => {
    const tasks = { ...localStorage }
    if (Object.keys(tasks).length < 1) { return }

    // eslint-disable-next-line prefer-const
    let list = []
    for (let i = 0; i < Object.keys(tasks).length; i++) {
      if (JSON.parse(localStorage.getItem(Object.keys(tasks)[i])).priority !== 'Urgent') { continue }
      list[`${Object.keys(tasks)[i]}`] = `${localStorage.getItem(Object.keys(tasks)[i])}`
    }

    if (Object.keys(list).length < 1) { return }
    return list
  }

  const retrieveTasksByProj = (project) => {
    const tasks = { ...localStorage }
    if (Object.keys(tasks).length < 1) { return }

    // eslint-disable-next-line prefer-const
    let list = []
    for (let i = 0; i < Object.keys(tasks).length; i++) {
      if (JSON.parse(localStorage.getItem(Object.keys(tasks)[i])).project !== project) { continue }
      list[`${Object.keys(tasks)[i]}`] = `${localStorage.getItem(Object.keys(tasks)[i])}`
    }
    return list
  }

  const getTaskDue = (date) => {
    const today = format(new Date(), 'yyyy-MM-dd')
    const result = compareAsc(today, date)

    if (result !== 0) { return 'In progress' }
    return 'Due Today'
  }

  const retrieveTasksDueToday = () => {
    const tasks = { ...localStorage }
    if (Object.keys(tasks).length < 1) { return }

    // eslint-disable-next-line prefer-const
    let list = []
    const today = format(new Date(), 'yyyy-MM-dd')

    for (let i = 0; i < Object.keys(tasks).length; i++) {
      const a = JSON.parse(localStorage.getItem(Object.keys(tasks)[i])).dueDate
      const b = compareAsc(parseISO(a), parseISO(today))
      if (b !== 0) { continue }
      list[`${Object.keys(tasks)[i]}`] = `${localStorage.getItem(Object.keys(tasks)[i])}`
    }

    if (Object.keys(list).length < 1) { return }
    return list
  }

  return { createTask, getTask, retrieveTasks, retrieveTasksUrgent, retrieveTasksByProj, retrieveTasksDueToday }
})()

export { TaskModule as default }
