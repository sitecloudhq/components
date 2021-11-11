import React from 'react';
import styled, { css } from 'styled-components';
import { ImageAlt as Icon } from 'styled-icons/boxicons-regular';
import { Component } from '../Component';
import { EditorTypes, PropTypes } from '../types';
import { styleProps } from '../utils';

const Container = styled.div`
  ${(props: any) => props.styled}
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: ${({ borderColor, borderWidth }: any) =>
    borderColor && borderWidth
      ? `${borderWidth} solid ${borderColor}`
      : 'none'};

  ${styleProps({
    height: 'min-height',
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    roundCorners: 'border-radius'
  })}
`;

const Content = styled.div<{ width: string | null }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${styleProps({
    width: 'width'
  })};
`;

const MapContainer = styled.div`
  flex: 1;
`;

const Location: Component<{
  location: string;
  width: string;
  google_api_key: string;
}> = ({ children, location, width, google_api_key, ...props }) => (
  <Container {...props}>
    <Content width={width}>
      {children}
      <MapContainer>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${google_api_key}&q=${location}`}
        />
      </MapContainer>
    </Content>
  </Container>
);

Location.paddable = true;
Location.canReceive = [];
Location.props = {
  width: {
    type: PropTypes.Length,
    default: '50%',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.auto
      ]
    }
  },
  height: {
    type: PropTypes.Length,
    default: 'auto',
    editor: {
      type: EditorTypes.Length,
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.auto
      ]
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    editor: EditorTypes.Rect
  },
  margin: {
    type: PropTypes.Rect,
    default: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    editor: EditorTypes.Rect
  },
  alignment: {
    type: PropTypes.Array,
    default: ['center', 'left', 'right'],
    editor: EditorTypes.Combo
  },
  aspect: {
    border: {
      borderColor: {
        type: PropTypes.Color,
        default: 'black',
        editor: {
          type: EditorTypes.Color,
          title: 'Border Color'
        },
        required: false,
        enabled: false
      },
      borderWidth: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
          type: EditorTypes.Slider,
          title: 'Border Width'
        }
      }
    },
    roundCorners: {
      type: PropTypes.Length,
      default: '0px',
      editor: EditorTypes.Slider
    },
    backgroundColor: {
      type: PropTypes.Color,
      default: 'black',
      editor: {
        type: EditorTypes.Color,
        title: 'Background Color'
      },
      required: false,
      enabled: false
    }
  }
};

Location.icon = <Icon size="1.4rem" />;

export default Location;
