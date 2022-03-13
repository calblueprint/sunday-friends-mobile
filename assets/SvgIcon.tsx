import * as React from "react";
import { SvgXml } from "react-native-svg";

export type IconType = "chevron_down" | "modal_x" | "invite_add";

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

  invite_add: (
    <SvgXml
      xml={`
        <svg
          width="35"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="35" height="35" rx="17.5" fill="#7F93D1" />
          <path
            d="M11.3887 16.8888C10.775 16.8888 10.2775 17.3863 10.2775 18C10.2775 18.6137 10.775 19.1112 11.3887 19.1112V16.8888ZM23.6113 19.1112C24.225 19.1112 24.7225 18.6137 24.7225 18C24.7225 17.3863 24.225 16.8888 23.6113 16.8888V19.1112ZM11.3887 19.1112H23.6113V16.8888H11.3887V19.1112Z"
            fill="#F2F2F2"
          />
          <path
            d="M16.3888 24.1113C16.3888 24.725 16.8863 25.2225 17.5 25.2225C18.1137 25.2225 18.6112 24.725 18.6112 24.1113H16.3888ZM18.6112 11.8887C18.6112 11.275 18.1137 10.7775 17.5 10.7775C16.8863 10.7775 16.3888 11.275 16.3888 11.8887H18.6112ZM18.6112 24.1113V11.8887H16.3888V24.1113H18.6112Z"
            fill="#F2F2F2"
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
