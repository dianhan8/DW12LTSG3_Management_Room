import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

//Navigasi
import RootNavigator from './../../navigator'

const reducerRouter = createNavigationReducer(RootNavigator)
//Login
import reducerUser from './../reducers/reducersUser'
//Room
import reducerRoom from './../reducers/reducersRoom'
//Customer
import reducersCustomer from './../reducers/reducersCustomer'
const appReducer = combineReducers({
    router: reducerRouter,
    users: reducerUser,
    room: reducerRoom,
    customer: reducersCustomer
})

export default appReducer