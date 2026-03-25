# Todo App

할 일을 관리할 수 있는 웹 애플리케이션입니다.

https://todo-delta-one-35.vercel.app/

## Features

### 할 일 목록
- 해야 할 일 / 완료된 할 일 분리 조회 가능
- 할 일 생성
    - 할 일 명 입력 후 엔터 또는 추가하기 버튼 클릭
    
- 할 일 상태 토글 
  - 각 체크 리스트에 존재하는 할 일의 왼쪽 동그란 버튼을 클릭하여  완료 ↔ 진행 상태 변경 가능

### 할 일 상세
- 할 일 이름 수정 
  -  상세 페이지 상단 할 일 이름을 클릭하여 수정

- 상태 변경 
  - 상세 페이지 상단 할 일 이름 옆 동그란 버튼을 클릭하여 변경
- 메모 추가
- 이미지 업로드
  - 회색 상자의 오른쪽 하단, + 버튼을 눌러 기기의 할 일이 어울리는 이미지 업로드 가능
  - 이미 선택한 이미지가 있는 경우 + 버튼이 연필 모양 버튼으로 변경
  - 1개, 5MB 이하, 영어 파일명 제한
- 삭제 기능

## Project Structure

```plaintext
📦src
 ┣ 📂app
 ┃ ┣ 📂_components          // 목록 페이지를 그리는데 사용될 컴포넌트
 ┃ ┣ 📂items 
 ┃ ┃ ┗ 📂[itemId]
 ┃ ┃ ┃ ┣ 📂_components      // 상세 페이지를 그리는데 사용될 컴포넌트
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂common               // 공통 컴포넌트
 ┃ ┃ ┗ 📂buttons
 ┃ ┣ 📂icons                // svg를 변환한 아이콘 컴포넌트
 ┃ ┣ 📜GlobalNavBar.tsx
 ┣ 📂hooks                  // custom hooks
 ┣ 📂queries                // 데이터 요청 로직
 ┗ 📂types

```

### 주의사항
- 현재 API 요청 시간 동안 보여줄 UI나 버튼 disable 로직이 구현되지 않아 요청이 길어지는 경우 작동하지 않는 것처럼 보일 수 있습니다. 버튼 한 번 누르고 기다려주세요
- 프로젝트 구동 시 .env 파일이 필요합니다.
  - 프로젝트 루트에 .env 파일 생성 후\
  NEXT_PUBLIC_API_URL='https://assignment-todolist-api.vercel.app/api/psk' 입력
  - 터미널에 yarn 입력
  - 다시 터미널에 yarn s 입력 후 브라우저에서 localhost:3000으로 접속 가능