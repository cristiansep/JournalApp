import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
    
    test('Prueba en el login', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Cristian'
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Cristian'
        });
        
    });


    test('Debe realizar el logout', () => {

        const initState = {
            uid: 'kjdfhskdjfhkdjf',
            name: 'Cristian'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});
        
    });

    test('no debe hacer cambios en el state', () => {

        const initState = {
            uid: 'kjdfhskdjfhkdjf',
            name: 'Cristian'
        };

        const action = {
            type: 'sdkjfhskdjf'
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
        
    });
    

});
