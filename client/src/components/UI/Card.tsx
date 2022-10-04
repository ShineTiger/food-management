import React, { ReactNode } from 'react';

interface CardProps {
  title?: string | ReactNode;
  style?: 'card-bordered' | 'shadow-lg';
  color?: 'bg-primary' | 'bg-secondary' | 'bg-accent' | string;
  children?: ReactNode;
  flex?: boolean;
  rightTitle?: string;
}

const Card = ({
  children,
  title,
  style,
  color,
  flex,
  rightTitle,
}: CardProps) => {
  return (
    <div
      className={`card mb-2 mt-2 ${style ? style : 'card-bordered'} ${
        color && color
      }`}
    >
      <div className={`card-body p-5 ${flex && 'flex-row'}`}>
        {title && (
          <div className="flex justify-between">
            <h2
              className="card-title"
              style={{ fontSize: '1rem', minWidth: '36px' }}
            >
              {title}
            </h2>
            {rightTitle && <h2>{rightTitle}</h2>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
