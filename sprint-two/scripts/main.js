const commentsArray = [
	{
		name: "Michael Lyons",
		comment:
			"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
		date: "12/18/2018",
		image: "./assets/Images/Mohan-muruge.jpg",
	},
	{
		name: "Gary Wong",
		comment:
			"Every time I see him shred i feel so motivated to get off my couch and hop on my board. He is so talented! I wish I can ride like him opne day so I can really enjoy myself!",
		date: "12/12/2018",
		image: "./assets/Images/Mohan-muruge.jpg",
	},
	{
		name: "Theodore Duncan",
		comment:
			"Every time I see him shred i feel so motivated to get off my couch and hop on my board. He is so talented! I wish I can ride like him opne day so I can really enjoy myself!",
		date: "11/15/2018",
		image: "./assets/Images/Mohan-muruge.jpg",
	},
];

const commentSection = document.querySelector(".form");

function newCommentsLi() {
	for (i = 0; i < commentsArray.length; i++) {
		let commentsList = document.createElement("ul");
		commentsList.classList.add("form__list");

		//making new li under first list

		let commentsListItem = document.createElement("li");
		commentsListItem.classList.add("form__li");

		//to make an image for the comments done by users

		let userImage = document.createElement("img");
		userImage.classList.add("form__image");
		userImage.setAttribute("src", commentsArray[i].image);

		let commentsContainer = document.createElement("div");
		commentsContainer.classList.add("form__container");

		let pTagName = document.createElement("p");
		pTagName.classList.add("form__user");
		pTagName.innerText = commentsArray[i].name;

		let pTagDate = document.createElement("p");
		pTagDate.classList.add("form__date");
		pTagDate.innerText = commentsArray[i].date;

		let pTagComment = document.createElement("p");
		pTagComment.classList.add("form__comment");
		pTagComment.innerText = commentsArray[i].comment;

		commentsList.appendChild(commentsListItem);
		commentsListItem.appendChild(userImage);
		commentsListItem.appendChild(commentsContainer);

		commentsContainer.appendChild(pTagName);
		commentsContainer.appendChild(pTagDate);
		commentsContainer.appendChild(pTagComment);

		commentSection.appendChild(commentsList);
	}
}
newCommentsLi();

const formSubmit = document.querySelector(".form__container");
formSubmit.addEventListener("submit", function (e) {
	e.preventDefault();
	let allComments = document.querySelectorAll(".form__list");
	allComments.forEach((singleComment) => {
		singleComment.remove();
	});
	let nameInput = e.target.querySelector(".form__input").value;

	let commentInput = e.target.querySelector(".form__textarea").value;

	commentsArray.unshift({
		name: nameInput,
		comment: commentInput,
		date: "today",
		image: "./assets/Images/Mohan-muruge.jpg",
	});
	e.target.reset();
	newCommentsLi();
});
