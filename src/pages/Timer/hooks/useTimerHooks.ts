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
  Countdown
}

type Interval = string | number | NodeJS.Timeout | undefined

function useTimerHooks() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState<Interval>(0)
  const [mode, setMode] = useState<Mode>(Mode.Edit)

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
  



  const startTimer = () => {
    // setMode(Mode.Countdown)
    // const timerInterval = setInterval(runTimer, 1000)
    console.log('dateToAlarm(Date.now())', dateToAlarm(Date.now()))
    console.log('new Date()', new Date())
    const secondsToTimestamp = secondsToMilliseconds(seconds);
    const minutesToTimeStamp = minutesToMilliseconds(minutes);
    const hoursToTimestamp = hoursToMilliseconds(hours);
    const endDate = new Date((Date.now() + 2000) + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp))
    const timer = setInterval(() => {
      const {
        hours,
        minutes,
        seconds
      } = intervalToDuration({
        start: new Date(),
        end: endDate,
      })
      setSeconds(seconds || 0)
      setMinutes(minutes || 0)
      setHours(hours || 0)
    }, 1000)
    setTimer(timer)
  }

  const stopTimer = () => {
    clearInterval(timer)
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
    // stopTimer,
    addSubHours,
    addSubMinutes,
    addSubSeconds,
    dateInSeconds
  }
}

export default useTimerHooks;