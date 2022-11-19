# THUNDER-ELEVEN-SERVER
## 서비스 개요
🔔 서비스명 : 그래미(그래 이게 나야)
🔔 서비스 한줄소개 : 태그로 보는 우리들의 인상


## 역할 분담
### 호영
* 로그인
* 인상 남기기
### 한빛
* 유저 정보 가져오기
### 도연 
* 유저 단위 로그 목록
* 특정 유저 로그 목록


## 코드 컨벤션
* Prettier
* 변수명, 함수명
  * lowCamelCase
  * 20자 이내
  * 함수명 동사+명사
* 주석 
  * 한 줄 주석 // 
  * 한 줄 이상 /**/
* 괄호
  * 괄호 사이에 한 칸 띄어쓰기
  * 한 줄이어도 중괄호 작성하기  


## 브랜치 전략
Git flow
* main
* develop
* feat
* fix

## 폴더 구조
```
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── controller
│   ├── index.ts
│   ├── router
│   └── service
├── tsconfig.json
└── yarn.lock
```
