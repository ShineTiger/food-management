import React from 'react';

interface BadgeProps {
  title: string;
  color?: 'badge-primary' | 'badge-secondary' | 'badge-accent' | 'badge-ghost';
}

const BadgeTag = ({ title, color }: BadgeProps) => {
  return (
    <li
      style={{ margin: '0 2px' }}
      className={`badge badge-outline ${color && color}`}
    >
      {title}
    </li>
  );
};
export default BadgeTag;
