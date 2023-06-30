import styled from 'styled-components';

// icons
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

// components
import StampTicket from '@components/stamp/StampTicket';

const StampList = () => {
  return (
    <StampListContainer>
      <TopDescriptionWrap>
        <div className="stamp-img-bg">
          <div className="stamp-img-inner" />
        </div>
        <div className="stamp-description-text">
          <p>
            나의 <span className="bold-text">티캣</span>을
          </p>
          <p>확인하세요</p>
        </div>
      </TopDescriptionWrap>
      <StampItemsWrap>
        <div className="cal-date">
          <button>
            <AiOutlineLeft size="18px" color="#D3D3D3" />
          </button>
          <p className="cal-month ">2023년 7월</p>
          <button>
            <AiOutlineRight size="18px" color="#D3D3D3" />
          </button>
        </div>
        <StampTicket />
        <div className="toggle-wrap">
          <div className="toggle" />
        </div>
      </StampItemsWrap>
    </StampListContainer>
  );
};

export default StampList;

/** 2023/06/30 - 스탬프 리스트 컨테이너 - by sineTlsl */
const StampListContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

/** 2023/06/30 - 상단 이미지 및 소개 - by sineTlsl */
const TopDescriptionWrap = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 270px;
  background: var(--color-main);

  // 이미지
  > .stamp-img-bg {
    position: absolute;
    right: -45px;
    top: -23px;
    width: 178px;
    height: 178px;
  }
  > .stamp-img-bg > .stamp-img-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    filter: invert(100%);
    background-image: url('/assets/images/ticat-logo-icon-black.png');
    background-size: 100% 100%;
  }

  // 텍스트
  > .stamp-description-text {
    position: absolute;
    top: 115px;
    left: 30px;
    font-size: 30px;
    font-weight: 300;
    line-height: 1.2;
    color: var(--color-light-text);
  }
  > .stamp-description-text > p > .bold-text {
    font-weight: 700;
  }
`;

/** 2023/06/30 - 스탬프 리스트 - by sineTlsl */
const StampItemsWrap = styled.div`
  z-index: 1;
  top: 210px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 210px);
  width: 100%;
  background: #fff;
  border-radius: 30px 30px 0px 0px;
  padding-bottom: 2rem;

  // 캘린더 년도, 월
  > .cal-date {
    display: flex;
    width: 100%;
    margin-top: 2.5rem;
    justify-content: space-around;
  }
  > .cal-date .cal-month {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-dark-text);
  }
  > .cal-date button {
    border: none;
    background: none;
  }

  // 예시 토글
  > .toggle-wrap {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    /* padding: 1rem 0; */
  }

  > .toggle-wrap > .toggle {
    width: 160px;
    height: 36px;
    border-radius: 40px;
    background: #ebebeb;
  }
`;