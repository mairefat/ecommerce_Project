import React from 'react'

function About() {
  return (
    <>
      <div className="container">
        <div className="text-center m-5">
          <h3>About Us</h3>
        </div>

        <div className="card mb-3 " >
          <div className="row no-gutters">
            <div className="col ">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">Our E-comerce began making the world shopping easier over 80 years ago. buying or selling goods and services electronically via the internet.  It simply refers to carrying out business activities over the internet. E-commerce is also termed as internet commerce, electronic commerce or electronic business as it is conducted using electronic means. Here all purchases and sale of products are conducted online via the internet. This is no existence of a physical market in it for doing business activities.</p>

                <button type="submit" className="btn btn-dark">Learn More</button>

              </div>
            </div>

            <div className="col" >
              <img src="https://cdn.pixabay.com/photo/2019/05/29/00/25/online-shopping-4236450__340.jpg " className="card-item h-100"  alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About;
