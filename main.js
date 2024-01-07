import './src/2.js'
import './src/assets/5.css'
import './src/assets/3.css'
import { heading as headingColor } from './src/assets/4a.module.css'
import { heading as headingSize } from './src/assets/4b.module.css'

// import styles from './src/assets/3.css?inline'

// const stylesEl = document.createElement('style')

// stylesEl.innerText = styles

// document.querySelector('head').append(stylesEl)

document.querySelector('.heading').className = `${headingColor} ${headingSize}`
