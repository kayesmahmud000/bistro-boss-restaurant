
import PageHelmet from "../shared/PageHelmet";

const LoadingPage = () => {
    return (
        <div className=' min-h-screen flex justify-center items-center'>
              <PageHelmet title={'Loading'}></PageHelmet>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring  loading-lg"></span>
    </div>
    );
};

export default LoadingPage;