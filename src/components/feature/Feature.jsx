import PropTypes from 'prop-types';
import './feature.css'


const Feature = ({title,text}) => {
    return (

        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>

            <div className="gpt__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}


Feature.propTypes={
    title: PropTypes.string,
    text: PropTypes.string
}
export default Feature; 