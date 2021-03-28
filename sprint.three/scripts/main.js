const apiKey = "?api_key=37b5fb95-cc36-4524-9e52-9b4b4f473f19";

const apiUrl = "https://project-1-api.herokuapp.com";

const apiEndpoint = "/comments";
console.log(apiUrl + apiEndpoint + apiKey);

const commentSection = document.querySelector(".form__comments");

const image = "./assets/Images/Mohan-muruge.jpg";
function newCommentsLi(commentData) {
	commentData.forEach(function (listData) {
		let commentsList = document.createElement("ul");
		commentsList.classList.add("form__list");

		//making new li under first list

		let commentsListItem = document.createElement("li");
		commentsListItem.classList.add("form__li");

		//to make an image for the comments done by users

		let userImage = document.createElement("img");
		userImage.classList.add("form__image");
		userImage.setAttribute("src", image);

		let commentsContainer = document.createElement("div");
		commentsContainer.classList.add("form__container");

		let pTagName = document.createElement("p");
		pTagName.classList.add("form__user");
		pTagName.innerText = listData.name;

		let pTagDate = document.createElement("p");
		pTagDate.classList.add("form__date");
		let currentDate = new Date(listData.timestamp);
		pTagDate.innerText = currentDate.toLocaleDateString();

		let pTagComment = document.createElement("p");
		pTagComment.classList.add("form__comment");
		pTagComment.innerText = listData.comment;

		commentsList.appendChild(commentsListItem);
		commentsListItem.appendChild(userImage);
		commentsListItem.appendChild(commentsContainer);

		commentsContainer.appendChild(pTagName);
		commentsContainer.appendChild(pTagDate);
		commentsContainer.appendChild(pTagComment);

		commentSection.appendChild(commentsList);
	});
}

function axiosComments() {
	axios
		.get(apiUrl + apiEndpoint + apiKey)
		.then((response) => {
			const axiosNewComments = response.data;
			response.data.sort(function (a, b) {
				return b.timestamp - a.timestamp;
			});
			// console.log(axiosNewComments);
			newCommentsLi(axiosNewComments);
		})
		.catch((error) => {
			console.log(error);
		});
}
axiosComments();

const formSubmit = document.querySelector(".form__container");
formSubmit.addEventListener("submit", function (e) {
	e.preventDefault();
	commentSection.innerHTML = " ";
	let allComments = document.querySelectorAll(".form__list");
	allComments.forEach((singleComment) => {
		singleComment.remove();
	});
	let addNameInput = e.target.userNameInput.value;
	let addCommentInput = e.target.commentInput.value;
	axios
		.post(apiUrl + apiEndpoint + apiKey, {
			name: addNameInput,
			comment: addCommentInput,
		})
		.then(() => {
			axiosComments();
		})
		.catch((error) => {
			console.log(error);
		});
	e.target.reset();
});
