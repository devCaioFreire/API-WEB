import { Request, Response } from "express";
import { UpdateCoupomStatusService } from "../../services/coupomService/CancelCoupomUpdate";

export class UpdateCoupomStatusController {
  async handle(req: Request, res: Response) {
    const { id, status } = req.body;
    const updateCoupomStatusService = new UpdateCoupomStatusService();

    try {
      const result = await updateCoupomStatusService.execute({ id, status });
      return res.json(result);
    } catch (error) {
      console.error("Error updating coupom status:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}