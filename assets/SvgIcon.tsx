import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconType =
  | "chevron_down"
  | "chevron_right"
  | "searchbar_close"
  | "searchbar_search"
  | "modal_close";

const IconSvgs: Record<IconType, React.ReactElement> = {
  chevron_down: (
    <SvgXml
      xml={`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13.0937L4.9917 8.08542L6.1692 6.90625L10 10.7396L13.83 6.90625L15.0084 8.08458L10 13.0937Z" fill="#A9A9A9"/>
      </svg>
      `}
    />
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
  )
};

type Props = {
  type: IconType;
};

const SvgIcon: React.FC<Props> = ({ type }: Props) => React.cloneElement(IconSvgs[type]);

export default SvgIcon;
