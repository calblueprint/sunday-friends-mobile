import * as React from "react";
import { SvgXml } from "react-native-svg";

export type IconType = "chevron_down" | "modal_x";

const IconSvgs: Record<IconType, React.ReactElement> = {
  chevron_down: (
    <SvgXml
      xml={`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13.0937L4.9917 8.08542L6.1692 6.90625L10 10.7396L13.83 6.90625L15.0084 8.08458L10 13.0937Z" fill="#A9A9A9"/>
      </svg>
      `}
    ></SvgXml>
  ),

  modal_x: (
    <SvgXml
      xml={`
        <svg
          width="20"
          height="20"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="8.5" r="8.5" fill="#CCCCCC" />
          <path
            d="M7.41734 8.45583L5.09684 5.104H7.04051L8.53792 7.56333L9.97584 5.104H11.8501L9.57917 8.42608L12.1178 12.125H10.1742L8.45859 9.29875L6.79259 12.125H4.95801L7.41734 8.45583Z"
            fill="#9D9D9D"
          />
        </svg>
      `}
    />
  ),
};

type Props = {
  type: IconType;
};

const SvgIcon: React.FC<Props> = ({ type }: Props) => {
  return React.cloneElement(IconSvgs[type]);
};

export default SvgIcon;
