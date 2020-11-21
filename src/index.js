import './sass/main.scss'

const tick = 1000

const backgroundColors = [
	'#4fc3f7',
	'#9575cd',
	'#aed581',
	'#7986cb',
	'#fff176',
	'#4db6ac',
	'#e57373',
	'#81c784',
	'#dce775',
	'#a1887f',
	'#ffd54f',
	'#ba68c8',
	'#4dd0e1',
	'#ffb74d',
	'#b0bec5',
	'#ff8a65',
	'#bdbdbd',
	'#64b5f6',
]

const letterColors = [
	'#ef5350',
	'#ff4081',
	'#6a1b9a',
	'#aa00ff',
	'#673ab7',
	'#651fff',
	'#4527a0',
	'#303f9f',
	'#3d5afe',
	'#1e88e5',
	'#2962ff',
	'#26c6da',
	'#18ffff',
	'#00796b',
	'#388e3c',
	'#1b5e20',
	'#558b2f',
	'#afb42b',
	'#ff6f00',
	'#ffd600',
	'#ffa000',
	'#ff9800',
	'#ff6d00',
	'#ff5722',
	'#4e342e',
	'#212121',
	'#424242',
	'#607d8b',
	'#263238',
]

const words = [
	'alya',
	'is',
	'cool',
	'alya',
	'is',
	'nice',
	'alya',
	'is',
	'wise',
]
let wordsCounter = 0

const renderWord = (word, negative, background) => {
	const container = document.querySelector('.container')

	const color = negative ? '#ffffff' : letterColors[Math.floor(Math.random() * letterColors.length)]
	const wordTemplate = `<div class="effect effect-transition glitch" data-trick="${word}">${ word }</div>`

	container.style.setProperty('--background', background)
	container.style.setProperty('--color', color)
	container.style.setProperty('--shadow', `${color} 0px 0px 25px`)

	container.innerHTML = wordTemplate
	const wordElement = document.querySelector('.container div')
	setTimeout(() => {
		wordElement.classList.remove('effect')
	}, 50)
}

let negativeCounter = 0

setInterval(() => {
	const body = document.querySelector('body')
	const background = negativeCounter === 2
		? '#212121'
		: backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
	body.style.setProperty('--background', background)
	body.style.setProperty('--shadow', `0 0 400px ${background} inset`)
	if (negativeCounter === 2) {
		body.classList.add('egg')
	} else {
		body.classList.remove('egg')
	}

	renderWord(words[wordsCounter], negativeCounter === 2, background)
	wordsCounter++
	if (wordsCounter === words.length) wordsCounter = 0

	negativeCounter++
	if (negativeCounter === 3) negativeCounter = 0
}, tick)

const docWidth = document.documentElement.clientWidth
const docHeight = document.documentElement.clientHeight

const wrapper = document.querySelector('.wrapper')
const parallaxRate = 30

document.addEventListener('mousemove', ({ clientX, clientY }) => {
	const x = Math.floor((clientX - docWidth / 2) / parallaxRate) * -1
	const y = Math.floor((clientY - docHeight / 2) / parallaxRate) * -1

	wrapper.style.setProperty('--parallax', `translate(${x}px, ${y}px)`)
})
