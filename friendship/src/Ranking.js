import React from 'react';
import styled from 'styled-components';

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";
import { resetAnswer } from "./redux/modules/quiz";

const Ranking = (props) => {
    const dispatch = useDispatch();
    const _ranking = useSelector((state) => state.rank.ranking);

    React.useEffect(() => {
        // current 가 없을 때는 바로 리턴
        if (!user_rank.current) {
          return;
        }
        // offsetTop 속성을 이용해 스크롤 이동
        window.scrollTo({
          top: user_rank.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }, []);
    
    // 스크롤 이동할 div 위치
    const user_rank = React.useRef(null);

    const ranking = _ranking.sort((a, b) => {
        return b.score - a.score;
    });

    return (
        <RankContainer>
            <Topbar>
                <p><span>{ranking.length}명</span>의 사람들 중 당신은?</p>
            </Topbar>

            <RankWrap>
                {ranking.map((value, idx) => {
                    if (value) {
                        return (
                            <RankItem key={idx} highlight={value.current ? true : false} ref={user_rank}>
                                <RankNum>{idx + 1}등</RankNum>
                                <RankUser>
                                    <p>{value.name}</p>
                                    <p>{value.message}</p>
                                </RankUser>
                            </RankItem>
                        );
                    }
                })}
            </RankWrap>
            <Button onClick={(() => {
                dispatch(resetAnswer());
                window.location.href = '/';
            })}>다시하기</Button>
        </RankContainer>
    )
}

const RankContainer = styled.div`
    width: 100%;
    padding-bottom: 100px;
`;

const Topbar = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    min-height: 50px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;

    & > p {
        text-align: center;
    }

    & > p > span {
        border-radius: 30px;
        background-color: #fef5d4;
        font-weight: 600;
        padding: 4px 8px;
    }
`;

const RankWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 58px;
`;

const RankItem = styled.div`
    width: 80vw;
    margin: 8px auto;
    display: flex;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 8px 16px;
    align-items: center;
    background-color: ${props => props.highlight? "#ffd6aa" : "#ffffff"}
`;

const RankNum = styled.div`
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    padding: 0px 16px 0px 0px;
    border-right: 1px solid #ddd;
`;

const RankUser = styled.div`
    padding: 8px 16px;
    text-align: left;

    & > p{
        &:first-child > b {
            border-bottom: 2px solid #212121;
        }

        margin: 0px 0px 8px 0px;
    }
`;

const Button = styled.button`
    position: fixed;
    bottom: 5vh;
    left: 0;
    padding: 8px 24px;
    background-color: ${(props) => (props.outlined ? "#ffffff" : "#f1c32a")};
    border-radius: 30px;
    margin: 0px 10vw;
    border: 1px solid #f1c32a;
    width: 80vw;
`;

export default Ranking;