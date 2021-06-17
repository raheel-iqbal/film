import { userConstants } from '../_constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                loginCheck: true,
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                loginCheck: false,
                error: action.error
            };
        default:
            return state
    }
}
