type MessageType = {
  id: number;
  message: string;
  name?: string; // Optional since not all messages have a name
  imageMessageUrl?: string;
  time: string;
  position: Position;
};
