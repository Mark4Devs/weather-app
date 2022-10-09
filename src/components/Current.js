

function Current(props) { 
    const moment = require('moment');
    const today = moment();
    const backgrounds = [
        '/images/nightClear.png',
        '/images/dayClear.png',
        '/images/cloudsNight.png',
        '/images/cloudsDay.png',
        '/images/rain.png',
        '/images/snowBackground.png'
    ];
    const weather = [
        'Clear',
        'Clouds',
        'Rain',
        'Snow'
    ]





    return(
        <div className="current-container-backgrounds">
            {props.data.name ?
                <div className="current-container"  style={ props.data.weather[0].main === weather[0] && today.format('HH') <= 21 || props.data.weather[0].main === weather[0] && today.format('HH') > 6 ? {background: `url(${backgrounds[1]})`} : 
                props.data.weather[0].main === weather[0] && today.format('HH') >= 21 || props.data.weather[0].main === weather[0] && today.format('HH') < 6 ? {background: `url(${backgrounds[0]})`} : 
                props.data.weather[0].main === weather[1] && today.format('HH') <= 21 || props.data.weather[0].main === weather[1] && today.format('HH') > 6 ? {background: `url(${backgrounds[3]})`} :
                props.data.weather[0].main === weather[1] && today.format('HH') >= 21 || props.data.weather[0].main === weather[1] && today.format('HH') < 6 ? {background: `url(${backgrounds[2]})`} : 
                props.data.weather[0].main === weather[2] ? {background: `url(${backgrounds[4]})`} :
                props.data.weather[0].main === weather[3] ? {background: `url(${backgrounds[5]})`} : null }>
                    <section>
                        <h4>Today</h4>
                        <span className="date">{today.format('ddd, D MMM')}</span>
                        <h2>{Math.round(props.data.main.temp)}&#176;</h2>
                        <span className="location">{props.data.name + ', ' + props.data.sys.country}</span>
                        <p>Feels like <span> {Math.round(props.data.main.feels_like)}</span> <span style={{margin: '0 3%'}}>/</span>  Weather: <span> {props.data.weather[0].main}</span></p>
                    </section>
                </div>
            : 'not loaded yet'}
        </div>
    )
}

export default Current; 