'use client';
import React, { useEffect, useState } from 'react';

import { IconType } from 'react-icons';
import {
    WiDaySunny, WiMoonAltFull, WiDayCloudy, WiNightAltCloudy, WiCloud, WiCloudy, WiDayRain, WiNightAltRain, WiHumidity,
    WiDayLightning, WiNightAltSleetStorm, WiDaySnow, WiNightAltSnowWind, WiFog, WiStrongWind, WiSprinkle
} from "react-icons/wi";

import styles from './Weather.module.css';
import useOpenWeatherService from '../../services/OpenWeatherService';

const Weather: React.FC = () => {

    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const [day, month, year] = new Date(Date.now()).toLocaleDateString('en-US').split('/');

    const [datesArray, setDatesArray] = useState<string[]>([]);

    type WeatherIconMap = {
        [key: string]: IconType;
    };
    const weatherIconMap = {
        '01d': <WiDaySunny className={styles.icon} />,
        '01n': <WiMoonAltFull className={styles.icon} />,
        '02d': <WiDayCloudy className={styles.icon} />,
        '02n': <WiNightAltCloudy className={styles.icon} />,
        '03d': <WiCloud className={styles.icon} />,
        '03n': <WiCloud className={styles.icon} />,
        '04d': <WiCloudy className={styles.icon} />,
        '04n': <WiCloudy className={styles.icon} />,
        '09d': <WiDayRain className={styles.icon} />,
        '09n': <WiNightAltRain className={styles.icon} />,
        '10d': <WiDayRain className={styles.icon} />,
        '10n': <WiNightAltRain className={styles.icon} />,
        '11d': <WiDayLightning className={styles.icon} />,
        '11n': <WiNightAltSleetStorm className={styles.icon} />,
        '13d': <WiDaySnow className={styles.icon} />,
        '13n': <WiNightAltSnowWind className={styles.icon} />,
        '50d': <WiFog className={styles.icon} />,
        '50n': <WiFog className={styles.icon} />,
    };

    if(datesArray.length === 0) { 
        let newDatesArray = [];
        for (let i = 0; i < 5; i++) {
            const nextDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
            let dayOfWeek;
            if(i === 0) {
                dayOfWeek = nextDate.toLocaleDateString('en-US', { weekday: 'long' });
            } else {
                dayOfWeek = nextDate.toLocaleDateString('en-US', { weekday: 'short' });
            }
            newDatesArray.push(dayOfWeek);
        }
        setDatesArray(newDatesArray);
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            // Obtiene la ubicación del usuario
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, (error) => {
                console.error("Error al obtener la ubicación", error);
            });
        } else {
            console.log("La geolocalización no está disponible en este navegador");
        }
    }, [])



    const {
        temperature,
        description,
        location,
        precipitation,
        humidity,
        speedWind,
        weatherIcon,
        dailyForecast,
    } = useOpenWeatherService(latitude, longitude);

    return (
        <div className={styles.container}>

            <div className={styles.leftContainer}>

                <div className={styles.todayInfo}>
                    <h2>{datesArray[0]}</h2>
                    <div className={styles.locationContainer}>
                        <h3>{day}/{month}/{year}</h3>
                        <span>{location}</span>
                    </div>
                </div>

                <div className={styles.todayWeather}>
                    {weatherIconMap[weatherIcon as keyof typeof weatherIconMap]}
                    <h1 className={styles.temperature}>{temperature ? (temperature - 273.15).toFixed(0) : 0}</h1>
                    <h3>{description}</h3>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.dayInfo}>
                    <div className={styles.info}>
                        <WiSprinkle size={20} />
                        <span className={styles.precipitation}>Precipitation </span>
                        <span className={styles.value}>{precipitation}%</span>
                    </div>
                    <div className={styles.info}>
                        <WiHumidity size={20} />
                        <span className={styles.Humidity}>Humidity </span>
                        <span className={styles.value}>{humidity}%</span>
                    </div>
                    <div className={styles.info}>
                        <WiStrongWind size={20} />
                        <span className={styles.windSpeed}>Wind Speed </span>
                        <span className={styles.value}>{speedWind}km/h</span>
                    </div>
                </div>

                <div className={styles.daysList}>
                    {dailyForecast.map((data, index) => (
                        <div key={index} className={styles.days}>
                            <h6 className={styles.day}>{datesArray[index + 1]}</h6>
                            <p>{data.temp} °C</p>
                            {weatherIconMap[data.icon as keyof typeof weatherIconMap]}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Weather;