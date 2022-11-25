import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement
}

export const Portal = (props: IPortalProps) => {
  const { element = document.body, children } = props;

  return createPortal(children, element);
};
