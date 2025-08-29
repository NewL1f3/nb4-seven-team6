# 운동인증 커뮤니티 서비스 백엔드

### 구현한 웹페이지: https://nb4-seven-team6-front.vercel.app/<br>

| [Swagger](https://codeit.teamproject1.server.bgk.dev/api-docs/) | [팀 문서 노션](https://radial-attention-ca6.notion.site/24cb1b4efe4d80dc818cf37149e2f65b) | [실행 영상](https://drive.google.com/file/d/1YaSgmVFjx7ccKw2Noi5LhFdTZup_FRHF/view) | [최종 발표 PPT](https://file.notion.so/f/f/a29b669d-e680-438e-b18c-08888fc54a21/812c8ea0-db07-4181-9326-05c1231c884c/부캠팀플1최종발표템플릿.pdf?table=block&id=25a6fd22-8e8d-8097-82a8-ce9129223a8e&spaceId=a29b669d-e680-438e-b18c-08888fc54a21&expirationTimestamp=1756461600000&signature=WtZscpn8qoXHu2BCXs7SVPRQuXjUwF9ZrTCKm85zUiQ&downloadName=6팀_SEVEN_발표자료.pdf) | [프론트 레포지토리](https://github.com/NewL1f3/nb4-seven-team6-front) |

## 팀원 구성

| 이름   | GitHub                                |
| ------ | ------------------------------------- |
| 이상욱 | [NewL1f3](https://github.com/NewL1f3) |
| 김보경 | [bgk614](https://github.com/bgk614)   |
| 엄규리 | [ammgree](https://github.com/ammgree) |
| 박형익 | [Sw-twt](https://github.com/Sw-twt)   |
| 김태회 | [F-los](https://github.com/F-los)     |

## 프로젝트 소개

- 운동 인증 커뮤니티 서비스의 백엔드 시스템 구축<br>
- 그룹, 참여자, 운동 기록, 배지, 좋아요 기능<br>
- 프로젝트 기간: 2025.08.11 ~ 2025.08.29<br>

## 기술 스택

<table>
  <tr>
    <th>Category</th>
    <th>Stack</th>
    <th align="right">Version</th>
  </tr>
  <tr>
    <td>Language</td>
    <td>TypeScript</td>
    <td align="right">5.9.2</td>
  </tr>
  <tr>
    <td>Runtime</td>
    <td>Node.js</td>
    <td align="right">22.17.0</td>
  </tr>
  <tr>
    <td>Framework</td>
    <td>Express.js</td>
    <td align="right">5.1.0</td>
  </tr>
  <tr>
    <td>ORM</td>
    <td>Prisma ORM</td>
    <td align="right">6.14.0</td>
  </tr>
  <tr>
    <td>Database</td>
    <td>PostgreSQL</td>
    <td align="right">17.5</td>
  </tr>
  <tr>
    <td>Auth</td>
    <td>Bcrypt</td>
    <td align="right">6.0.0</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>Zod</td>
    <td align="right">4.0.17</td>
  </tr>
  <tr>
    <td>File Upload</td>
    <td>Multer</td>
    <td align="right">2.0.2</td>
  </tr>
  <tr>
    <td>Logger</td>
    <td>Morgan</td>
    <td align="right">1.10.1</td>
  </tr>
  <tr>
    <td>Middleware</td>
    <td>CORS</td>
    <td align="right">2.8.5</td>
  </tr>
  <tr>
    <td>Config</td>
    <td>Dotenv</td>
    <td align="right">17.2.1</td>
  </tr>
  <tr>
    <td>API Docs</td>
    <td>Swagger UI Express</td>
    <td align="right">5.0.1</td>
  </tr>
  <tr>
    <td>Test</td>
    <td>Vitest / Supertest</td>
    <td align="right">3.2.4 / 7.1.4</td>
  </tr>
  <tr>
    <td>Lint / Format</td>
    <td>ESLint / Prettier</td>
    <td align="right">9.33.0 / 3.6.2</td>
  </tr>
  <tr>
    <td>Git Hook</td>
    <td>Husky</td>
    <td align="right">9.1.7</td>
  </tr>
  <tr>
    <td>Package Manager</td>
    <td>npm</td>
    <td align="right">10.x</td>
  </tr>
</table>

## 팀원별 구현 기능 상세

### 이상욱 <sub>운동기록(조회/정렬/검색)</sub>

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 김보경 <sub>그룹 DB, 그룹(생성/수정/삭제)</sub>

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 엄규리 <sub>그룹(조회/정렬/검색)</sub>

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 박형익 <sub>그룹(배지/참여/추천)</sub>

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

### 김태회 <sub>기록 DB, 운동기록(생성/수정/삭제)</sub>

(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

## 파일 구조

<details>
<summary>📂 파일 구조 보기</summary>

```
.
├── src
│   ├── app.ts
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   ├── group
│   │   │   ├── create_group.controller.ts
│   │   │   ├── delete_group.controller.ts
│   │   │   ├── get_group_by_id.controller.ts
│   │   │   ├── get_group_mem_rank.controller.ts
│   │   │   ├── get_group.controller.ts
│   │   │   ├── index.ts
│   │   │   ├── join_group.controller.ts
│   │   │   ├── leave_group.controller.ts
│   │   │   ├── recommend_group.controller.ts
│   │   │   └── update_group.controller.ts
│   │   └── record.controller.ts
│   ├── generated
│   ├── index.ts
│   ├── middleware
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── group.middleware.ts
│   │   ├── index.ts
│   │   └── validate.middleware.ts
│   ├── models
│   │   ├── auth
│   │   │   ├── auth_request.model.ts
│   │   │   ├── auth_response.model.ts
│   │   │   └── index.ts
│   │   ├── error_response.model.ts
│   │   ├── group
│   │   │   ├── create_group.dto.ts
│   │   │   ├── delete_group.dto.ts
│   │   │   ├── group_response.dto.ts
│   │   │   ├── index.ts
│   │   │   └── update_group.dto.ts
│   │   └── upload
│   │       ├── upload_request.model.ts
│   │       └── upload_response.model.ts
│   ├── routes
│   │   ├── group.routes.ts
│   │   ├── record.routes.ts
│   │   ├── timer.routes.ts
│   │   ├── upload.route.ts
│   │   └── uploads
│   ├── services
│   │   ├── group
│   │   │   ├── badge_evaluation.service.ts
│   │   │   ├── create_group.service.ts
│   │   │   ├── delete_group.service.ts
│   │   │   ├── get_group_by_id.service.ts
│   │   │   ├── get_group_mem_rank.service.ts
│   │   │   ├── get_group.service.ts
│   │   │   ├── index.ts
│   │   │   ├── join_group.service.ts
│   │   │   ├── leave_group.service.ts
│   │   │   ├── recommend_group.service.ts
│   │   │   └── update_group.service.ts
│   │   └── record.service.ts
│   ├── swagger
│   │   ├── components
│   │   │   ├── examples
│   │   │   ├── index.yaml
│   │   │   ├── parameters
│   │   │   ├── responses
│   │   │   └── schemas
│   │   ├── info
│   │   │   └── index.yaml
│   │   ├── paths
│   │   │   ├── group
│   │   │   ├── index.yaml
│   │   │   ├── record
│   │   │   ├── timer
│   │   │   └── upload
│   │   ├── server
│   │   │   └── index.yaml
│   │   ├── swagger.yaml
│   │   └── tags
│   │       └── index.yaml
│   ├── tests
│   │   ├── api.test.ts
│   │   └── setup.ts
│   └── utils
│       ├── auth.util.ts
│       ├── discord.ts
│       ├── mappers
│       │   └── group.mapper.ts
│       ├── password.ts
│       └── timer.ts
├── test_webhook.js
├── test.txt
├── tsconfig.json
├── uploads
├── eslint.config.js
├── package-lock.json
├── package.json
├── README.md
├── seed.js
└── vitest.config.ts
```

</details>
