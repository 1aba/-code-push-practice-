const name = document.getElementById('name')
const password = document.getElementById('password')
const intform = document.getElementById('intform')
const errorElement = document.getElementById('error')


const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

let i = 0

//add event

btn.addEventListener('click', (e)=>{
	console.log(input.value);
	// result.innerHTML += `<li>$(input.value)</li>`
	if(input.value === '') return
	createDeleteElements(input.value)
	input.value = ''
})

//create and delete todo
function createDeleteElements(value){
	i++
	console.log(value)

	const li = document.createElement('li')
	const btn = document.createElement('button')

	li.className = 'li'
	li.textContent = value

	btn.className = 'btn'
	btn.textContent = 'Вилучити'	

	li.appendChild(btn)


//remove todo
	btn.addEventListener('click',(e)=>{
			result.removeChild(li)
			i--
	})

	// toggle class active
	li.addEventListener('click', (e)=>{
		li.classList.toggle('active')
		alert("Викреслено із списку, натисти заново, щоб повернути")
	})	

	total.textContent = i

	result.appendChild(li)
}



intform.addEventListener('.press', (a)=>{
	let messages = []
	if(name.value === '' || name.value == null){
		alert('Name is reguired')
	}
	if(password.length <= 6){
		alert('Passowrd must be longer then 6 characters')
	}
	if(password.length >= 15){
		alert('Passowrd must be less then 15 characters')
	}
	if(password.value === 'password'){
		alert('password is not correct')
	}
	if(messages.length > 0){
			e.preventDefault()
			errorElement.innerText = messages.join(', ')
	}


})



	function openMenu(){
		document.getElementById("sidebar").classList.toggle('active')
	}

		function openLogin(){
		document.getElementById("push").classList.toggle('active')
	}



// try{
//  var Login = {
//   name: "Авторизация",
//   sucessfull: "Успешная авторизация",
//   error: "Пароль не правильный или не введен",

//   login: function(){
//    let login;
//    login = prompt(this.name);

//    if(login == ''){
//     alert(this.sucessfull);
//    }else{
//     alert(this.error);
//    }
//   }
//  };
// }catch(err){
//  console.log("Ошибка");
// }finally{
//  Login.login();

// }

