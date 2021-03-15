import React from 'react';
import styled from 'styled-components';
import img from './assets/scc_img01.png';

// 메모리제이션: 여러번 렌더링되는 것을 방지해준다.
const SwipeItem = React.memo(({ onSwipe }) => {
    const swipe_div = React.useRef(null);

    // 현재 상태를 기록할 변수
    let swipe_state = "ready";
    // 애니메이팅 효과를 위한 변수
    let target_classname = "";

    // 터치 시작할 좌표를 기록하기 위한 변수
    let coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0
    };

    // 이벤트 리스너는 처음에 한번만 등록해준다.
    React.useEffect(() => {
        // touch가 reset 되었을 때
        // 예를들어 손가락이 미끄러져서 답이 입력되었는지 아닌지 몰라서 원상복귀를 시켜주어야할 상황
        const reset = () => {
            swipe_state = "ready";
            coordinate = {
                start_x: 0,
                start_y: 0,
                end_x: 0,
                end_y: 0
            };

            swipe_div.current.className = target_classname;
            swipe_div.current.style.left = 0 + "px";
            swipe_div.current.style.top = 0 + "px";
        }

        // touch 시작했을 경우
        const touchStart = (e) => {
            swipe_state ="touchstart";
            target_classname = swipe_div.current.className;
            coordinate = { // 시작할 때의 좌표 기록
                ...coordinate,
                start_x: e.touches[0].clientX,
                start_y: e.touches[0].clientY
            };
        }

        // touch 손가락에서 떼었을 때
        const touchEnd = (e) => {
            // 놓았을 때의 좌표 기록
            swipe_state = "touchend";

            coordinate = {
                ...coordinate,
                end_x: e.changedTouches[0].clientX,
                end_y: e.changedTouches[0].clientY
            }

            // touch가 끝났을 때의 방향 정해주기
            let diff_x = coordinate.end_x - coordinate.start_x;
            let direct = "left";

            if (Math.abs(diff_x) > 50) {
                swipe_div.current.className = target_classname + " swipe";
            

                if (diff_x > 0) {
                    direct = "right";
                    swipe_div.current.style.left = diff_x + 150 + "px";
                    swipe_div.current.style.opacity = 0;
                } else {
                    direct = "left";
                    swipe_div.current.style.left = diff_x - 150 + "px";
                    swipe_div.current.style.opacity = 0;
                }

                // 실행
                window.setTimeout(() => {
                    reset();
                    onSwipe(direct);
                }, 300);
                return;
            }
            reset();
        }

        // touch해서 움직일 때
        const touchMove = (e) => {
            // touch Evnet가 일어나는 동안 다른 이벤트가 발생하지 않도록
            e.preventDefault();

            // 현재 좌표 저장
            // 현재 위치를 기점으로 계속 미더덕의 위치를 바꿔주기 위해
            let current_coordinate = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };

            // position: fixed로 값을 주었었다.
            // top과 left를 조절해주기!
            swipe_div.current.style.left = current_coordinate.x - coordinate.start_x + "px";
            swipe_div.current.style.top = current_coordinate.y - coordinate.start_y + "px";
        }

        // touch가 cancel 되었을 때
        const touchCancel = (e) => {

        }

        // 이벤트 리스너 등록
        swipe_div.current.addEventListener("touchstart", touchStart);
        swipe_div.current.addEventListener("touchmove", touchMove);
        swipe_div.current.addEventListener("touchend", touchEnd);
        swipe_div.current.addEventListener("touchcancel", touchCancel);

        // 이벤트 리스너 해제
        return () => {
            if (!swipe_div.current) {
                return;
            }

            swipe_div.current.removeEventListener("touchstart", touchStart);
            swipe_div.current.removeEventListener("touchmove", touchMove);
            swipe_div.current.removeEventListener("touchend", touchEnd);
            swipe_div.current.removeEventListener("touchcancel", touchCancel);
        } 
    }, []); // 반복을 해주지 않을 것이기 때문에 빈 배열 []

    return (
        <DragItem ref={swipe_div}>
            <img src={img} alt="미더덕" />
        </DragItem>
    );
});

// 기본적으로 props 값이 없을 때 오류가 나지 않고
// 이 props는 어떤 값을 가지고 있다는 것을 알려주기 위함
SwipeItem.defaultProps = {
    onSwipe: () => {},
}

const DragItem = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &.swipe {
        transition: 300ms;
    }

    & > div {
        background-color: #ffd6aa;
        border-radius: 150px;
    }

    & img {
        max-width: 150px;
    }
`;

export default SwipeItem;