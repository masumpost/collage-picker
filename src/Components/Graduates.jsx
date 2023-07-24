import React, { useEffect, useState } from 'react';
import GraduateCard from './graduateCard';

const Graduates = () => {

    const [graduates, setGraduates] = useState([]);

    useEffect(() => {
        fetch("https://collage-picker-server.vercel.app/graduates")
          .then((res) => res.json())
          .then((data) => setGraduates(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {
                graduates.map(graduate =><GraduateCard
                key={graduate._id}
                graduate={graduate}
                ></GraduateCard>)
            }
        </div>
    );
};

export default Graduates;