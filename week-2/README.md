## 라이프사이클

컴포넌트의 생명주기를 가리키는 것으로 **컴포넌트가 렌더링을 준비하는 순간부터, 페이지에서 사라질 때까지**를 의미한다.

- 컴포넌트는 생성되고 → 수정(업데이트)되고 → 사라진다.
    - 생성: 처음으로 컴포넌트를 불러오는 단계
    - 수정(업데이트): 사용자의 행동(클릭, 데이터 입력 등)으로 데이터가 바뀌거나 부모 컴포넌트가 렌더링할 때 업데이트가 된다.
        - props가 바뀔 때
        - state가 바뀔 때
        - 부모 컴포넌트가 업데이트 되었을 때 (= 리렌더링)
        - 강제로 업데이트 했을 경우 (forceUpdate()를 통해 강제로 컴포넌트를 업데이트 할 수 있다.)
    - 제거: 페이지를 이동하거나, 사용자의 행동(삭제 버튼)으로 인해 컴포넌트가 화면에서 사라지는 단계

### constructor()

- 클래스형 컴포넌트의 초기 설정을 만져준다.

### render()

- 컴포넌트 모양을 정의하는 곳
- state, props에 접근해서 데이터를 보여줄 수 있다.
- 하지만 이들을 건드려 데이터를 수정해서는 안된다.

### componentDidMount()

- Mount가 완료된 직후 실행되는 라이프사이클 함수
- 이 함수는 첫번째 렌더링을 마친 후 딱 한번만 실행된다.
- 리렌더링이 될 때는 실행되지 않는다.
- 이 단계에서는 ajax 요청, 이벤트 등록, 함수 호출 등 작업을 처리한다.
- 이미 가상 DOM이 실제 DOM으로 올라간 후다. (DOM 관련 처리를 해도 된다.)

### componentDidUpdate(prevProps, prevState, snapshot)

- 리렌더링이 완료된 후 실행되는 함수다.
- 중요한 파라미터인 prevProps와 prevState는 각각 업데이트 되기 전의 props와 state다.
- 이전 데이터와 비교할 일이 있을 때 해당 함수에서 비교해줄 수 있다.
- 이 또한, 가상 DOM이 실제 DOM으로 올라간 후니까 DOM 관련 처리를 해도 된다.

### componentWillUnmount()

- 쓸데없는 이벤트가 중첩되어 있지 않도록 제거해주어야 한다.


## State

### 클래스형 컴포넌트에서

setState()를 사용해서 state를 관리할 수 있다.

- 딕셔너리형태로 작성해준다.

```jsx
this.setState({ count: this.state.count + 1 });
```

### 함수형 컴포넌트에서

원래 함수형 컴포넌트에는 state가 없었다. 하지만 React Hooks가 등장하면서 state를 사용할 수 있게되었다.

다음처럼 useState()를 사용함에 따라서 사용할 수 있게되었다.

- count에는 state 값이 들어간다.
- setCount는 count라는 state를 변경하기 위한 함수로 사용

```jsx
const [count, setCount] = React.useState(초기값);
```


## 이벤트리스너

1. Ref를 이용해서 이벤트를 등록할 요소를 가져온다.
2. 이벤트 동작이 일어날 함수를 선언해주고 동작을 정의한다.
3. DOM이 생성되고나서 이벤트를 등록해준다. 

    DOM이 생성되고 나서이기 때문에 componentDidMount()에서 이 작업을 진행한다.

4. 컴포넌트가 사라질 때 쓸데없는 이벤트리스너가 남아있는 것을 방지하기 위해서 구독을 해제해준다.

    컴포넌트가 사라질 때이기 때문에 componentWillUnmount()에서 이 작업을 진행한다.

```jsx
hoverEvent = (e) => {
  console.log(e);
  console.log(e.target);

  e.target.style.backgroundColor = "pink";
}

  // 등록을해주면
  componentDidMount() {
    this.div.current.addEventListener('mouseover', this.hoverEvent);
  }

  // 해제도 해주어야한다.
  componentWillUnmount() {
    this.div.current.removeEventListener('mouseover', this.hover);
  }
```