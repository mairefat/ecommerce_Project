import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light text-center text-lg-start"  >
        <div>
          {/* <div className="col-sm-6 col-md-4 footer-navigation">
            <h3><a href="#">BBB<span>ootstrap</span></a></h3>
            <p className="links"><a href="#">Home</a><strong> &middot; </strong><a href="#">Blog</a><strong> &middot; </strong><a href="#">Pricing</a><strong> &middot; </strong><a href="#">About</a><strong> &middot; </strong><a href="#">Faq</a><strong> &middot; </strong><a href="#">Contact</a></p>
            <p className="company-name">BBBOOTSTRAP.COM &copy; 2020</p>
          </div> */}
          {/* <div className=" col-lg-4 pull-right  footer-contacts">
            <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p><span className="new-line-span">21 Revolution Street</span>NY, USA</p>
            </div>
            <div><i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-left"> +1 9485045958</p>
            </div>
            <div><i className="fa fa-envelope footer-contacts-icon"></i>
              <p> <a href="#" target="_blank">support@bbbootstrap.com</a></p>
            </div>
          </div> */}
          {/* <div className="clearfix"></div> */}
          
          <div className=" footer-about ">
            <h4>About the company</h4>
            <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-github"></i></a></div>
          </div>
          <div className="text-center col-lg-12  footer-navigation">
            
          <p className="company-name">Ecommerce.COM &copy; 2022</p>
          </div>
        </div>
      </footer>
    </>

  );

}

export default Footer;