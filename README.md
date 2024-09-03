# TeamHRD_K<br/>(`HRD&GROUPWARE SYSTEM` Rest API 개발)
*※ 기존에 수행한 https://github.com/choiwanmin/kosta_final_pjt_restapi_backend 프로젝트를 정비 및 정리*

## 목차
* [프로젝트 소개](#프로젝트-소개)
* [기술 스택](#기술-스택)
* [주요 기능](#주요-기능)
* [주요 작업 내용](#주요-작업-내용)
* [프로젝트 아키텍쳐](#프로젝트-아키텍쳐)
* [클라이언트 화면 UI](#클라이언트-화면-UI)
* [기타](#기타)

## 프로젝트 소개
> ### 프로젝트 개요
* `java`기반의 `Spring Boot` 프레임워크를 활용한 웹 풀스택 개발 후 `Rest API`로 전환 개발 수행
* 개발 기간
  * Fullstack 작업 기간 : 2024.05.24 ~ 2024.06.26 (34일)<br/>*(Fullstack 작업 repository - https://github.com/choiwanmin/kosta_final_pjt_fullstack_review)*
  * Rest-API 전환 작업 기간 : 2024.07.03 ~ 2024.07.14 (12일)
* 개발 구성원 : 5명 (`BE/FE` - 각 담당 영역의 BE/FE 작업을 진행)
> ### 프로젝트 목표
* 팀 및 서비스 목표
  * 사내 사용자가 각기 별개의 작업 환경에서 통합된 하나의 프로젝트를 동시에 수행할 수 있도록 도움을 주는 소프트웨어를 제작
  * 관리자와 사원의 영역을 나누어 업무를 정형화함으로써 업무 생산성 향상을 목적에 둠
* 개인 목표 :

## 기술 스택
|구분|사용 기술|
|:---|:---|
|Front-end|`HTML`, `CSS`, `Javascript`, `Bootstrap`, `Ajax`, `JQuery`, `React`, `npm`|
|Back-end|`Java`, `Maven`, `Spring Boot`, `Spring Data JPA`, `JDBC API`, `Oracle Driver`, <br/>`Lombok`, `Spring Security`, `WebSocket` 등|
|DBMS|`Oracle`|
|Server|`Apache Tomcat`, `AWS EC2(Ubuntu)`, `Docker` 등|
|IDE|`Eclipse`, `IntelliJ`, `Oracle Sql Developer`|
|SCM|`Git & Github`|
|ETC.|`Notion`, `Kakaotalk`, `ChatGPT` 등|

## 주요 기능
*(Back-End 작업 repository - https://github.com/choiwanmin/kosta_final_pjt_restapi_backend_review)*
> ### 인사 관리 기능

  <details>
  <summary>인사 관리 기능 보기</summary>
  <div markdown="1">
  
  * 사원 정보 관리 기능
    * 시스템 로그인 정보 관리
    * 인사 정보 관리
    * 시스템 승인 상태 관리
  * 근태 관리 기능
    * 사원 개인별 출퇴근 기록
    * 출퇴근 기록 조회 및 휴가 관리
    * 관리자 및 부서장은 부서별 근태 기록 조회 및 통계 제공
  * 조직 관리
    * 부서 관리
    * 직급 관리 
  
  </div>
  </details>
  
> ### 협업 도구 기능

  <details>
  <summary>협업 도구 기능 보기</summary>
  <div markdown="1">
  
  * 공지 게시판 기능
    * 전체 및 부서별 조회 및 작성 기능 
  * 실시간 메신저 기능
    * 실시간 1:1 메신저 및 그룹 메신저 제공
    * 현재 대화 참여자 정보 조회
    * 메신저 및 메시지 관리를 통한 최신화
  * 전자 문서 기능
    * 문서 기본 양식 제공으로 빠른 문서 작성
    * 결재 권한 및 순서를 제공해 원격 결재 시스템 제공
    * 내가 작성한 문서 모아보기 기능
    * 결재 문서 현황 확인 제공
  * 스케줄러 기능
    * 사내 또는 개인 주요 일정관리 기능 제공
    * 일정 추가시 달력과 간트차틍 적용하여 편의성 제공
    * 임직원간 일정 공유 기능 제공
  * 메일 기능
    * 그룹웨어 자체 메일 서버 제공
    * 자체 도메인 제공으로 사내메일 사용 가능
    * 메일함에서 받은 메일 관리
    * 반송, 공유 등 편의 기능 제공

 </div>
 </details>
  
## 주요 작업 내용

## 프로젝트 아키텍쳐
|![finalpjt_architecture](https://github.com/user-attachments/assets/fda679aa-ceae-4c2e-b0f2-0e44103fd022)|
|:---:|

## 클라이언트 화면 UI

## 기타
> ### DB ERD

<details>
<summary>DB ERD 보기</summary>
<div markdown="1">

 |![finalpjt_erd](https://github.com/user-attachments/assets/e089ae4f-fe98-44ad-860a-68801e706310)|
 |:---:|
 
</div>
</details>

> ### 프로젝트 흐름도

<details>
<summary>프로젝트 흐름도 보기</summary>
<div markdown="1">

 |![finalpjt_flow](https://github.com/user-attachments/assets/f1341d66-8b9d-4328-b079-1e86b2c1b0c9)|
 |:---:|
 
</div>
</details>

> ### 프로젝트 구조

<details>
<summary>프로젝트 구조 보기</summary>
<div markdown="1">
 
```
```

</div>
</details>
