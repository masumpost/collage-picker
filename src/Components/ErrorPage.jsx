import Lottie from 'react-lottie';
import error from './../../error.json'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='items-center'>
            <Lottie options={defaultOptions} height={400}
                width={400}></Lottie>

            <div className=''>
                <Link to='/'>
                    <AwesomeButton type="secondary" className=''>Go To The Home Page</AwesomeButton>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;