import Colleges from "../Components/Colleges";
import Graduates from "../Components/Graduates";

const Home = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-6">Best Colleges:</h1>
            <Colleges></Colleges>
            <h1 className="text-center font-bold text-4xl mt-6">Best Colleges Graduates:</h1>
            <Graduates></Graduates>
        </div>
    );
};

export default Home;