const cars = [
	{
		img: 'https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Honda Civic 2022',
		desc: 'Reliable, efficient, and stylish.'
	},
	{
		img: 'https://images.unsplash.com/photo-1626072557464-90403d788e8d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Toyota Corolla Cross',
		desc: 'Compact SUV with modern features.'
	},
	{
		img: 'https://images.unsplash.com/photo-1621776887753-fe3c3239555a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Ford Mustang GT',
		desc: 'Muscle car with thrilling performance.'
	},
	{
		img: 'https://images.unsplash.com/photo-1610998342124-c4fcba4cf4bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'BMW 3 Series',
		desc: 'Refined performance and luxury sedan feel.'
	},
	{
		img: 'https://images.unsplash.com/photo-1647934441921-4ed1e182e4b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Hyundai Ioniq 5',
		desc: 'Futuristic EV with smart tech and range.'
	}
];

const gallery = document.getElementById('gallery');
cars.forEach(car => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = `
    <img src="${car.img}" alt="${car.title}">
    <h3>${car.title}</h3>
    <p>${car.desc}</p>
`;
	gallery.appendChild(card);
});

document.getElementById('leftBtn').addEventListener('click', () => {
	gallery.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('rightBtn').addEventListener('click', () => {
	gallery.scrollBy({ left: 300, behavior: 'smooth' });
});
