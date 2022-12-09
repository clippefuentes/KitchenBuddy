import React from 'react';
import {
  Button,
  Input
} from 'react-daisyui';

interface EditTimerProps {
  hours: number,
  minutes: number,
  seconds: number,
  addSubHours: (num: number) => void,
  addSubMinutes: (num: number) => void,
  addSubSeconds: (num: number) => void,
  setHours: React.Dispatch<React.SetStateAction<number>>,
  setMinutes: React.Dispatch<React.SetStateAction<number>>,
  setSeconds: React.Dispatch<React.SetStateAction<number>>,
  // timer: ReturnValue
}

const EditTimer = ({
  setHours,
  setMinutes,
  setSeconds,
  hours,
  minutes,
  seconds,
  addSubHours,
  addSubMinutes,
  addSubSeconds,
  // timer,
}: EditTimerProps) => {

  const handleChangeValue = 
  (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    max: number,
    
  ) => {
    const value = Number(e.target.value);
    if (value <= max && value >= 0) {
      setter(value)
    }
  }

  return (
    <>
      <div className="flex flex-row w-5/6 justify-between space-x-4">
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubHours(1)} disabled={hours >= 24}>+1</Button>
        </div>
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubMinutes(10)} disabled={minutes >= 60}>+10</Button>
        </div>
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubSeconds(10)} disabled={seconds >= 60}>+10</Button>
        </div>
      </div>
      <div className="flex flex-row w-5/6 justify-between space-x-4">
        <Input className='w-1/3' type={'number'} max='24' min='0' value={hours} onChange={(e) => handleChangeValue(e, setHours, 25)}/>
        <Input className='w-1/3' type={'number'} max='60' min='0' value={minutes} onChange={(e) => handleChangeValue(e, setMinutes, 60)} />
        <Input className='w-1/3' type={'number'} max='60' min='0' value={seconds} onChange={(e) => handleChangeValue(e, setSeconds, 60)} />
      </div>
      <div className="flex flex-row w-5/6 justify-between space-x-4">
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubHours(-1)} disabled={hours === 0}>-1</Button>
        </div>
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubMinutes(-10)} disabled={minutes === 0}>-10</Button>
        </div>
        <div className="flex justify-center w-1/3">
          <Button color="secondary" onClick={() => addSubSeconds(-10)} disabled={seconds === 0}>-10</Button>
        </div>
      </div>
    </>
  )
}

export default EditTimer