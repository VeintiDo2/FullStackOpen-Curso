const Weather = ({ weather }) => {

    const weatherInfo = () => {
        if (Object.values(weather).length <= 0) {
            return null
        } else {
            return (<div>
                <h1>{`Weather in ${weather.name}`}</h1>
                <h2>{`Temperature: ${weather.main.temp} celcius`}</h2>
                <h2>{`Wind: ${weather.wind.speed} m/s`}</h2>
                <h2>{`Cloudiness: ${weather.clouds.all}%`}</h2>
            </div>
            )
        }
    }

    return (
        <section>
            {weatherInfo()}
        </section>
    );
}

export default Weather;