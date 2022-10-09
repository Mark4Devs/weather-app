import { WiHumidity } from 'react-icons/wi';
import { BiWind } from 'react-icons/bi';
import { BsCloudSnow } from 'react-icons/bs';
import moment from 'moment';
import { useState } from 'react';

function Info(props){
    const [isActive, setActive] = useState(false);
    const toggleClass = () =>{
        setActive(!isActive);
    }
    const moment = require('moment');
    const today = moment();
    const icons = [
        '/images/iconNightScatteredClouds.png',
        '/images/iconDayScatteredClouds.png',
        '/images/iconNightLightRain.png',
        '/images/iconDayLightRain.png',
        '/images/iconNightFewClouds.png',
        '/images/iconDayFewClouds.png',
        '/images/iconNightClear.png',
        '/images/iconDayClear.png',
        '/images/iconOvercastClouds.png'


    ]
    const weather = [
        'broken clouds',
        'scattered clouds',
        'light rain',
        'moderate rain',
        'few clouds',
        'clear sky',
        'overcast clouds',
        'rain and snow',
        'snow',
        'light snow'
    ]
    const now = new Date();
    let day2 = new Date(),
    day3 = new Date(),
    day4 = new Date(),
    day5 = new Date(),
    day6 = new Date()
    day2.setDate(now.getDate() + 1)
    day3.setDate(now.getDate() + 2)
    day4.setDate(now.getDate() + 3)
    day5.setDate(now.getDate() + 4)
    day6.setDate(now.getDate() + 5)
    return(
        <div className="info-container">
            <h2>Discover the weather<br/> in your city and around the world</h2>
            <div className="buttons">
                <button onClick={toggleClass} className={!isActive ? 'btn active' : 'btn'}>Today</button>
                <button onClick={toggleClass} className={isActive ? 'btn active' : 'btn'}>5 days</button>
            </div> 
            <table className={!isActive ? 'todays-forcast active' : 'todays-forcast'}>
                               
                {props.data.cod ?
                    <tbody>
                        {props.data.list.filter(data => data.dt_txt.includes(today.format('Y-MM-DD'))).map((item) =>
                            <tr>
                                <td>{moment(item.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    item.weather[0].description === weather[0] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[0] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    item.weather[0].description === weather[0] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[0] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    item.weather[0].description === weather[1] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[1] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    item.weather[0].description === weather[1] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[1] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    item.weather[0].description === weather[2] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[2] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    item.weather[0].description === weather[2] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[2] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    item.weather[0].description === weather[3] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[3] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    item.weather[0].description === weather[3] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[3] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    item.weather[0].description === weather[4] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[4] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    item.weather[0].description === weather[4] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[4] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    item.weather[0].description === weather[5] && moment(item.dt_txt).format('HH') >= 21 || item.weather[0].description === weather[5] && moment(item.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    item.weather[0].description === weather[5] && moment(item.dt_txt).format('HH') <= 21 || item.weather[0].description === weather[5] && moment(item.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    item.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    item.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    item.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    item.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(item.main.temp)}&#176;</td>
                                <td><WiHumidity />{item.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {item.wind.speed.toFixed(1) + 'm/s'}</td>
                            </tr> 
                        )

                        }
                      
                    </tbody>
                : 'not loaded yet'} 
            </table>
            <table className={isActive ? 'days-forcast active' : 'days-forcast'}>

                {props.data.cod ? 
                    <tbody>
                       
                        {props.data.list.filter(data => data.dt_txt.includes((moment(day2).format('Y-MM-DD')))).map((filteredData) =>
                            <tr>
                            <td>{moment(filteredData.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    filteredData.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    filteredData.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    filteredData.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    filteredData.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(filteredData.main.temp)}&#176;</td>
                                <td><WiHumidity />{filteredData.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {filteredData.wind.speed.toFixed(1) + 'm/s'}</td>
                                <td className='colored'>{moment(day2).format('ddd')}</td>
                            </tr>
                        )}
                        {props.data.list.filter(data => data.dt_txt.includes((moment(day3).format('Y-MM-DD')))).map((filteredData) =>
                            <tr>
                            <td>{moment(filteredData.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    filteredData.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    filteredData.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    filteredData.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    filteredData.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(filteredData.main.temp)}&#176;</td>
                                <td><WiHumidity />{filteredData.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {filteredData.wind.speed.toFixed(1) + 'm/s'}</td>
                                <td className='colored'>{moment(day3).format('ddd')}</td>
                            </tr>
                        )}
                        {props.data.list.filter(data => data.dt_txt.includes((moment(day4).format('Y-MM-DD')))).map((filteredData) =>
                            <tr>
                            <td>{moment(filteredData.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    filteredData.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    filteredData.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    filteredData.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    filteredData.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(filteredData.main.temp)}&#176;</td>
                                <td><WiHumidity />{filteredData.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {filteredData.wind.speed.toFixed(1) + 'm/s'}</td>
                                <td className='colored'>{moment(day4).format('ddd')}</td>
                            </tr>
                        )}
                         {props.data.list.filter(data => data.dt_txt.includes((moment(day5).format('Y-MM-DD')))).map((filteredData) =>
                            <tr>
                            <td>{moment(filteredData.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    filteredData.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    filteredData.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    filteredData.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    filteredData.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(filteredData.main.temp)}&#176;</td>
                                <td><WiHumidity />{filteredData.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {filteredData.wind.speed.toFixed(1) + 'm/s'}</td>
                                <td className='colored'>{moment(day5).format('ddd')}</td>
                            </tr>
                        )}
                        {props.data.list.filter(data => data.dt_txt.includes((moment(day6).format('Y-MM-DD ')))).map((filteredData) =>
                            <tr>
                            <td>{moment(filteredData.dt_txt).format('HH:mm')}</td>
                                <td>{
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //broken clouds night 
                                    filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[0] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //broken clouds day
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[0]}/> : //scattered clouds night 
                                    filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[1] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[1]}/> : //scattered clouds day  
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //light rain night
                                    filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[2] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //light rain day
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[2]}/> : //moderate rain night
                                    filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[3] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[3]}/> : //moderate rain day
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[4]}/> : //few clouds night
                                    filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[4] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[5]}/> : //few clouds day
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') >= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') < 6 ? <img src={icons[6]}/> : //clear sky night
                                    filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') <= 21 || filteredData.weather[0].description === weather[5] && moment(filteredData.dt_txt).format('HH') > 6 ? <img src={icons[7]}/> : //clear sky day
                                    filteredData.weather[0].description === weather[6] ? <img src={icons[8]}/> : //overcast clouds
                                    filteredData.weather[0].description === weather[7] ? <BsCloudSnow/> : //rain and snow
                                    filteredData.weather[0].description === weather[8] ? <BsCloudSnow/> : //snow
                                    filteredData.weather[0].description === weather[9] ? <BsCloudSnow/> : //light snow
                                    null}</td>
                                <td>{Math.round(filteredData.main.temp)}&#176;</td>
                                <td><WiHumidity />{filteredData.main.humidity + '%'}</td>
                                <td><BiWind className='wind' /> {filteredData.wind.speed.toFixed(1) + 'm/s'}</td>
                                <td className='colored'>{moment(day6).format('ddd')}</td>
                            </tr>
                        )}
                    </tbody> 
                    : 'not loaded yet'}
                
            </table>
        </div>
    )   
}

export default Info;