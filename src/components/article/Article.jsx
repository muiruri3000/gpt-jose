import PropTypes from 'prop-types';
import './article.css'
const Article = ({imgUrl, date, text}) => {
    return (

<div className='gpt3__blog-container_article'>
    <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{text}</h3>
    <p>Read Full Article</p>
    </div>
 </div>
    )
}
Article.propTypes ={
    imgUrl:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}
export default Article; 