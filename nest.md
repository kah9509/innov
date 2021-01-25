# Nest란?

## Structure

### Controllers
- 요청을 받아들이고 처리를 해주는 녀석.
- url을 가져오고 함수를 실행함.

  `nest g controllers cats`


### Service
- 비지니스 로직을 가지는 부분


## 궁금한점
- Q1. 변경된 사항 자동으로 갱신되게 하고 싶은데 어찌하는 거지..?
- A1. 시작 시 nest start --watch 즉 npm run start:dev로 시작하면 됨