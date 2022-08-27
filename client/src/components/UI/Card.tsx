import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  style?: 'card-bordered' | 'shadow-lg';
  color?: 'bg-primary' | 'bg-secondary' | 'bg-accent' | string;
  children?: ReactNode;
}

const Card = ({ children, title, style, color }: CardProps) => {
  return (
    <div
      className={`card ${style ? style : 'card-bordered'} ${color && color}`}
    >
      <div className="card-body">
        {title && (
          <h2 className="card-title" style={{ fontSize: '1rem' }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
