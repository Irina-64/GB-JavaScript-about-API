const accessKey = 'ds4j_5RvNIgCK5WA_Q17RNs6tx4aMLN3apWOVYdp3AUUNSPLASH_ACCESS_KEY';
const photoElement = document.getElementById('photo');
const photographerElement = document.getElementById('photographer');
const likeButton = document.getElementById('like-btn');
const likeCountElement = document.getElementById('like-count');

async function fetchPhoto() {
	const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
	const data = await response.json();

	photoElement.src = data.urls.regular;
	photographerElement.textContent = data.user.name;
	photographerElement.href = data.user.links.html;

	const savedLikes = localStorage.getItem(data.id) || 0;
	likeCountElement.textContent = savedLikes;
	likeButton.onclick = () => {
		const currentLikes = parseInt(localStorage.getItem(data.id) || 0) + 1;
		localStorage.setItem(data.id, currentLikes);
		likeCountElement.textContent = currentLikes;
	};
}

fetchPhoto();
