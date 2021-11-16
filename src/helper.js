export function receiveHours (hourOne, hourTwo){
    let hourIni = hourOne;
    let hourEnd = hourTwo;
    
    let minutesIni = hourIni.split(':').reduce((h,m) => parseInt(h) * 60 + parseInt(m));
    let minutesEnd = hourEnd.split(':').reduce((h,m) => parseInt(h) * 60 + parseInt(m));

    let diference = minutesEnd - minutesIni;
    
    let hoursF = Math.floor(diference / 60);
    let minutesF = diference % 60;

    if (hoursF < 10 && minutesF < 10){
        return `0${hoursF}:0${minutesF}`
    } else if ( hoursF < 10 && minutesF > 10){
        return `0${hoursF}:${minutesF}`
    } else if (hoursF >= 10 && minutesF < 10){
        return `${hoursF}:0${minutesF}`
    } else {
        return `${hoursF}:${minutesF}`
    }

    // let hoursCont = `${hoursF}: ${minutesF}`;
    //  return hoursCont;
}