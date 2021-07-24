import React from 'react';
import AoeService from '../../services/aoeService';

const Landing: React.FunctionComponent = (props) => {
    const landingPagePrefix: string = 'aoe2-landing-page';

    function handleClick() {
        AoeService.executeService()
        .then(response => console.log('Here:', response))
        // .catch()
    }

    return(
        <div className={`${landingPagePrefix}`}>
            <article className="landing-page">
                <section className="heading">
                    <h1>AOE2 App</h1>
                </section>
            </article>
            <button onClick={handleClick}>Login</button>
        </div>
    );
};

export default Landing;
