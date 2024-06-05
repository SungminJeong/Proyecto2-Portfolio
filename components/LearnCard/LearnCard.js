import './LearnCard.css';
import '../../data/learns';

export const LearnCard = (learn)=>{
	const template = `
	<a href="${learn.link}">
	<img src="${learn.img}" alt="${learn.description}">
	<h2>Learn ${learn.description}</h2>
	<p>Basic of ${learn.title}</p>
	</a>
	`

	return template;
}