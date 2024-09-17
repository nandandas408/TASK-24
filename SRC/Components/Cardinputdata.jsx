
const Cardinputdata = ({item}) => {
    let {id , image , name , desc} = item;
    return(
        <div className="card-border">
            <div className="card h-96 w-80 bg-indigo-950 px-8 py-9 flex flex-col justify-between items-center text-white">
                <div className="card-image h-40 w-48 overflow-hidden">
                    <img src={image} alt="" height="100%" width="100%"/>
                </div>
                <div className="card-name text-3xl text-center">
                    <h2>
                        {name}
                    </h2>
                </div>
                <div className="card-desc text-center">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cardinputdata;