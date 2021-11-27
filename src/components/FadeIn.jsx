/* Credits for https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4 */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: none;
    `}
`;

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
      observer.unobserve(domRef.current);
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Container visible={isVisible} ref={domRef}>
      {children}
    </Container>
  );
};

export default FadeInSection;
