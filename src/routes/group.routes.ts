import express from 'express';

import { getGroupsController } from '../controllers/group/get_group.controller.js';
import { getGroupByIdController } from '../controllers/group/get_group_by_id.controller.js';
import { getGroupMemRankController } from '@/controllers/group/get_group_mem_rank.controller.js';
import { recommendGroup } from '../controllers/group/recommend_group.controller.js';
import { joinGroup } from '../controllers/group/join_group.controller.js';
import { leaveGroup } from '../controllers/group/leave_group.controller.js';
import {
  validateGroupQuery,
  validateID,
} from '../middleware/group.middleware.js';
import * as Params from '../models/group/index.js';
import * as Controller from '../controllers/group/index.js';
import { validate } from '../middleware/validate.middleware.js';
export const groupRouter = express.Router();

groupRouter
  .route('/')
  .get(validateGroupQuery, getGroupsController) // 목록 조회
  .post(validate(Params.CreateGroupSchema), Controller.createGroupController);

// 추천 API (프론트엔드와 일치하도록 수정)
groupRouter.post('/:groupId/likes', recommendGroup); // 추천수 증가
groupRouter.delete('/:groupId/likes', recommendGroup); // 추천수 증가 (중복 방지용 동일 동작)

// 참여 API (프론트엔드와 일치하도록 수정)
groupRouter.post('/:groupId/participants', joinGroup); // 그룹 참여
groupRouter.delete('/:groupId/participants', leaveGroup); // 그룹 탈퇴

groupRouter
  .route('/:groupId')
  .get(validateID, getGroupByIdController) // 상세 조회
  .patch(validate(Params.UpdateGroupSchema), Controller.updateGroupController)
  .delete(Controller.deleteGroupController);

groupRouter.get('/:groupId/rank', validateID, getGroupMemRankController); // 랭킹 조회
