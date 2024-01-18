import './loadingWheel.css';

const LoadingWheel = ({ width }) => {
    width = width || 36;

    return (
        <span style={{ width: width, height: width, borderWidth: '10px' }} className="loading-wheel"></span>
    )    
}

export default LoadingWheel;