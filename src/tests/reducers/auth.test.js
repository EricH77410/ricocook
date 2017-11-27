import authReducer from '../../reducers/auth';

test('should call login with uid reducer', () =>{
    const uid = '12345AZERTY'
    const action = {
        type:'LOGIN',
        uid
    }
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid)
});

test('should call logout reducer', ()=>{
    const state = authReducer('123',{type: 'LOGOUT'})
    expect(state).toEqual({})
})