import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { userActions } from '../../_actions';

function Dashboard () {

    const dispatch = useDispatch();

    let userData = useSelector(state => state.authentication?.user);
    if(userData) {
        userData = JSON.parse(userData);
    }

    const checkAuth = async () => {

        dispatch(userActions.getAll());

    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Welcome To {userData?.user?.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Dashboard };
