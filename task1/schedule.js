const scheduleData = [
	{ id: 1, name: "Йога", time: "10:00", maxParticipants: 10, currentParticipants: 5 },
	{ id: 2, name: "Пилатес", time: "12:00", maxParticipants: 8, currentParticipants: 8 },
	{ id: 3, name: "Кроссфит", time: "14:00", maxParticipants: 12, currentParticipants: 9 },
	{ id: 4, name: "Бокс", time: "16:00", maxParticipants: 6, currentParticipants: 3 }
];

function loadSchedule() {
	const savedData = JSON.parse(localStorage.getItem("schedule")) || scheduleData;
	const scheduleContainer = document.getElementById("schedule");
	scheduleContainer.innerHTML = "";

	savedData.forEach((session, index) => {
		const isFull = session.currentParticipants >= session.maxParticipants;
		const sessionHTML = `
				<div class="col-md-6 col-lg-4">
					<div class="card mb-4 shadow-sm">
						<div class="card-body">
							<h5 class="card-title">${session.name}</h5>
							<p class="card-text">Время: <strong>${session.time}</strong></p>
							<p class="card-text">Мест: <strong>${session.currentParticipants}/${session.maxParticipants}</strong></p>
							<button class="btn btn-success" onclick="enroll(${index})" ${isFull ? "disabled" : ""}>Записаться</button>
							<button class="btn btn-danger" onclick="cancelEnrollment(${index})" ${session.currentParticipants > 0 ? "" : "disabled"}>Отменить запись</button>
						</div>
					</div>
				</div>
			`;
		scheduleContainer.innerHTML += sessionHTML;
	});

	localStorage.setItem("schedule", JSON.stringify(savedData));
}

function enroll(index) {
	let savedData = JSON.parse(localStorage.getItem("schedule"));
	if (savedData[index].currentParticipants < savedData[index].maxParticipants) {
		savedData[index].currentParticipants++;
		localStorage.setItem("schedule", JSON.stringify(savedData));
		loadSchedule();
	}
}

function cancelEnrollment(index) {
	let savedData = JSON.parse(localStorage.getItem("schedule"));
	if (savedData[index].currentParticipants > 0) {
		savedData[index].currentParticipants--;
		localStorage.setItem("schedule", JSON.stringify(savedData));
		loadSchedule();
	}
}

document.addEventListener("DOMContentLoaded", loadSchedule);