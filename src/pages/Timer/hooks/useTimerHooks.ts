import { useState, useMemo, useEffect } from 'react'

import {
  secondsToMilliseconds,
  minutesToMilliseconds,
  hoursToMilliseconds,
  hoursToSeconds,
  minutesToSeconds,
  // differenceInHours,
  // differenceInMinutes,
  // differenceInSeconds,
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
    const totalSeconds =  seconds + minutesToTimeStamp + hoursToTimestamp
    return totalSeconds
  }

  const dateToAlarm = (date: number) => {
    const secondsToTimestamp = secondsToMilliseconds(seconds);
    const minutesToTimeStamp = minutesToMilliseconds(minutes);
    const hoursToTimestamp = hoursToMilliseconds(hours);
    return new Date(date + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp)) || 0;
  };

  const startTimer = (_e: any, reset = false) => {
    setMode(Mode.Countdown)
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
    startTimer({}, true)
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

  return {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
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