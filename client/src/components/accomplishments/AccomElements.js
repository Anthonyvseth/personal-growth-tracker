import styled from 'styled-components';

export const AccomHeader = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const AccomContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const AccomWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AccomCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AccomIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const AccomH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AccomNum = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AccomH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  &:hover {
    color: #01bf71;
  }
`;

export const AccomP = styled.p`
  font-size: 1rem;
  text-align: center;

  &:hover {
    color: #01bf71;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin-top: auto;
  margin: 0 auto;
  padding: 10px 32px;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 10px 32px;
  }
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;