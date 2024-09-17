import React from 'react';
import '../CSS/style.css';
import Data from './Data';
import Cardinputdata from './Cardinputdata'

const Card = () => {
    
    return(
        <section className="bg-black">
            <h1 className="text-5xl font-semibold text-center py-12 text-white"> Akatsuki have now assembled</h1>

            <div className="card-container px-28 py-12 flex justify-between flex-wrap gap-y-40">
                {
                    Data.map((item) => {
                        return(
                            <Cardinputdata item={item} key={item.id}/>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Card;