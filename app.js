// get options
let dailyBtn = document.querySelector('#daily')
let weeklyBtn = document.querySelector('#weekly')
let monthlyBtn = document.querySelector('#monthly')
// get values
let current = document.querySelectorAll('.hours')
let last = document.querySelectorAll('.last-hours')

fetch('data.json')
.then( resp => {return resp.json()} )
.then( data => {
    let daily = []
    let weekly = []
    let monthly = []
    for(let i=0;i<data.length;i++) {
        daily.push(data[i].timeframes.daily)
        weekly.push(data[i].timeframes.weekly)
        monthly.push(data[i].timeframes.monthly)
    }

    // on page load, weekly option is default
    let i = 0
    current.forEach(hours => {
        hours.innerHTML = weekly[i].current + 'hrs'; 
        i += 1; 
    } )
    i = 0
    last.forEach(hours => {
        hours.innerHTML = 'Last Week - ' + weekly[i].previous + 'hrs'; 
        i += 1; 
    } )


    // if daily button is clicked
    dailyBtn.addEventListener("click", ()=>{

        dailyBtn.classList.add("active")
        weeklyBtn.classList.remove("active")
        weeklyBtn.classList.add("normal")
        monthlyBtn.classList.remove("active")
        monthlyBtn.classList.add("normal")

        let i = 0
        current.forEach(hours => {
            hours.innerHTML = daily[i].current + 'hrs'; 
            i += 1; 
        } )
        i = 0
        last.forEach(hours => {
            hours.innerHTML = 'Last Week - ' + daily[i].previous + 'hrs'; 
            i += 1; 
        } )
    })

    //if weekly button is clicked
    weeklyBtn.addEventListener("click", ()=>{

        weeklyBtn.classList.add("active")
        dailyBtn.classList.remove("active")
        weeklyBtn.classList.add("normal")
        monthlyBtn.classList.remove("active")
        monthlyBtn.classList.add("normal")

        let i = 0
        current.forEach(hours => {
            hours.innerHTML = weekly[i].current + 'hrs'; 
            i += 1; 
        } )
        i = 0
        last.forEach(hours => {
            hours.innerHTML = 'Last Week - ' + weekly[i].previous + 'hrs'; 
            i += 1; 
        } )
    })

    //if monthly button is clicked
    monthlyBtn.addEventListener("click", ()=>{

        monthlyBtn.classList.add("active")
        weeklyBtn.classList.remove("active")
        weeklyBtn.classList.add("normal")
        dailyBtn.classList.remove("active")
        dailyBtn.classList.add("normal")

        let i = 0
        current.forEach(hours => {
            hours.innerHTML = monthly[i].current + 'hrs'; 
            i += 1; 
        } )
        i = 0
        last.forEach(hours => {
            hours.innerHTML = 'Last Week - ' + monthly[i].previous + 'hrs'; 
            i += 1; 
        } )
    })

})