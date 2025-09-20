
// Data for weather cards
const weatherData = [
    {
        type: 'summer',
        temperature: '35°C',
        location: 'Karachi',
        time: 'Friday 12:38'
    },
    {
        type: 'spring',
        temperature: '19°C',
        location: 'Skardu Valley',
        time: 'Tuesday 22:15'
    },
    {
        type: 'autumn',
        temperature: '14°C',
        location: 'Khaplu',
        time: 'Tuesday 12:15'
    },
    {
        type: 'winter',
        temperature: '-8°C',
        location: 'Murree',
        time: 'Sunday 6:45 AM'
    },
    {
        type: 'rainy',
        temperature: '28°C',
        location: 'Lahore',
        time: 'Sunday 6:45 AM'
    },
    {
        type: 'thunderstorm',
        temperature: '15°C',
        location: 'Islamabad',
        time: 'Sunday 12:10 AM'
    }
];

// Function to generate carousel items
function generateCarouselItems() {
    const carousel = document.querySelector('.carousel');
    weatherData.forEach((weather, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');
        item.innerHTML = `
            <div class="weather-card ${weather.type}">
                <div>${weather.type.charAt(0).toUpperCase() + weather.type.slice(1)}</div>
                <div>${weather.temperature}</div>
                <div>${weather.location}</div>
                <div>${weather.time}</div>
            </div>
        `;
        carousel.appendChild(item);
    });
}
