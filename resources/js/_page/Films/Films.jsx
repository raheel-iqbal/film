import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filmActions, userActions} from '../../_actions';
import {Link} from "react-router-dom";

function Films () {

    const dispatch = useDispatch();

    let userData = useSelector(state => state.authentication?.user);
    if(userData) {
        userData = JSON.parse(userData);
    }

    let filmData = useSelector(state => state?.films?.items?.films?.items);
    console.log(filmData)
    // if(userData) {
    //     userData = JSON.parse(userData);
    // }

    const checkAuth = async () => {
        dispatch(userActions.getAll());
    }

    const fetchFilm = async () => {
        dispatch(filmActions.getAll());
    }

    useEffect(() => {
        checkAuth();
        fetchFilm();
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header font-weight-bold">
                        <div className="float-left mt-1">Manage Films</div>

                        <Link to="/add-film" className="float-right btn btn-primary btn-sm">Add Film</Link>
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">

                    </div>
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        </div>
    );
}

export { Films };
