import { Request, Response, NextFunction } from 'express';
import { createGroupService } from '@/services/group/create_group.service.js';
import { CreateGroupRequest } from '@/models/group/create_group.dto.js';
import { GroupResponse } from '@/models/group/group_response.dto.js';

export const createGroupController = async (
  req: Request<{}, {}, CreateGroupRequest>,
  res: Response<GroupResponse>,
  next: NextFunction,
) => {
  try {
    const group = await createGroupService(req.body);
    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};
