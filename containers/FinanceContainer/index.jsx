import { useEffect, useRef, useState } from 'react';
import Container from '../../components/Layout/container';
import MainHeading from '../../components/MainHeading';
import Tabs from '../../components/Tabs';
import { FinanceWrapper } from './styles';
const FinanceContainer = () => {
  const [active, setActive] = useState(1);
  const handleActiveTab = (id) => {
    setActive(id);
  };

  const handleOnWheel = (e) => {
    if (e.deltaY <= 0 && active < 5) {
      setTimeout(() => {
        handleActiveTab(active + 1);
        console.log(active);
      }, 1000);
    } else if (e.deltaY > 0 && active > 1) {
      setTimeout(() => {
        handleActiveTab(active - 1);
        console.log(active);
      }, 1000);
    }
  };
  return (
    <>
      <FinanceWrapper onWheel={handleOnWheel}>
        <Container>
          <MainHeading className="text-center mb-11 mt-9">Finance</MainHeading>
          <Tabs
            active={active}
            setActive={setActive}
            handleActiveTab={handleActiveTab}
          />
        </Container>
      </FinanceWrapper>
    </>
  );
};
export default FinanceContainer;
