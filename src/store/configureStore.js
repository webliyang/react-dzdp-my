import rootReducer from '../reducers/index'
import {createStore} from 'redux'

export default function configureStroe(initialState){
    const stroe = createStore(rootReducer,initialState,
        window.devToolsExtension?window.devToolsExtension() : undefined
    )
    return stroe
}