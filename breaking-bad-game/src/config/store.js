import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// here is the redux stuff, that line of REDUX_DEVTOOLS it's to see the stuff in chrome using the extension

export default store