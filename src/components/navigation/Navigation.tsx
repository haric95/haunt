import React from 'react';

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
      <NavigationButton onClick={() => {}}>About us</NavigationButton>
      <NavigationButton onClick={() => {}}>Artists</NavigationButton>
      <NavigationButton onClick={() => {}}>Shop</NavigationButton>
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
