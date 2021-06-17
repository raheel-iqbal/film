import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { films } from './films.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    films,
    alert
});

export default rootReducer;
