import React, {useMemo, useState} from "react";



export default {
    title: 'useMemo',
    // component: input
};

export const DifficultCountingExample = () => {


    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={event => setA(+(event.currentTarget.value))}/>
        <input value={b} onChange={event => setB(+(event.currentTarget.value))}/>
<hr/>
        <div>Result A : {resultA}</div>
        <div>Result B : {resultB}</div>
    </>

}


const UsersSecret = (props: {users: string[]}) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo");
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}