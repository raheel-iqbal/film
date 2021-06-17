import {filmConstants} from '../_constants';
import {filmService} from '../_services';
import { alertActions } from './';

export const filmActions = {
    getAll,
    addFilm,
};

function getAll() {
    return dispatch => {
        dispatch(request());

        filmService.getAll()
            .then(
                films => dispatch(success(films)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: filmConstants.GETALL_REQUEST } }
    function success(films) { return { type: filmConstants.GETALL_SUCCESS, films } }
    function failure(error) { return { type: filmConstants.GETALL_FAILURE, error } }
}

function addFilm(film) {
    return dispatch => {
        dispatch(request(film));

        filmService.addFilm(film)
            .then(
                film => {
                    dispatch(success());
                    dispatch(alertActions.success('Film successful added'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(films) { return { type: filmConstants.FILM_REQUEST, films } }
    function success(films) { return { type: filmConstants.FILM_SUCCESS, films } }
    function failure(error) { return { type: filmConstants.FILM_FAILURE, error } }
}
