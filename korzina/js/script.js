function myFirstApp (name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = [
			"HTML",
			"CSS",
			"JavaScript",
			"1C-Bitrix",
			"Java"
		];

		let jsMySkill = document.getElementsByClassName("jsMySkill")[0];
		
		for(let i = 0; i < skills.length; i++) {
			let li = document.createElement('li');
			li.innerHTML = skills[i];
			jsMySkill.appendChild(li);
		}

		

		function checkAge() {
			if (age > 18) {
				alert("тебе больше 18");
			} else {
				alert("тебе меньше 18");
			}
		}

		function calcPow(num) {
			return Math.pow(num, 2);
		}

		console.log(calcPow(age));
		checkAge();
		
	}

	showSkills();

}

myFirstApp("Oleg", "27");
