import React, { ReactNode } from 'react';
import { Avatar, userAvatar } from '../Avatar';
import { Text } from '../Text';

type Props = {};

export const Header = () => {
  return (
    <div className="header-card">
      {userAvatar.map(({ id, name, chosenShape, imageUrl }) => (
        <Avatar key={id} imgUrl={imageUrl} shape={chosenShape} name={name} />
      ))}
      <Text type="h4" className="name-avatar">
        {userAvatar.map((item) => item.name)}
      </Text>
    </div>
  );
};
