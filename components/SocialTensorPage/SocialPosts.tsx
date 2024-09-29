// pages/index.tsx
import { useState } from "react";

export default function SocialPosts() {
  // Sample data
  const [posts] = useState([
    {
      username: "swift_capital",
      date: "Wed Jun 19 2024",
      content:
        "Frens, Over the last two months, I farmed Season 2 of @Juice_Finance &amp; I was just able to claim 6,181 $Juice that I'm going to stake in @wasabi_protocol to win the next @Blast_L2 jackpot. It's time to go back to the trenches to farm season 3, which is already live 🚀",
    },
    {
      username: "swift_capital",
      date: "Wed Jun 19 2024",
      content:
        "Frens, Over the last two months, I farmed Season 2 of @Juice_Finance &amp; I was just able to claim 6,181 $Juice that I'm going to stake in @wasabi_protocol to win the next @Blast_L2 jackpot. It's time to go back to the trenches to farm season 3, which is already live 🚀",
    },
    {
      username: "swift_capital",
      date: "Wed Jun 19 2024",
      content:
        "Frens, Over the last two months, I farmed Season 2 of @Juice_Finance &amp; I was just able to claim 6,181 $Juice that I'm going to stake in @wasabi_protocol to win the next @Blast_L2 jackpot. It's time to go back to the trenches to farm season 3, which is already live 🚀",
    },
  ]);

  return (
    <div className="overflow-y-auto h-screen relative px-4">
      {/* Header */}
      <h1 className="text-white sticky pt-2 pb-4 bg-background top-0 left-0 font-quicksand text-xl font-bold text-center mb-4">
        Social Tensor
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Enter your query"
          className="w-full max-w-lg px-4 py-4 rounded-full bg-secondary text-[#788493] placeholder:text-[#788493] text-sm focus:outline-none"
        />
        {/* <button className="ml-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white">
          Search
        </button> */}
      </div>

      {/* Post Cards */}
      <div className="max-w-2xl mx-auto">
        {posts.map(({ username, content, date }, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg shadow-md p-4 mt-4"
          >
            {/* Header: Profile and Username */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {username[0]}
                </span>
              </div>
              <div className="ml-4">
                <p className="text-white font-bold">{username}</p>
                <p className="text-gray-500 text-xs">{date}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-text-secondary text-sm mb-4">{content}</p>

            {/* Interaction Icons */}
            <div className="flex items-center text-gray-500 space-x-6">
              <div className="flex items-center gap-1 cursor-pointer">
                {/* <ChatAlt2Icon className="w-5 h-5" /> */}
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                {/* <RefreshIcon className="w-5 h-5" /> */}
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                {/* <HeartIcon className="w-5 h-5" /> */}
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/PostCard.tsx
// import type { PostCardProps } from '../types';
// import { ChatAlt2Icon, RefreshIcon, HeartIcon } from '@heroicons/react/outline';

// export type PostCardProps = {
//   username: string;
//   date: string;
//   content: string;
// };

// export default function PostCard({ username, date, content }: PostCardProps) {
//   return (
//     <div className="bg-gray-800 rounded-lg shadow-md p-4 mt-4">
//       {/* Header: Profile and Username */}
//       <div className="flex items-center mb-4">
//         <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
//           <span className="text-white text-sm font-bold">{username[0]}</span>
//         </div>
//         <div className="ml-4">
//           <p className="text-white font-bold">{username}</p>
//           <p className="text-gray-500 text-xs">{date}</p>
//         </div>
//       </div>

//       {/* Content */}
//       <p className="text-gray-300 mb-4">{content}</p>

//       {/* Interaction Icons */}
//       <div className="flex items-center text-gray-500 space-x-6">
//         <div className="flex items-center gap-1 cursor-pointer">
//           <ChatAlt2Icon className="w-5 h-5" />
//           <span className="text-sm">0</span>
//         </div>
//         <div className="flex items-center gap-1 cursor-pointer">
//           <RefreshIcon className="w-5 h-5" />
//           <span className="text-sm">0</span>
//         </div>
//         <div className="flex items-center gap-1 cursor-pointer">
//           <HeartIcon className="w-5 h-5" />
//           <span className="text-sm">0</span>
//         </div>
//       </div>
//     </div>
//   );
// }
