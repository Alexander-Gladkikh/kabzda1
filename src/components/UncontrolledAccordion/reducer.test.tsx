import {reducer, StateType} from "./reducer";

test('test ', () => {
    // data
    const state:StateType = {
        collapsed: true
    }
    // action
    const result = reducer(state, {type:"TOGGLE-COLLAPSED"})
    //expection

    expect(result.collapsed).toBe(false)
})