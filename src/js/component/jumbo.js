import React from "react";

const Jumbotron = () => (
    <div className="card bg-darkgrey">
        <div className="card-body">
            <h1 className="card-title">A Warm Welcome!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            {/* <hr className="my-4"/> */}
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <button className="btn btn-primary btn-lg">Click Here</button>
        </div>
    </div>
);

export default Jumbotron;
