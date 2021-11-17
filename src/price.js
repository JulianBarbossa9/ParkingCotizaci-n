export function priceMinute  (hourOne, hourTwo, type) {
    let hourIni = hourOne;
    let hourEnd = hourTwo;

    let minutesIni = hourIni.split(':').reduce((h,m) => parseInt(h) * 60 + parseInt(m));
    let minutesEnd = hourEnd.split(':').reduce((h,m) => parseInt(h) * 60 + parseInt(m));

    let diference = minutesEnd - minutesIni;
    
    let hoursF = Math.floor(diference / 60);
    let minutesF = diference % 60;

    if (type === 'car'){
        let finalPrice = (hoursF * 60 * 78) + (minutesF * 78);
        return `$${finalPrice}`;
    } else {
        let finalPrice = (hoursF * 60 * 74) + (minutesF * 74);
        return `$${finalPrice}`;
    }
}