import React from "react";
import PropTypes from 'prop-types';
import '../Pages/style/PageHero.css'
import { Link } from "react-router-dom";

export default function PageHero({ title }) {
    return <div className="wrapper">
        <div className="section-center">
        <h3>
            <Link to='/'>Home</Link>/ {title}
        </h3>
        </div>
    </div>
}

PageHero.propTypes= {
    title: PropTypes.string.isRequired
  }