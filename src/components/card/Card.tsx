import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  className?: string;
  buttopnText?: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  rating?: number;
  reviews?: string;
  price?: string;
}

const Card = ({
  title,
  className,
  link,
  imageSrc,
  imageAlt,
  description,
  rating,
  reviews,
  price,
  buttopnText,
}: CardProps) => {
  const cardClassName = `${styles.card} ${className ? styles[className] : ""}`;

  // Function to render stars based on rating
  const renderStars = (rating: number | undefined) => {
    if (!rating) return null;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className={styles.stars}>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div className={cardClassName}>
      <h3>{title}</h3>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={styles.textContainer}>
        {description && <p>{description}</p>}
        {rating && (
          <div className={styles.rating}>
            {renderStars(rating)}
            <span>({reviews} reviews)</span>
          </div>
        )}
        {price && <p className={styles.price}>{price}</p>}
      </div>
      {link && (
        <a href={link} target="_blank" className={styles.button}>
          {buttopnText}
        </a>
      )}
    </div>
  );
};

export default Card;
