'use scrict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = employers.filter(item => item.length > 0 && item.trim() !== '');;

for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own = 0) => typeof own === 'object' ? own.reduce((accum, item) => accum + item) : own;

const lesson = calcCash(data.cash);

const makeBusiness = ([director, teacher = 'Максим', allModule, gang, course]) => {
	const [jsx] = data.react;
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}
Первое что изучим будет ${jsx}. Он очень похож на HTML!
Технологии которые мы изучим: 
${sumTech}`);
}

makeBusiness(['Артем', , lesson, command, nameCourse]);
