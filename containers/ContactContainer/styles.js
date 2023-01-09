import styled from 'styled-components';

export const ContactWrapper = styled.div`
  min-height: calc(100vh - 220px);
`;

export const ContactInnerWrapper = styled.div`
  background: rgba(15, 25, 41, 0.92);
  backdrop-filter: blur(20px);
  padding: 70px 125px;
  border-radius: 38px;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 40px 0px;
  } ;
`;

export const SubHeading = styled.p`
  font-family: 'Jura';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 60px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const ContactCardWrapper = styled.button`
  background: ${({ theme: { colors } }) => colors.dark};
  border-radius: 17px;
  min-width: 206px;
  max-width: 206px;
  min-height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 17px 45px;
  box-sizing: border-box;
  outline: none !important;
  border: none;
  cursor: pointer;
  position: relative;
  @media (max-width: 768px) {
    min-width: 156px;
    max-width: 156px;
  } ;
`;

export const Text = styled.p`
  font-family: 'Jura';
  font-style: normal;
  font-weight: 600;
  margin-top: 13px;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Tag = styled.a`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

export const ContactFormWrapper = styled.form`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.dark};
  border-radius: 17px;
  padding: 50px 45px;
  box-sizing: border-box;
`;

export const ContactFormInnerWrapper = styled.div`
  display: flex;
  gap: 147px;
  @media (max-width: 992px) {
    gap: 40px;
  }
  @media (max-width: 768px) {
    gap: 40px;
    flex-wrap: wrap;
    & .outer-div {
      width: 100% !important;
    }
  } ;
`;
