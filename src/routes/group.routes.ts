import express from 'express';

import * as Params from '../models/group/index.js';
import * as Controller from '../controllers/group/index.js';
import * as Middleware from '../middleware/index.js';
export const groupRouter = express.Router();

groupRouter
  .route('/')
  .get(Middleware.validateGroupQuery, Controller.getGroupsController) // 그룹 목록 조회
  .post(
    Middleware.validate(Params.CreateGroupSchema),
    Controller.createGroupController,
  ); // 그룹 생성

<<<<<<< HEAD
// 추천 API (프론트엔드와 일치하도록 수정)
groupRouter.post('/:groupId/likes', recommendGroup); // 추천수 증가
groupRouter.delete('/:groupId/likes', recommendGroup); // 추천수 증가 (중복 방지용 동일 동작)

// 참여 API (프론트엔드와 일치하도록 수정)
groupRouter.post('/:groupId/participants', joinGroup); // 그룹 참여
groupRouter.delete('/:groupId/participants', leaveGroup); // 그룹 탈퇴
=======
groupRouter.post('/:groupId/likes', Controller.recommendGroup); // 그룹 추천
groupRouter.delete('/:groupId/likes', Controller.removeLike); // 그룹 추천 삭제

groupRouter
  .route('/:groupId/participants')
  .post(Controller.joinGroup) // 그룹 참여
  .delete(Controller.leaveGroup); // 그룹 나가기
>>>>>>> origin/main

groupRouter
  .route('/:groupId')
  .get(Middleware.validateID, Controller.getGroupByIdController) // 상세 조회
  .patch(
    Middleware.validate(Params.UpdateGroupSchema),
    Controller.updateGroupController,
  ) // 그룹 업데이트
  .delete(Controller.deleteGroupController); // 그룹 삭제

groupRouter.get(
  '/:groupId/rank',
  Middleware.validateID,
  Controller.getGroupMemRankController,
); // 랭킹 조회
