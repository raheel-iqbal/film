import { filmConstants } from '../_constants';

export function films(state = {}, action) {
    switch (action.type) {
        case filmConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case filmConstants.GETALL_SUCCESS:
            return {
                items: action
            };
        case filmConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
