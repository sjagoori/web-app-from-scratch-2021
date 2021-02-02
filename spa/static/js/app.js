import { printLine, setTitle } from './modules/test.js'

const titles = ['lol', 'lmao', 'testing']
printLine('Hello');

titles.map(key => setTitle(key))
