# REACT

## 내용 정리

### NVM이란?
- nvm은 Node Version Manager의 줄인말로 Node.js의 버전관리자이다.
- 이것은 Node의 수많은 버전들을 선택해서 사용해줄 수 있도록 한다.
- 따라서 여러 버전의 Node.js를 관리할 수 있어서 편리하다.
  
#### nvm으로 설치한 Node 버전 리스트 확인 명령어
```　
nvm ls
```

#### 사용할 노드 버전 변경
```　
nvm use [사용할 노드 버전]
```

### yarn
NPM은 무수히 많은 third-party 패키지를 활용할 수 있도록 한다.  
npm처럼 프론트엔드 의존성을 확인하기 위한 패키지 매니저로는 yarn이 있다.  
yarn은 npm보다 좀 더 빠르다고 한다.   


### JSX
HTML in JS 방식으로 함수 내에서 return 값으로 HTML 파일을 넣어서 View를 꾸려준다.  

* 규칙
  * 무조건 1개의 엘리먼트로 반환하기 (Vue와 비슷해보인다.)
  * JSX에서 javascript 값을 가져오려면 {}를 쓴다.
    * 값을 가져올 때 map이나 삼항연산자 등의 문법을 쓴다.
      * (Vue.js에서의 computed 같은 역할을 하는 것은 없을까?)
    * class대신 className을 사용한다.
    * 인라인으로 style을 주는데 json 형식을 사용한다.
