import './src/2.js'
import './src/assets/5.css'
import './src/assets/3.css'
import { heading as headingColor } from './src/assets/4a.module.css'
import { heading as headingSize } from './src/assets/4b.module.css'
import './src/assets/6.scss'
import data from './src/assets/7.json'
import imageUrl from './src/assets/images/javascript.svg'
const modules = import.meta.glob('./src/10/*.js', { import: 'name' }) // extra object with settings { as: 'url' | 'raw', eager: true, import: 'name' | 'default'}

// import styles from './src/assets/3.css?inline'

// const stylesEl = document.createElement('style')

// stylesEl.innerText = styles

// document.querySelector('head').append(stylesEl)

document.querySelector('.heading').className = `${headingColor} ${headingSize}`

console.log('data: ', data)

const img = document.querySelector('#image')
img.setAttribute('src', imageUrl)

console.log(modules)
document.addEventListener('click', () => {
	Object.values(modules).forEach((module) => module().then((name) => console.log('name: ', name)))
})
