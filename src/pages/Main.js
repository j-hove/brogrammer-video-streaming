import React, { Component } from 'react';
import './Main.css';
import { Navigate } from "react-router-dom";

class Main extends Component {
    state = {
        redirect:false
    }    

    render () {
        return(
            <section className="Container">
                <div className="Content">
                    <div className="CTA">
                        <img className="CTALogoOne" src="/images/cta-logo-one.svg" alt="cta-logo-one" />
                    </div>
                    <a href="/" className="SignUp" onClick={ 
                        this.state.redirect && <Navigate to='/login' replace={true}/>
                    }>
                        SIGN UP HERE
                    </a>
                    <p className="Description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                    <img className="CTALogoTwo" src="/images/cta-logo-two.png" alt="cta-logo-two" />
                    <div className="BgImage"></div>
                </div>
            </section>
        )
    }
} 

export default Main