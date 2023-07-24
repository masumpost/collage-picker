

const CollageCard = (college) => {

    const {college_image, college_name, admission_dates, events, research_history} = college.collage;

    console.log(college);
    console.log(college_image)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={college_image} alt="College" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{college_name}</h2>
                    <p>Admission Date: {admission_dates}</p>
                    <p>Events: {events}</p>
                    <p>Research: {research_history}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageCard;