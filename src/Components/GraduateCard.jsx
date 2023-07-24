import React from 'react';

const GraduateCard = ({graduate}) => {
    console.log(graduate)
    const {college_name,college_image} = graduate;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                </div>
            </div>
        </div>
    );
};

export default GraduateCard;