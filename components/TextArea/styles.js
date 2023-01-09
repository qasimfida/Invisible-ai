import styled from 'styled-components';

export const TextAreaWrapper = styled.textarea`
  background: rgba(255, 255, 255, 0.06);
  opacity: 1;
  border-radius: 9px;
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  padding: 16px 30px;
  font-family: 'Jura';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 29px;
  resize: none;
  width: 100%;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-family: 'Jura';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 29px;
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
`;
