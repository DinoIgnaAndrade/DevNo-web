import { useEffect, useState } from 'react';
import { ApiOWConstant } from '../constants/ApiOWConstant';

const useOpenWeatherService = (lat: number, lon: number) => {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [description, setDescription] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [precipitation, setPrecipitation] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);
    const [speedWind, setSpeedWind] = useState<number>(0);
    const [weatherIcon, setWeatherIcon] = useState<string>('');
    const [dailyForecast, setDailyForecast] = useState<{ icon: string; temp: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ApiOWConstant.getUrl(lat, lon));
                if (!response.ok) {
                    throw new Error('Error de conexión');
                }
                const data = await response.json();
                
                if (data.name && data.name !== 'Globe') {
                    setTemperature(data.main.temp);
                    setDescription(data.weather[0].description);
                    setLocation(data.name);
                    setPrecipitation(data.rain?.['1h'] ?? 0);
                    setHumidity(data.main.humidity);
                    setSpeedWind(data.wind.speed);
                    setWeatherIcon(data.weather[0].icon);
                }
            } catch (error) {
                console.error('Error de fetch en OpenWeatherService', error);
            }
        };

        fetchData();
    }, [lat, lon]);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const response = await fetch(ApiOWConstant.getForecastUrl(lat, lon));
                if (!response.ok) {
                    throw new Error('Error de conexión');
                }
                
                const data = await response.json();
                const dailyForecastData = data.list.slice(1, 5);
                const mappedForecast = dailyForecastData.map((forecast: { weather: { icon: string }[]; main: { temp: number } }) => ({
                    icon: forecast.weather[0].icon,
                    temp: Math.round(forecast.main.temp - 273.15),
                }));

                setDailyForecast(mappedForecast);
            } catch (error) {
                console.error('Error de fetch en OpenWeatherService (Forecast)', error);
            }
        };

        fetchForecast();
    }, [lat, lon]);

    return {
        temperature,
        description,
        location,
        precipitation,
        humidity,
        speedWind,
        weatherIcon,
        dailyForecast,
    };
};

export default useOpenWeatherService;
