import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'useMemo',
};

type CitiesType = {
    id: string
    country: string
    name: string
}

export const CitySelectors = () => {
    console.log('rerender CitySelectors')
    const cities: CitiesType[] = [
        {id: 'yes', country: 'Russia', name: 'Belgorod'},
        {id: 'yes', country: 'Russia', name: 'Kursk'},
        {id: 'yes', country: 'Belarus', name: 'Minsk'},
        {id: 'no', country: 'USA', name: 'New York'},
        {id: 'no', country: 'France', name: 'Parish'},
        {id: 'yes', country: 'China', name: 'Beijing'},
    ]

    const [count, setCount] = useState<number>(0);

    return (
        <>
            {count}<button onClick={() => setCount(count+1)}>+</button>
            <CountrySelector cities={cities}/>
        </>
    )
}

type CountrySelectorPropsType = {
    cities: CitiesType[]
}

export const CountrySelector = (props: CountrySelectorPropsType) => {
    const newArray = props.cities.filter(el => el.country == 'Russia')
    const countries = props.cities.map(el => el.country);

    return (
        <>
            {props.cities.map((el, index) => <li key={index}>{el.country}</li>)}
            <br/>
            <ul>
                {newArray.map((el, index) => <li key={index}>{el.name}</li>)}
            </ul>
        </>
    )
}

