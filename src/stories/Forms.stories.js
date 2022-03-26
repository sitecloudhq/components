import React from 'react';
import { TextArea, Input, Form, Heading, Text, Button } from '..';

export default {
  title: 'Forms'
};

export const contact1 = () => (
  <Form
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    borderWidth="1px"
    borderColor="#DDDDDD"
    alignment="left"
    width="100%"
    contentWidth="50%"
    action="mailto:someone@example.com"
  >
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      margin={{ top: 0, left: 0, bottom: 20, right: 0 }}
      color="#1A1A1A"
      text="Contact Us"
    />
    <Input
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="First name"
      name="first_name"
    />
    <Input
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="Last name"
      name="last_name"
    />
    <TextArea
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="Message"
      name="message"
    />
    <Button
      width="100%"
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      margin={{ top: 10, left: 0, right: 0, bottom: 10 }}
      backgroundColor="#555555"
      color="white"
      text="Send"
    />
  </Form>
);

export const contact2 = () => (
  <Form
    padding={{ top: 20, left: 0, bottom: 20, right: 0 }}
    borderWidth="1px"
    borderColor="#DDDDDD"
    alignment="left"
    width="100%"
    contentWidth="50%"
    action="mailto:someone@example.com"
  >
    <Text
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '30px' }}
      margin={{ top: 0, left: 0, bottom: 20, right: 0 }}
      color="#1A1A1A"
      text="Contact Us"
    />
    <Text
      width="100%"
      lineHeight="130%"
      textAlign="left"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 600, size: '20px' }}
      color="#1A1A1A"
      text="Kitchen Restaurant Inc."
    />
    <Text
      width="100%"
      lineHeight="130%"
      margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
      font={{ family: 'Open Sans', style: 'normal', weight: 300, size: '20px' }}
      color="#1A1A1A"
      text="(555) - 122222"
    />
    <Text
      width="100%"
      lineHeight="130%"
      font={{ family: 'Open Sans', style: 'normal', weight: 400, size: '20px' }}
      color="#1A1A1A"
      text="New Line St 23 - San Francisco"
    />
    <Input
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="First name"
      name="first_name"
    />
    <Input
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="Last name"
      name="last_name"
    />
    <TextArea
      width="100%"
      borderColor="#555555"
      borderWidth="1px"
      padding={{ top: 10, left: 10, right: 10, bottom: 10 }}
      margin={{ top: 0, left: 0, right: 0, bottom: 10 }}
      placeholder="Message"
      name="message"
    />
    <Button
      width="100%"
      padding={{ top: 10, bottom: 10, right: 20, left: 20 }}
      margin={{ top: 10, left: 0, right: 0, bottom: 10 }}
      backgroundColor="#555555"
      color="white"
      text="Send"
    />
  </Form>
);
