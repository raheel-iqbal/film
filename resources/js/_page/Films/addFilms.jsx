import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReactStars from "react-rating-stars-component";
import DatePicker from 'react-date-picker';
import { userActions, filmActions } from '../../_actions';

function addFilms () {

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        release_date: '',
        rating: 0,
        ticket_price: '',
        country: '',
        genre: '',
        photo: []
    });

    const [submitted, setSubmitted] = useState(false);
    const { name, description, release_date, rating, ticket_price, country, genre, photo } = inputs;

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

    const ratingChanged = (rating) => {
        setInputs({
            name, description, release_date, rating, ticket_price, country, genre, photo
        })
    };

    const dateChanged = (release_date) => {
        setInputs({
            name, description, release_date, rating, ticket_price, country, genre, photo
        })
    };

    function photoChanged(e) {
        var photo = e.target.files[0];
        setInputs({
            name, description, release_date, rating, ticket_price, country, genre, photo
        })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        let myPromise = new Promise(function(myResolve, myReject) {

            if (name && description && rating && release_date && ticket_price && country && genre && photo) {

                const data = new FormData();

                data.append('user_id', userData?.user?.id);
                data.append('name', name);
                data.append('photo', photo);
                data.append('description', description);
                data.append('rating', rating);
                data.append('release_date', release_date);
                data.append('ticket_price', ticket_price);
                data.append('country', country);
                data.append('genre', genre);
                dispatch(filmActions.addFilm(data));

            }

            myResolve("Success");

        });

        myPromise.then(function(value) {

            var name = "";
            var description = "";
            var release_date = "";
            var rating = 0;
            var ticket_price = "";
            var country = "";
            var genre = "";
            var photo = [];
            setInputs({
                name, description, release_date, rating, ticket_price, country, genre, photo
            })

            $("#filmForm").trigger("reset");

        });

    }

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-lg-12 mb-5">
                <div className="card">
                    <div className="card-header font-weight-bold">
                        Add Film
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} id="filmForm">
                            <div className="form-group">
                                <label className="font-weight-bold">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !name ? ' is-invalid' : '')}
                                />
                                {submitted && !name &&
                                    <div className="invalid-feedback">Name is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Description</label>
                                <textarea
                                    placeholder="Enter Description"
                                    name="description"
                                    value={description}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !description ? ' is-invalid' : '')}
                                ></textarea>
                                {submitted && !description &&
                                    <div className="invalid-feedback">Description is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Release Date</label>
                                <DatePicker
                                    calendarAriaLabel="Toggle calendar"
                                    clearAriaLabel="Clear value"
                                    dayAriaLabel="Day"
                                    monthAriaLabel="Month"
                                    nativeInputAriaLabel="Date"
                                    yearAriaLabel="Year"
                                    format="y-MM-dd"
                                    onChange={dateChanged}
                                    value={release_date}
                                    className={'form-control' + (submitted && !release_date ? ' is-invalid' : '')}
                                />
                                {submitted && !release_date &&
                                    <div className="invalid-feedback">Release Date is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Rating</label>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                                {submitted && rating == 0 &&
                                    <div className="invalid-feedback">Rating is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Ticket Price</label>
                                <input
                                    type="text"
                                    placeholder="Enter Ticket Price"
                                    name="ticket_price"
                                    value={ticket_price}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !ticket_price ? ' is-invalid' : '')}
                                />
                                {submitted && !ticket_price &&
                                    <div className="invalid-feedback">Ticket Price is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Country</label>
                                <input
                                    type="text"
                                    placeholder="Enter Country"
                                    name="country"
                                    value={country}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !country ? ' is-invalid' : '')}
                                />
                                {submitted && !country &&
                                    <div className="invalid-feedback">Country is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Genre</label>
                                <input
                                    type="text"
                                    placeholder="Enter Genre"
                                    name="genre"
                                    value={genre}
                                    onChange={handleChange}
                                    className={'form-control' + (submitted && !genre ? ' is-invalid' : '')}
                                />
                                {submitted && !genre &&
                                    <div className="invalid-feedback">Genre is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Photo</label>
                                <input
                                    type="file"
                                    placeholder="Enter Photo"
                                    name="photo"
                                    onChange={photoChanged}
                                    className={'form-control' + (submitted && !photo ? ' is-invalid' : '')}
                                />
                                {submitted && !photo &&
                                    <div className="invalid-feedback">Photo is required</div>
                                }
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { addFilms };
