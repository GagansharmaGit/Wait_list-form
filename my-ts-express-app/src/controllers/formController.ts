import { Request, Response } from 'express';
import FormEntry from '../MongoModels/FormModel';

export const getFormEntries = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const formEntries = await FormEntry.find().skip(skip).limit(limit);
    const totalEntries = await FormEntry.countDocuments();

    res.status(200).json({
      data: formEntries,
      currentPage: page,
      totalPages: Math.ceil(totalEntries / limit),
      totalEntries
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createFormEntry = async (req: Request, res: Response) => {
  try {
    const newFormEntry = new FormEntry(req.body);
    const savedFormEntry = await newFormEntry.save();
    res.status(201).json(savedFormEntry);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};