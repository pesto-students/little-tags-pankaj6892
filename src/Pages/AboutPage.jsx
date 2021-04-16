import React from 'react';
import PageHero from "../Components/PageHero";
import image from '../asset/about.png'
import '../Pages/style/AboutPage.css'

export default function AboutPage(){
return <main>
    <PageHero title="about" />
    <div className="about-page-wrapper page section section-center">
        <img src={image} alt="Attire-Fusion"/>
        <article className="data" >
            <div className="title"><h2>Our Story</h2>
            <div className="underline"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quae. Distinctio voluptatibus fugiat, ipsam architecto culpa eum nobis nesciunt dicta!</p>
        </article>
    </div>
</main>
}