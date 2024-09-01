import React from 'react';
import css from './ReviewList.module.css';
import Icon from '../Icon/Icon';

export default function ReviewList({ truck }) {
  if (!truck || !truck.reviews) {
    return <p className={css.pInfo}>No reviews available.</p>;
  }

  return (
      <div className={css.reviewsContainer}>
        {truck.reviews.map((review, index) => (
          <div key={index} className={css.reviewItem}>
            <div className={css.firstReviews}>
              <span className={css.fakeImg}>{review.reviewer_name[0]}</span>
              <div className={css.name_star}>
                <h3 className={css.reviewsName}>{review.reviewer_name}</h3>
                <div className={css.stars}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star}>
                      {review.reviewer_rating >= star ? (
                        <Icon idIcon={'star'} customH={16} customW={16} />
                      ) : (
                        <Icon idIcon={'starEmpty'} customH={16} customW={16} />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
  );
}
