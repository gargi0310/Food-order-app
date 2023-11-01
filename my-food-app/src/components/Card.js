import React from 'react'

export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);


    return (
        <div>
            <div>
                <div className="card mt-3" style={{ 'width': '18rem', 'maxHeight': '360px' }}>
                    <img className="card-img-top h-24 ml-10" src={props.imgSrc} alt="..." style={{height:'120px', objectFit:'fill'} }/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        {/* <p className="card-text">Some Important Text</p> */}
                        <div className='container w-100 h-100'>
                            <select className='m-2 h-100 bg-light'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-light rounded'>
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>

                            <div className='h-100 fs-6'>Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
