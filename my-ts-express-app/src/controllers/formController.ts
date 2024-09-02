import { Request, Response } from 'express';
import FormEntry from '../MongoModels/FormModel';

export const getFormEntries = async (req: Request, res: Response) => {
  try {
    const formEntries = await FormEntry.find();
    res.status(200).json(formEntries);
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