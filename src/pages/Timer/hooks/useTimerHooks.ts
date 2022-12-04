import { useState, useMemo } from 'react'
import {
  secondsToMilliseconds,
  minutesToMilliseconds,
  hoursToMilliseconds,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
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
  
  const dateToAlarm = () => {
    const secondsToTimestamp = secondsToMilliseconds(seconds);
    const minutesToTimeStamp = minutesToMilliseconds(minutes);
    const hoursToTimestamp = hoursToMilliseconds(hours);
    // return secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp;
    return new Date(Date.now() + (secondsToTimestamp + minutesToTimeStamp + hoursToTimestamp));
  };

  const startTimer = () => {
    setMode(Mode.Countdown)
    const timerInterval = setInterval(() => {
      const hoursDiff = differenceInHours(
        dateToAlarm(),
        new Date()
      );

      const minutesDiff = differenceInMinutes(
        dateToAlarm(),
        new Date()
      )

      const secondsDiff = differenceInSeconds(
        dateToAlarm(),
        new Date()
      )
      console.log('hoursDiff', hoursDiff)
      console.log('minutesDiff', minutesDiff)
      console.log('secondsDiff', secondsDiff)
    }, 1000)

    setTimer(timerInterval)
  }

  const stopTimer = () => {
    clearInterval(timer)
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
    setTimer,
    timer,
    mode,
    setMode,
    startTimer,
    stopTimer,
    addSubHours,
    addSubMinutes,
    addSubSeconds
  }
}

export default useTimerHooks;