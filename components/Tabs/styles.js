import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    flex-wrap: no-wrap;
    align-items: baseline;
  } ;
`;

export const SideBarWrapper = styled.div`
  padding: 40px 25px;
  min-width: 276px;
  background: #0f1623;
  border-radius: 7px;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  @media (max-width: 768px) {
    min-width: 100% !important;
  } ;
`;

export const TabHeaderItemWrapper = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
  } ;
`;

export const TabHeaderItem = styled.div`
  color: ${({ active, theme: { colors } }) =>
    active ? colors.primary : colors.grey};
  font-family: 'Jura';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ child }) => (child ? '16px' : '19px')};
  /* margin: ${({ child }) => (child ? '12px 20px' : '22px 0')}; */
  cursor: pointer;
  line-height: 22px;
  display: inline-flex;
  width: 100%;
  justify-content: ${({ child }) => (child ? 'flex-start' : 'space-between')};
  align-items: center;
`;

export const TabBodyWrapper = styled.div`
  /* display: flex;
  align-items: center; */
`;

export const TabBodyHeading = styled.h3`
  font-family: 'Jura';
  font-style: normal;
  font-weight: 700;
  font-size: 37px;
  line-height: 44px;
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const TabBodyPara = styled.p`
  font-family: 'Jura';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 42px;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const ActionWrapper = styled.div`
  display: flex;
`;

export const ChildWrapper = styled.div`
  border-left: 0.25px solid rgba(255, 255, 255, 0.33);
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  row-gap: 20px;
  padding-left: 23px;
  margin-left: 15px;
`;

export const TabItemWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 992px) {
    flex-wrap: nowrap !important;
    & img {
      max-width: 300px !important;
      padding-left: 0px !important;
    }
  }
  @media (min-width: 768px) {
    flex-wrap: wrap;
    & img {
      max-width: 300px !important;
      padding-left: 40px;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    & img {
      max-width: 300px !important;
    }
    & .image-outer {
      padding: 0 30px;
      margin: 0 auto;
    }
  } ;
`;

export const ContentWrapper = styled.div`
  padding: 0 100px 0 140px;
  @media (min-width: 768px) {
    padding: 0 40px 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 20px 0 20px;
  } ;
`;
