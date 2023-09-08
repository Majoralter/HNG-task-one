const currentDay = document.querySelector('.current--day'),
      currentTime = document.querySelector('.current--time'),
      date = new Date(),
      days = date.toUTCString().split(","),
      day = `${days[0]}day`


      const returnCurrentTime = () =>{
        let h = date.getUTCHours().toString().length < 2 ? `0${date.getUTCHours()}` : date.getUTCHours(),
        m = date.getUTCMinutes().toString().length < 2 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes(),
        s = date.getUTCSeconds().toString().length < 2 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds(),
        ms = date.getUTCMilliseconds().toString().length < 3 ? `0${date.getUTCMilliseconds()}` : date.getUTCMilliseconds()
     
        currentTime.textContent =  `Current time: ${h}:${m}:${s}:${ms}`
    }

currentDay.textContent = `Current day: ${day}`

window.addEventListener("load", returnCurrentTime())
setInterval(returnCurrentTime, 1000)