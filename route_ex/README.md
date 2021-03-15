## SPA?

Single Page Application은 말 그대로 서버에서 주는 html이 1개뿐인 어플리케이션을 의미한다.
페이지를 이동할 때마다 html, css, js와 같은 정적 자원들을 내려주는 전통적인 웹사이트와는 달리, 딱 한번만 정적자원을 받아온다.

- 왜 굳이 **하나만** 사용하냐면 가장 큰 이유는 **사용성** 때문이다!
    - 페이지를 이동할 때마다 서버에서 주는 html로 화면을 바꾸다보면 상태 유지가 어렵고 바뀌지 않은 부분까지 새로 불러와야해서 비효율적이다.
        - 예를들어, 회원가입 폼을 입력하다가 옆에 물음표 표시를 누르면 새로운 페이지(html)로 이동을하고 다시 뒤로가기 버튼을 눌러서 회원가입 페이지로 돌아오면 다시 새로운 페이지를 요청해서 가져오기 때문에 기존의 데이터가 유실되어 사용자에게 불편함을 초래한다.
        - 또한 블로그의 경우 바뀐 내용은 글 뿐인데 페이지를 새로 요청하면 카테고리나 헤더 등을 전부 다시 불러와야한다.
- 단점도 있다. 딱 한번 정적자원을 내려받다보니, 처음에 모든 컴포넌트를 받아와서 페이지 수가 많은 웹사이트의 경우 **첫 로딩 속도가 느려진다**는 단점이 있다.
    - 사용자가 보지 않을 페이지까지 전부 가지고와야 한다.

## 라우팅 처리

```bash
yarn add react-router-dom
```

```jsx
import {
  BrowserRouter as Router, // BrowserRouter를 Router로 지칭하겠다는 뜻
  Switch,
  Route,
  Link
} from "react-router-dom";
```

## URL 파라미터, 쿼리

- 파라미터: /dog/choco
    - choco는 파라미터다.

```jsx
<Route path="/dog/:dog_name" component={Dog} />
```

- 쿼리: /dog?name=choco
    - ? 뒤에 key value 형태인 것이 쿼리형식

### 파라미터 사용하기

props.match 안에 params라는 값이 들어온다.

그 안에 내가 지정한 파라미터 값이 들어있다.

## 페이지 이동

- Link를 이용하기

    HTML의 a태그와 비슷한 역할을 한다.

    react-router-dom에서 불러와서 사용한다.

    ```jsx
    <Link to="/cat/nabi">Cat으로 가기</Link>
    ```

- history를 이용하기
    - props에 history를 가지고 있는 것을 확인하기 위해서는 'react-router'에 withRouter를 불러와야 한다.

    ```jsx
    import { withRouter } from 'react-router';
    ```

    - 내보내는 부분에서 withRouter로 감싸주어야 한다.

    ```jsx
    export default withRouter(App);
    ```

    - componentDidMount()에서 props를 확인한다.

    ```jsx
    componentDidMount() {
    	console.log(this.props); 
    }
    ```

    props에 있는 history를 이용해서 페이지를 이동시킬 수 있다.

    **push([이동할 주소])**는 페이지를 이동시켜준다.

    ```jsx
    <button onClick={(() => {
    	this.props.history.push('/cat/nabi');
    })}>고양이 페이지로 가기</button>
    ```

    뒤로가기도 제공한다.

    **goBack()**

    ```jsx
    <button onClick={(() => {
    	this.props.history.goBack();
    })}>뒤로가기</button>
    ```


## 중복된 주소 처리하기

exact를 이용하면 된다.

```jsx
<Route exact path="/" />
```

## 잘못된 주소 처리하기

Switch를 이용하면 아주 쉽게 처리가 가능하다.

react-router-dom에서 Switch를 불러온다.

```jsx
import { Route, Switch } from "react-router-dom";
```

Route부분 전체를 Switch로 감싸준다.

그리고 그냥 NotFound 컴포넌트를 Route에 주소 없이 연결하면 된다.

```jsx
<Switch>
	<Route path="/" exact render={(props) => (
		<BucketList list={this.state.list} history={this.props.history} /> )} />
  <Route path="/detail" component={Detail} />
	<Route component={NotFound} />
</Switch>
```
