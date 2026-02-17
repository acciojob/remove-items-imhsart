//your JS code here. If required.
let removeBtn = document.querySelector('input')
let selector = document.getElementById('colorSelect')
removeBtn.addEventListener('click', ()=>{
	let value = selector.value
	let option = document.querySelector(`[value=${value}]`)
	option.remove()
})