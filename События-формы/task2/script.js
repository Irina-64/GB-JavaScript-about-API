        const slides = document.querySelectorAll(".slide");
        const slider = document.querySelector(".slider");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const indicatorsContainer = document.querySelector(".indicators");
        let currentIndex = 0;

        // Создание индикаторов
        slides.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("indicator");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => moveToSlide(index));
            indicatorsContainer.appendChild(dot);
        });

        function updateIndicators() {
            document.querySelectorAll(".indicator").forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        function moveToSlide(index) {
            currentIndex = (index + slides.length) % slides.length; // Зацикливание
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateIndicators();
        }

        prevBtn.addEventListener("click", () => moveToSlide(currentIndex - 1));
        nextBtn.addEventListener("click", () => moveToSlide(currentIndex + 1));

        setInterval(() => moveToSlide(currentIndex + 1), 5000); // Автопереключение каждые 5 секунд
