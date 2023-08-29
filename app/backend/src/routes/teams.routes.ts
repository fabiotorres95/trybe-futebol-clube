import { Request, Response, Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => teamController.getAllTeams(req, res),
);
router.get(
  '/:id',
  (req: Request, res: Response) => teamController.getOneTeam(req, res),
);

export default router;
