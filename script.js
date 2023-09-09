const currentDay = document.querySelector('.current--day'),
      currentTime = document.querySelector('.current--time'),
      date = new Date(),
      days = date.toUTCString().split(","),
      day = days[0] === 'Sat' ? `${days[0]}urday` : days[0] === 'Tue' ? `${days[0]}sday` : days[0] === 'Wed' ? `${days[0]}nesday` : days[0] === 'Thu' ? `${days[0]}rsday` : `${days[0]}day`


      const returnCurrentTime = () =>{
        const date = new Date(),
        h = date.getUTCHours().toString().length < 2 ? `0${date.getUTCHours()}` : date.getUTCHours(),
        m = date.getUTCMinutes().toString().length < 2 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes(),
        s = date.getUTCSeconds().toString().length < 2 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds(),
        ms = date.getUTCMilliseconds().toString().length < 3 ? `0${date.getUTCMilliseconds()}` : date.getUTCMilliseconds()
     
        currentTime.textContent =  `Current time: ${h}:${m}:${s}:${ms}`
    }

currentDay.textContent = `Current day: ${day}`

setInterval(returnCurrentTime, 1000)