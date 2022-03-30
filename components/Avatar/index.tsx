import React, { ReactNode } from 'react';
import './style.css';
import { Text } from '../Text';

export const userAvatar = [
  {
    id: 1,
    name: 'Mario Rossi',
    imageUrl:
      'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
    chosenShape: 'circle',
  },
];
type Props = {
  imgUrl?: string;
  className?: string;
  name: string;
  shape?: string | 'circle' | 'rounded';
};

export const Avatar = ({ name, shape, imgUrl, className }: Props) => {
  const [[initialName]] = name.split(' ');
  const [initialSurname] = last(name.split(' '));
  const classNames = [
    'avatar',
    className,
    shape === 'circle' && 'circle',
    shape === 'rounded' && 'rounded',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classNames}>
      {imgUrl ? (
        <img className="avatar-img" src={imgUrl} />
      ) : (
        <Text className="initial-name" type="h2">
          {initialName + initialSurname}
        </Text>
      )}
    </div>
  );
};

export const last = (array: string[]): string => {
  return array[array.length - 1];
};
