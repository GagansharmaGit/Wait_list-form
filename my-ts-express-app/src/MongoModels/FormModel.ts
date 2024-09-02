import mongoose from "mongoose";

interface IFormEntry extends mongoose.Document {
    name: string;
    email: string;
    TelegramHandle: string;
    noOfNodes: string;
    TireOfNode: string;
    WalletAddress: string;
    mobile: string;
  }

const formSchema = new mongoose.Schema<IFormEntry>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    TelegramHandle: { type: String, required: true },
    noOfNodes: { type: String, required: true },
    TireOfNode: { type: String, required: true },
    WalletAddress: { type: String, required: true },
    mobile: { type: String, required: true }
  });
  
  const FormEntry = mongoose.model<IFormEntry>('FormEntry', formSchema);

  export default FormEntry;