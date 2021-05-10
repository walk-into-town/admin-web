> Using CRA with TypeScript template
## 🥝 Craco
- Create React App Configuration Override
- craco.config.js를 추가함으로 eslint, babel, postcss 등을 쉽게 설정할 수 있다
- 절대경로 설정

## 🦅 Presentational & Container Pattern
### Presentational (components)
- 프레젠테이션, UI를 출력하는 로직
- prop의 함수에 의해 state를 변경 (엄격하게 지켜야 하는 규칙은 아니다)
- 순수 함수인 경향 (의존적 X)
### Container (pages)
- 데이터와 데이터 조작에 관한 함수를 만들고 present component에 제공
- 스타일을 사용하지 않음

---
## 🐋 vscode 플러그인
- ES7 React/Redux/GraphQL/React-Native snippets

    ```
    tsrafce
    ```
    새로운 컴포넌트 만들 때