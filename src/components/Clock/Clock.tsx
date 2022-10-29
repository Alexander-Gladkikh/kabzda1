import React, {useEffect, useState} from "react";

type PropsType = {
}

const addZero = (num: number) => {
    return num < 10 ? '0' + num : num;
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let intervalID = setInterval(() => {
            console.log('Tick')
        }, 1000)
        setDate(new Date())
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return <div>
       <span>{addZero(date.getHours())}</span>
       :
       <span>{addZero(date.getMinutes())}</span>
       :
       <span>{addZero(date.getSeconds())}</span>
    </div>
}