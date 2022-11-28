import React from "react";

function Contact() {
    return(
        <>
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-form-container">
                <div className="contact-form">
                    <form className="" method="POST">
                        <div className="form-control">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="ENTER NAME" className="input-field" required/>
                        </div>
                        <div className="form-control">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="ENTER EMAIL" className="input-field" required/>
                        </div>
                        <div className="form-control">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" cols="60" rows="10" placeholder="ENTER MESSAGE" className="input-field" required></textarea>
                        </div>
                        <input type="submit" value="Submit" id="submit-btn" className="submit-btn"/>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact