import React from 'react'
import "../styles/footer.css"

const Footer = () => {
    return (
        <>
            <section className="footer bg-dark">
            <div className="social_media_links">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <div className="copy_right">
                <p>© 2021 kush.rastogi18@gmail.com</p>
            </div>
            </section>
        </>
    )
}

export default Footer
