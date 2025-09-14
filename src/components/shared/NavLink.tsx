// src/components/shared/NavLink.tsx
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  children, 
  onClick,
  ...props 
}) => {
  return (
    <Link {...props} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
