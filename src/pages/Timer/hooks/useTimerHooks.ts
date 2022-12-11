import { useState, useMemo, useEffect } from 'react'

import {
  secondsToMilliseconds,
  minutesToMilliseconds,
  hoursToMilliseconds,
  hoursToSeconds,
  minutesToSeconds,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  intervalToDuration
} from 'date-fns'

export enum Mode {
  Edit,
  Countdown,
}

type Interval = string | number | NodeJS.Timeout | undefined

function useTimerHooks() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState<Interval>(0)
  const [mode, setMode] = useState<Mode>(Mode.Edit)

  const [choosenHours, setChoosenHours] = useState(0)
  const [choosenMinutes, setChoosenMinutes] = useState(0)
  const [choosenSeconds, setChoosenSeconds] = useState(0)

  const dateInSeconds = () => {
    const minutesToTimeStamp = minutesToSeconds(minutes);
    const hoursToTimestamp = hoursToSeconds(hours);
    // return secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp;
    const totalSeconds =  seconds + minutesToTimeStamp + hoursToTimestamp
    return seconds + minutesToTimeStamp + hoursToTimestamp
  }

  const dateToAlarm = (date: number) => {
    const secondsToTimestamp = secondsToMilliseconds(seconds);
    const minutesToTimeStamp = minutesToMilliseconds(minutes);
    const hoursToTimestamp = hoursToMilliseconds(hours);
    // return secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp;
    console.log('secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp', secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp)
    // console.log('Date.now()', Date.now())
    return new Date(date + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp)) || 0;
  };

  // const timeLeft = intervalToDuration({
  //   start: new Date(),
  //   end: dateToAlarm(),
  // })
  



  const startTimer = (_e: any, reset = false) => {
    setMode(Mode.Countdown)
    // const timerInterval = setInterval(runTimer, 1000)
    console.log('dateToAlarm(Date.now())', dateToAlarm(Date.now()))
    console.log('new Date()', new Date())
    let secondsToTimestamp
    let minutesToTimeStamp
    let hoursToTimestamp
    console.log('reset', reset)
    if (reset) {
      setSeconds(choosenSeconds)
      setMinutes(choosenMinutes)
      setHours(choosenHours)
      secondsToTimestamp = secondsToMilliseconds(choosenSeconds);
      minutesToTimeStamp = minutesToMilliseconds(choosenMinutes);
      hoursToTimestamp = hoursToMilliseconds(choosenHours);
    } else {
      secondsToTimestamp = secondsToMilliseconds(seconds);
      minutesToTimeStamp = minutesToMilliseconds(minutes);
      hoursToTimestamp = hoursToMilliseconds(hours);
      setChoosenHours(hours)
      setChoosenMinutes(minutes)
      setChoosenSeconds(seconds)
    }



    // const endDate1 = new Date((Date.now()) + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp))
    // const {
    //   hours: hoursCur,
    //   minutes: minutesCur,
    //   seconds: secondsCur
    // } = intervalToDuration({
    //   start: new Date(),
    //   end: endDate1,
    // })
    // setSeconds(hoursCur || 0)
    // setMinutes(minutesCur || 0)
    // setHours(secondsCur || 0)
    console.log('secondsToTimestamp', secondsToTimestamp)
    const endDate = new Date((Date.now() + 1000) + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp))
    const timer = setInterval(() => {
      const {
        hours,
        minutes,
        seconds
      } = intervalToDuration({
        start: new Date(),
        end: endDate,
      })

      if (seconds === 0 && minutes === 0 && hours === 0) {
        stopTimer();
        clearInterval(timer);
        return
      } else {
        setSeconds(seconds || 0)
        setMinutes(minutes || 0)
        setHours(hours || 0)
      }
    }, 1000)
    setTimer(timer)
  }

  const stopTimer = () => {
    clearInterval(timer)
    setMode(Mode.Edit)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  const pauseTimer = () => {
    clearInterval(timer)
    setMode(Mode.Edit)
    setSeconds(seconds || 0)
    setMinutes(minutes || 0)
    setHours(hours || 0)
  }

  const resetTimer = () => {
    clearInterval(timer)
    // setSeconds(choosenSeconds)
    // setMinutes(choosenMinutes)
    // setHours(choosenHours)
    startTimer({}, true)
  }

  const runTimer = () => {
    console.log('seconds',seconds)
    if (seconds !== 0) {
      setSeconds((currentSecond) => {
        console.log('currentSecond', currentSecond)
        return currentSecond - 1
      })
    } else {
      setSeconds
    }
  }

  const addSubHours = (num: number) => {
    setHours((prevHour) => {
      const newValue = prevHour + num
      if (newValue <= 24 && newValue >= 0) {
        return newValue
      } else {
        return prevHour
      }
    })
  }

  const addSubMinutes = (num: number) => {
    setMinutes((prevMinute) => {
      const newValue = prevMinute + num
      if (newValue <= 60 && newValue >= 0) {
        return newValue
      } else {
        return prevMinute
      }
    })
  }

  const addSubSeconds = (num: number) => {
    setSeconds((prevSecond) => {
      const newValue = prevSecond + num
      if (newValue <= 60 && newValue >= 0) {
        return newValue
      } else {
        return prevSecond
      }
    })
  }

  // useEffect(() => {
  //   timer.reset()
  //   const minutesToTimeStamp = minutesToSeconds(minutes);
  //   const hoursToTimestamp = hoursToSeconds(hours);
  //   // return secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp;
  //   const totalSeconds =  seconds + minutesToTimeStamp + hoursToTimestamp;
  //   console.log('totalSeconds', totalSeconds)
  //   timer.advanceTime(-totalSeconds)
  // }, [hours, minutes, seconds])

  // useEffect(() => {
  //   console.log(timeLeft)
  // }, [timeLeft])

  return {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    // setTimer,
    timer,
    mode,
    setMode,
    startTimer,
    stopTimer,
    addSubHours,
    addSubMinutes,
    addSubSeconds,
    dateInSeconds,
    pauseTimer,
    resetTimer
  }
}

export default useTimerHooks;