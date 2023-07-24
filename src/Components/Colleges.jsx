import React, { useEffect, useState } from 'react';
import CollageCard from './CollageCard';

const Colleges = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("https://collage-picker-server.vercel.app/clgcard")
          .then((res) => res.json())
          .then((data) => setColleges(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {
                colleges.slice(0,3).map(college => <CollageCard
                key={college._id}
                collage={college}
                ></CollageCard>)
            }
        </div>
    );
};

export default Colleges;