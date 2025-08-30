import "./footer.css"
const Footer = () => {
    return(
       <div className="footer">
         <div className="ftr-div">
            <h3 className="info"> Home</h3>
            <p> Skill Assesment </p>
            <p> Career Advice</p>
            <p> Learning resources</p>
        </div>
         <div className="ftr-div">
            <h3 className="info">Blogs & Articles</h3>
            <p> Roadmaps & Guides</p>
            <p> Interview Tips</p>
            <p> FAQs</p>
        </div>
         <div className="ftr-div">
            <h3 className="info">Contact Us</h3>
            <p> support@AIcoachgmail.com </p>
            <p><a> LinkedIn | Twitter (X) </a></p>
        </div>
    </div>
    );    
    
}
export default Footer;