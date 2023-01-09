import Image from 'next/image';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Layout/container';
import MainHeading from '../../components/MainHeading';
import TextArea from '../../components/TextArea';
import {
  CardsWrapper,
  ContactCardWrapper,
  ContactFormInnerWrapper,
  ContactFormWrapper,
  ContactInnerWrapper,
  ContactWrapper,
  SubHeading,
  Tag,
  Text,
} from './styles';

const ContactCard = ({ icon, text, href, target }) => {
  return (
    <ContactCardWrapper>
      <Tag href={href} target={target}></Tag>
      <Image
        src={icon ? icon : '/images/icons/phone.svg'}
        alt="icons"
        width={45}
        height={45}
      />
      <Text>{text}</Text>
    </ContactCardWrapper>
  );
};

const ContactContainer = () => {
  return (
    <ContactWrapper>
      <Container>
        <ContactInnerWrapper className="mt-9 mb-8">
          <MainHeading className="text-center">Contact Us</MainHeading>
          <SubHeading>
            Fill up the form and our Team will get back <br /> to you within 24
            hours.
          </SubHeading>
          <CardsWrapper className="mb-8">
            <ContactCard
              icon="/images/icons/phone.svg"
              text="Call"
              href="tel:+1-800-555-1234"
            />
            <ContactCard
              icon="/images/icons/calendar.svg"
              text="Make a Appointment"
              href="https://calendar.google.com/calendar/u/0/r?pli=1"
              target="_blank"
            />
          </CardsWrapper>
          <ContactFormWrapper>
            <ContactFormInnerWrapper className="mb-4">
              <div className="w-half outer-div">
                <Input className="mb-5" label="First Name" />
                <Input className="mb-5" label="Email" />
                <Input className="mb-5" label="Number" />
              </div>
              <div className="w-half outer-div">
                <TextArea
                  label="Message"
                  cols={10}
                  rows={11}
                  className="mb-5"
                />
              </div>
            </ContactFormInnerWrapper>
            <Button size="xl" className="mx-auto">
              Submit
            </Button>
          </ContactFormWrapper>
        </ContactInnerWrapper>
      </Container>
    </ContactWrapper>
  );
};

export default ContactContainer;
