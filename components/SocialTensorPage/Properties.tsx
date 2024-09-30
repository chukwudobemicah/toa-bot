import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import Icon from "../icon-selector/icon-selector";

export default function Properties() {
  const [responsesValue, setResponsesValue] = useState<number>(0);
  const [recencyValue, setRecencyValue] = useState<number>(0);

  return (
    <div className="bg-secondary min-w-[200px] xl:w-[300px] text-white px-6 pt-4 rounded-lg w-64">
      <h2 className="font-segeo-ui text-sm text-[#EFF4FC] mb-4">Properties</h2>

      <div className="mb-4 text-sm">
        <Dropdown.Root>
          <Dropdown.Trigger>
            <div className="flex items-center justify-between">
              <p>Platform</p>
              <div>
                <Icon iconType={"chevron"} className="w-4 text-text-tertiary" />
              </div>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>Twitter</Dropdown.Item>
            <Dropdown.Item>Facebook</Dropdown.Item>
            <Dropdown.Item>Instagram</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>

      <div className="mb-4 text-sm">
        <Dropdown.Root>
          <Dropdown.Trigger>
            <Dropdown.Trigger>
              <div className="flex items-center justify-between">
                <p>Sort</p>
                <div>
                  <Icon
                    iconType={"chevron"}
                    className="w-4 text-text-tertiary"
                  />
                </div>
              </div>
            </Dropdown.Trigger>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item>Relevance</Dropdown.Item>
            <Dropdown.Item>Date</Dropdown.Item>
            <Dropdown.Item>Popularity</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Responses</label>
        <Slider.Root
          className="relative flex items-center w-full h-5 SliderRoot"
          defaultValue={[0]}
          min={0}
          max={10}
          step={1}
          onValueChange={(value) => setResponsesValue(value[0])}
        >
          <Slider.Track className="bg-[#1E293B] relative flex-grow h-2 rounded SliderTrack">
            <Slider.Range className="absolute bg-white h-full rounded SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-white rounded-full SliderThumb !cursor-grab" />
        </Slider.Root>
        <span className="block text-sm text-gray-400 mt-2">
          Value: {responsesValue}
        </span>
      </div>

      <div>
        <label className="block text-sm mb-1">Recency (days)</label>
        <Slider.Root
          className="relative flex items-center w-full h-5 SliderRoot"
          defaultValue={[0]}
          min={0}
          max={365}
          step={1}
          onValueChange={(value) => setRecencyValue(value[0])}
        >
          <Slider.Track className="bg-[#1E293B] relative flex-grow h-2 rounded SliderTrack">
            <Slider.Range className="absolute bg-white h-full rounded SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-white rounded-full SliderThumb !cursor-grab" />
        </Slider.Root>
        <span className="block text-sm text-gray-400 mt-2">
          Value: {recencyValue}
        </span>
      </div>
    </div>
  );
}
