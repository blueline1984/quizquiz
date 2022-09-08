# ❓ Quiz Quiz
Quiz Quiz는 다양한 분야의 퀴즈를 풀 수 있는 웹 어플리케이션입니다.

[Quiz Quiz](https://quizquiz-white.netlify.app)
- 퀴즈 풀기 버튼을 눌러서 퀴즈 풀기를 시작합니다.
- 4개의 보기 중에 하나를 선택할 수 있습니다.
- 보기 중 하나의 답을 선택하면 다음 문항으로 넘어가는 버튼이 나타납니다.
- 답을 선택하면 정답 여부를 바로 확인할 수 있습니다.
- 다음 버튼을 누르면 다음 문항으로 이동할 수 있습니다.
- 마지막 퀴즈를 풀게되면 결과를 볼 수 있는 버튼이 생성되며 결과 페이지로 이동합니다.
- 결과 페이지에서는 정답 수와 오답의 수 및 정오답에 대한 차트를 확인할 수 있습니다.

# ⏱ Period
22.08.31 ~ 22.09.08(7일)

# 🏊‍♂️ How to Implement
### install
```
npm install
```
### start
```
npm start
```
### environment variable
```
//.env
REACT_APP_API_URL=https://opentdb.com/api.php?
```
#  ✏️ Plan
- [Kanban](https://www.notion.so/c11abf6dbee0483dbc737001aced0727?v=2766bd01ac0c47b9a8af5b0420864c95)
- [Figma](https://www.figma.com/file/rgGJpf8gT23bIpkLHcjtvj/Quiz-Quiz?node-id=0%3A1)

# 🥽 Technical Skills
- Frontend: Javascript, CSS, React, styled-component, chart.js
- Collaboration: Notion, Figma, Git, local storage

# 🗂 Directory Structure
```
└── src
    ├── api
    ├── components
    ├── config
    ├── hooks
    ├── pages
    └── utils
```
# 🌂 Preview
#### 1-1 메인 페이지
![quiz-1](https://user-images.githubusercontent.com/97525377/189075043-79e1cd1f-0720-4985-a6cb-132233241aa4.gif)
#### 2-1 퀴즈문제 페이지
![quiz-2](https://user-images.githubusercontent.com/97525377/189075808-4006d0d2-94b5-4692-8446-a1e66b706024.gif)
#### 3-1결과 페이지
![quiz-3](https://user-images.githubusercontent.com/97525377/189074303-93c896a5-7333-4934-8532-d3ba0a56a717.gif)

# 💫 Retrospect
## 배운 점
- 현업에서 근무하는 방식을 최대한 적용하여 해당 프로젝트를 진행하는것에 목적을 두었습니다. 그 목적에 맞게 각 단계에서 습관적으로 또는 편한 방식으로 처리하려는 저의 모습을 발견하였습니다. 프로젝트를 진행하면서는 임의로 정한 기준이지만 하나의 기준을 따라간다는 것이 쉽지않다는 것을 느꼈습니다. 하지만 그 과정에서 체계가 잡혀가는 모습을 볼 수 있었고 개발을 하면 할수록 정돈된 것을 느낄 수 있었습니다. 또한 커스텀훅 등을 사용하여 재사용과 장기적인 관점에서 유지보수 가능한 코드를 작성하려고 노력하였습니다.

## 시도한 점
- 새로고침하는 것에 로컬스토리지를 사용하여 초기화 되는 것을 방지하였습니다.
- 피그마를 통한 UI 디지인, 프로젝트 기획, 칸반 작성, 깃 커밋등 단계별 프로세스를 철저하게 지키도록 노력하였습니다. 협업 과정에서 진행되는 방식으로 최대한 비슷하게 진행하도록 하였습니다.
- 결과에 대한 그래프를 보여주기 위해 chart.js를 사용하였습니다.
- 커스텀 훅을 사용하여 추후 재사용성을 고려한 코드를 작성하였습니다.

## 아쉬운 점
- 테스트 코드를 좀 더 작성하지 못한 것
- 오답노트, 문제 다시풀기 구현하지 못한 것
- 버튼 재사용 관련 메인, 서브버튼 컴포넌트로 만들어서 사용하지 못한 것
