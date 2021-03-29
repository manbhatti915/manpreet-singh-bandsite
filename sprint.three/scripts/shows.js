const apiKey = "?api_key=37b5fb95-cc36-4524-9e52-9b4b4f473f19";
const apiUrl = "https://project-1-api.herokuapp.com";
const apiEndpoint = "/showdates";
const shows = document.querySelector(".shows");

function firstMainDiv(showsStack) {
	showsStack.forEach((show) => {
		const mainDiv = document.createElement("div");
		mainDiv.classList.add("shows__first");
		shows.appendChild(mainDiv);

		const divDate = document.createElement("div");
		divDate.classList.add("shows__date");
		mainDiv.appendChild(divDate);
		const divDateTitle = document.createElement("p");
		divDate.appendChild(divDateTitle);
		divDateTitle.innerText = "DATE";
		const divDateInfo = document.createElement("p");
		divDate.appendChild(divDateInfo);
		divDateInfo.innerText = show.date;

		const divVenue = document.createElement("div");
		divVenue.classList.add("shows__venue");
		mainDiv.appendChild(divVenue);
		const divVenueTitle = document.createElement("p");
		divVenue.appendChild(divVenueTitle);
		divVenueTitle.innerText = "VENUE";
		const divVenueInfo = document.createElement("p");
		divVenue.appendChild(divVenueInfo);
		divVenueInfo.innerText = show.place;

		const divLocation = document.createElement("div");
		divLocation.classList.add("shows__location");
		mainDiv.appendChild(divLocation);
		const divLocationTitle = document.createElement("p");
		divLocation.appendChild(divLocationTitle);
		divLocationTitle.innerText = "LOCATION";
		const divLocationInfo = document.createElement("p");
		divLocation.appendChild(divLocationInfo);
		divLocationInfo.innerText = show.location;

		const divTickets = document.createElement("div");
		divTickets.classList.add("shows__tickets");
		mainDiv.appendChild(divTickets);
		const divButton = document.createElement("button");
		divTickets.appendChild(divButton);
		divButton.innerText = "Buy tickets";
	});
}

function getShows() {
	axios
		.get(apiUrl + apiEndpoint + apiKey)
		.then((response) => {
			let showData = response.data;
			firstMainDiv(showData);
		})
		.catch((error) => {
			console.log(error);
		});
}
getShows();
