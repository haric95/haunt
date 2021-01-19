import { navigate } from '@reach/router';
import React from 'react';
import { AppPath } from '../../constants';

type NavigationButtonProps = {
  onClick?: () => void;
  selected?: boolean;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  selected = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`navigation-button ${selected ? 'selected' : ''}`}
    >
      {children}
    </button>
  );
};

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavigationButton
        onClick={() => {
          navigate(AppPath.HOME);
        }}
      >
        About us
      </NavigationButton>
      <NavigationButton
        onClick={() => {
          navigate(AppPath.ARTISTS);
        }}
      >
        Artists
      </NavigationButton>
      <NavigationButton
        onClick={() => {
          navigate(AppPath.HOME);
        }}
      >
        Shop
      </NavigationButton>
      <div className="rules">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div className="rule" />
          ))}
      </div>
    </div>
  );
};
