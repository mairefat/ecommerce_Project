import React from 'react'
import Categories from './categories'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function Category(props) {
    const [data, setData] = useState(Categories);
    let { mailabua } = useParams();
    console.log(mailabua);
    return (
        <>

            <div className="container">
                <div className="text-center m-5">
                    <h2>Let's Shop!</h2>
                </div>
                <div className="row">
                    {data.map((values) => {
                        const { id, title, price, image, category } = values;


                        if (category == mailabua) {
                            return (
                                <div className="col-lg-4 col-md-6 col-12 p-1"
                                    key={id}>
    
                                    <div className="card">
                                        <img src={image}
                                            className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p>Price:{price}$</p>
                                            <button className="btn btn-primary"
                                                onClick={props.increamentCount}
                                            >Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
    
                            );
                        }
                    
                    })}
                </div>

            </div>
        </>
    )
}

export default Category