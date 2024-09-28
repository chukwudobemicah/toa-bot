type EmojiPickerProps = {
  onSelectEmoji: (emoji: string) => void;
};

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelectEmoji }) => {
  const emojis = ["👍", "❤️", "😂", "🥲", "😮", "🙏"];

  return (
    <div className="flex gap-2 p-2 z-[99999] bg-zinc-800 rounded-lg shadow-lg">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onSelectEmoji(emoji)}
          className="text-2xl cursor-pointer hover:brightness-125"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;
