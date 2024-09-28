import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

type PropertiesProps = {
  platform: string;
  sort: string;
  responses: number;
  recency: number;
};

export default function Properties({
  platform,
  sort,
  responses,
  recency,
}: PropertiesProps) {
  const [responsesValue, setResponsesValue] = useState<number>(responses);
  const [recencyValue, setRecencyValue] = useState<number>(recency);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-64">
      <h2 className="text-xl font-semibold mb-4">Properties</h2>

      <div className="mb-4">
        <label className="block text-sm mb-1">Platform</label>
        <select
          className="bg-gray-800 border border-gray-700 text-white p-2 w-full rounded"
          defaultValue={platform}
        >
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Sort</label>
        <select
          className="bg-gray-800 border border-gray-700 text-white p-2 w-full rounded"
          defaultValue={sort}
        >
          <option value="Relevance">Relevance</option>
          <option value="Date">Date</option>
          <option value="Popularity">Popularity</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Responses</label>
        <Slider.Root
          className="relative flex items-center w-full h-5"
          defaultValue={[responsesValue]}
          min={0}
          max={10}
          step={1}
          onValueChange={(value) => setResponsesValue(value[0])}
        >
          <Slider.Track className="bg-gray-700 relative flex-grow h-1 rounded">
            <Slider.Range className="absolute bg-blue-500 h-full rounded" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full" />
        </Slider.Root>
        <span className="block text-sm text-gray-400 mt-2">
          Value: {responsesValue}
        </span>
      </div>

      <div>
        <label className="block text-sm mb-1">Recency (days)</label>
        <Slider.Root
          className="relative flex items-center w-full h-5"
          defaultValue={[recencyValue]}
          min={0}
          max={365}
          step={1}
          onValueChange={(value) => setRecencyValue(value[0])}
        >
          <Slider.Track className="bg-gray-700 relative flex-grow h-1 rounded">
            <Slider.Range className="absolute bg-blue-500 h-full rounded" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full" />
        </Slider.Root>
        <span className="block text-sm text-gray-400 mt-2">
          Value: {recencyValue}
        </span>
      </div>
    </div>
  );
}
