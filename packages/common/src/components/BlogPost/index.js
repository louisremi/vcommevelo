import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const BlogPost = ({ className, thumbUrl, title, excerpt, link }) => {
  // Add all classes to an array
  const addAllClasses = ['blog_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <div className="thumbnail">
        <img src={thumbUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        {link && (
          <Link href={link}>
            <a className="learn__more-btn">
                <span className="btn_text">+ de détails</span>
                <span className="next_arrow"></span>
              </a>
          </Link>
        )}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
};

export default BlogPost;
