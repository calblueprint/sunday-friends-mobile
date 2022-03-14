import * as React from "react";
import { SvgXml } from "react-native-svg";

export type IconType =
  | "chevron_down"
  | "chevron_right"
  | "searchbar_close"
  | "searchbar_search"
  | "modal_close"
  | "basic_check"
  | "greyX"
  | "addPlus"
  | "downArrow"
  | "chevronLeft"
  | "profileSmallHeadSmiley"
  | "profileSmallDependentSmiley"
  | "profileHeadSmiley"
  | "profileDependentSmiley"
  | "modal_x"
  | "invite_add";

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
  chevron_right: (
      <SvgXml
        xml={`
        <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L7 8L1 14.5" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `}
      />
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
          />`}
    />
  ),

  greyX: (
    <SvgXml
      xml={`
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5001 20.0838C7.95773 20.0861 5.51884 19.0772 3.72112 17.2794C1.9234 15.4817 0.914465 13.0428 0.916752 10.5005V10.3088C0.995132 6.46801 3.35839 3.04478 6.92201 1.61007C10.4856 0.175351 14.5616 1.00616 17.2793 3.72122C20.0225 6.46213 20.8435 10.5861 19.3592 14.1686C17.8749 17.7511 14.3779 20.0861 10.5001 20.0838ZM10.5001 11.8517L12.9822 14.3338L14.3334 12.9826L11.8513 10.5005L14.3334 8.01838L12.9822 6.66713L10.5001 9.14922L8.018 6.66713L6.66676 8.01838L9.14884 10.5005L6.66676 12.9826L8.018 14.3338L10.5001 11.8527V11.8517Z" fill="#A9A9A9"/>
      </svg>
      `}
    />
  ),
  searchbar_close: (
    <SvgXml
      xml={`
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.49462 13.5018C5.76985 13.5034 4.11528 12.8189 2.89568 11.5993C1.67609 10.3797 0.991615 8.72515 0.993167 7.00038V6.87035C1.04634 4.26471 2.64961 1.94235 5.06721 0.969022C7.48482 -0.00430738 10.25 0.559322 12.0938 2.40125C13.9548 4.26072 14.5117 7.05846 13.5048 9.4889C12.4978 11.9193 10.1254 13.5034 7.49462 13.5018ZM7.49462 7.91709L9.1785 9.60096L10.0952 8.68426L8.41133 7.00038L10.0952 5.31651L9.1785 4.3998L7.49462 6.08368L5.81075 4.3998L4.89404 5.31651L6.57792 7.00038L4.89404 8.68426L5.81075 9.60096L7.49462 7.91774V7.91709Z" fill="#A9A9A9"/>
      </svg>
      `}
    />
  ),
  searchbar_search: (
    <SvgXml
      xml={`
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4512 11.0714L6.64124 7.26072C4.94635 8.46569 2.61086 8.17095 1.26849 6.58267C-0.0738888 4.9944 0.0246782 2.64245 1.49524 1.17205C2.96541 -0.298982 5.31759 -0.397975 6.90617 0.944331C8.49474 2.28664 8.78965 4.62235 7.58457 6.31739L11.3946 10.1281L10.4519 11.0707L10.4512 11.0714ZM4.32324 1.33338C3.05904 1.33309 1.96837 2.2205 1.71156 3.45834C1.45474 4.69618 2.10238 5.94424 3.26236 6.44688C4.42234 6.94952 5.77584 6.56861 6.5034 5.53476C7.23096 4.5009 7.13262 3.09826 6.26791 2.17605L6.67124 2.57605L6.21657 2.12272L6.20857 2.11472C5.70976 1.61284 5.03084 1.33147 4.32324 1.33338Z" fill="#525454"/>
      </svg>
      `}
    />
  ),
  modal_close: (
    <SvgXml
      xml={`
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="8.5" r="8.5" fill="#CCCCCC"/>
      <path d="M7.41759 8.45583L5.09709 5.104H7.04075L8.53817 7.56333L9.97609 5.104H11.8503L9.57942 8.42608L12.1181 12.125H10.1744L8.45884 9.29875L6.79284 12.125H4.95825L7.41759 8.45583Z" fill="#9D9D9D"/>
      </svg>
      `}
    />
  ),
  basic_check: (
    <SvgXml
      xml={`
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.12803 16.9207L4.38428 12.177L5.73936 10.8219L9.12947 14.2081L9.12803 14.2096L17.2595 6.07812L18.6146 7.43321L10.4831 15.5656L9.12899 16.9197L9.12803 16.9207Z" fill="#526DC2"/>
    </svg>
      `}
    />
  ),
  addPlus: (
    <SvgXml
      xml={`
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.501 26.625C6.25554 26.6171 0.383933 20.7455 0.375977 13.5V13.2375C0.520262 6.02472 6.45887 0.280466 13.6725 0.376179C20.8861 0.471892 26.6702 6.37169 26.6231 13.5858C26.5759 20.7999 20.7152 26.6236 13.501 26.625ZM6.93848 12.1875V14.8125H12.1885V20.0625H14.8135V14.8125H20.0635V12.1875H14.8135V6.93752H12.1885V12.1875H6.93848Z" fill="#526DC2"/>
      </svg>      
      `}
    />
  ),
  downArrow: (
    <SvgXml
      xml={`
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.00003 7.09375L11.0084 2.08542L9.83087 0.90625L6.00003 4.73958L2.17003 0.90625L0.991699 2.08458L6.00003 7.09375Z" fill="#A9A9A9"/>
      </svg>      
     `}
    />
  ),
  chevronLeft: (
    <SvgXml
      xml={`
        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.7052 8.49925L8.46812 16.2622L10.2945 14.4357L4.35287 8.49408L10.2945 2.55241L8.46812 0.736328L0.7052 8.49925Z" fill="#A9A9A9"/>
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
          </svg>`}
    />
  ),
  profileSmallHeadSmiley: (
    <SvgXml
      xml={`
        <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19.0663" cy="21.2948" r="17.0663" fill="#E6ECFE" stroke="#B5C4F4" stroke-width="2"/>
        <circle cx="11.5569" cy="19.9424" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
        <circle cx="26.0425" cy="19.9424" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
        <path d="M16.0132 26.6289C16.5703 28.8575 20.4703 28.8575 21.0275 26.6289" stroke="#525454" stroke-width="0.626786" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.95814 13.1199L1 7.05995H5.40724L4.85633 2.10181L8.71267 4.85633L10.9163 1L13.6708 9.81448C11.4672 13.3403 7.61086 13.4872 5.95814 13.1199Z" fill="#FFF2C3" stroke="#FFE381" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `}
    />
  ),
  profileSmallDependentSmiley: (
    <SvgXml
      xml={`
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13.0005" r="12.0513" fill="#E6ECFE"/>
        <circle cx="7.99085" cy="12.0988" r="0.371646" fill="#525454" stroke="#525454" stroke-width="0.743292"/>
        <circle cx="17.6537" cy="12.0988" r="0.371646" fill="#525454" stroke="#525454" stroke-width="0.743292"/>
        <path d="M10.9634 16.5586C11.335 18.0452 13.9365 18.0452 14.3082 16.5586" stroke="#525454" stroke-width="0.418102" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `}
    />
  ),
  profileHeadSmiley: (
    <SvgXml
      xml={`
        <svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34.6216" cy="38.8735" r="31.2883" fill="#E6ECFE" stroke="#B5C4F4" stroke-width="3.66667"/>
        <circle cx="20.8544" cy="36.3944" r="1.02143" fill="#525454" stroke="#525454" stroke-width="2.04286"/>
        <circle cx="47.4115" cy="36.3944" r="1.02143" fill="#525454" stroke="#525454" stroke-width="2.04286"/>
        <path d="M29.0242 48.6523C30.0456 52.7381 37.1956 52.7381 38.217 48.6523" stroke="#525454" stroke-width="1.14911" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5899 23.8858L1.5 12.7759H9.57994L8.56994 3.686L15.6399 8.73596L19.6799 1.66602L24.7298 17.8259C20.6898 24.2898 13.6199 24.5592 10.5899 23.8858Z" fill="#FFF2C3" stroke="#FFE381" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `}
    />
  ),
  profileDependentSmiley: (
    <SvgXml
      xml={`
				<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="33.6216" cy="33.6216" r="31.2883" fill="#E6ECFE" stroke="#B5C4F4" stroke-width="3.66667"/>
				<circle cx="19.8534" cy="31.1425" r="1.02143" fill="#525454" stroke="#525454" stroke-width="2.04286"/>
				<circle cx="46.411" cy="31.1425" r="1.02143" fill="#525454" stroke="#525454" stroke-width="2.04286"/>
				<path d="M28.0234 43.4004C29.0449 47.4861 36.1949 47.4861 37.2163 43.4004" stroke="#525454" stroke-width="1.14911" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			`}
    />
  ),
};

type Props = {
  type: IconType;
};

const SvgIcon: React.FC<Props> = ({ type }: Props) =>
  React.cloneElement(IconSvgs[type]);

export default SvgIcon;
