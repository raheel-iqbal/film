import React  from "react";

function NotFound() {

    return (
        <div>
            <div className="errContainer">
                <h1 className="err-first-four">4</h1>
                <div className="errCog-wheel1">
                    <div className="errCog1">
                        <div className="err-top"></div>
                        <div className="err-down"></div>
                        <div className="err-left-top"></div>
                        <div className="err-left-down"></div>
                        <div className="err-right-top"></div>
                        <div className="err-right-down"></div>
                        <div className="err-left"></div>
                        <div className="err-right"></div>
                    </div>
                </div>

                <div className="errCog-wheel2">
                    <div className="errCog2">
                        <div className="err-top"></div>
                        <div className="err-down"></div>
                        <div className="err-left-top"></div>
                        <div className="err-left-down"></div>
                        <div className="err-right-top"></div>
                        <div className="err-right-down"></div>
                        <div className="err-left"></div>
                        <div className="err-right"></div>
                    </div>
                </div>
                <h1 className="err-second-four">4</h1>
                <p className="wrong-para">Uh Oh! Page not found!</p>
            </div>
        </div>
    );
}

export { NotFound };
