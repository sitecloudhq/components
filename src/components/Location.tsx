import React from 'react';
import styled from 'styled-components';
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
  box-sizing: border-box;
  ${({ borderWidth, borderColor }: any) =>
    borderWidth || borderColor ? `border-style: solid` : null};

  ${styleProps({
    width: 'width',
    height: 'min-height',
    padding: 'padding',
    margin: 'margin',
    backgroundColor: 'background-color',
    roundCorners: 'border-radius',
    borderWidth: 'border-width',
    borderColor: 'border-color'
  })}
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const Location: Component<{
  location: string;
  google_api_key: string;
}> = ({ children, location, google_api_key, ...props }) => (
  <Container {...props}>
    <Content>
      {children}
      <MapContainer>
        {location && location != '' && (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${google_api_key}&q=${location}`}
          />
        )}
      </MapContainer>
    </Content>
  </Container>
);

Location.paddable = true;
Location.canReceive = [];
Location.props = {
  location: {
    type: PropTypes.String,
    default: 'Eiffel Tower, Paris France',
    editor: EditorTypes.Input
  },
  width: {
    type: PropTypes.Length,
    default: '100%',
    editor: {
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh,
        PropTypes.Length.auto
      ]
    }
  },
  height: {
    type: PropTypes.Length,
    default: '100%',
    editor: {
      options: [
        PropTypes.Length.px,
        PropTypes.Length.percentage,
        PropTypes.Length.vw,
        PropTypes.Length.vh,
        PropTypes.Length.auto
      ]
    }
  },
  padding: {
    type: PropTypes.Rect,
    default: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
    },
    editor: EditorTypes.Rect
  },
  margin: {
    type: PropTypes.Rect,
    default: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px'
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
          title: 'Border Color'
        },
        required: false,
        enabled: false
      },
      borderWidth: {
        type: PropTypes.Length,
        default: '0px',
        editor: {
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
        title: 'Background Color'
      },
      required: false,
      enabled: false
    }
  }
};

Location.icon = <Icon size="1.4rem" />;

export default Location;
