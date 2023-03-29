import * as Sections from './sections.js'
import TaskModule from './tasks'
import './style.css'

Sections.loadSections()
Sections.defaultTasks()
console.log(TaskModule.retrieveTasksUrgent())