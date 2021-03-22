const commentForm = document.querySelector(".form__container");
const commentsContainer = document.querySelector(".comments");

commentForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const nameInput = commentForm.elements.name;
	const commentInput = commentForm.elements.conversation;

	addComment(nameInput.value, commentInput.value);
	nameInput.value = "";
	commentInput.value = "";
});

const addComment = (name, conversation) => {
	const newName = document.createElement("b");
	newName.classList.add("comments__name");
	const newComment = document.createElement("li");
	newComment.classList.add("comments__list");

	const newDiv = document.createElement("div");
	newDiv.appendChild(newName, newComment);

	newName.append(`${name}`);
	commentsContainer.append(newName);
	newComment.append(`${conversation}`);
	commentsContainer.append(newComment);
	commentsContainer.append(newDiv);
};
