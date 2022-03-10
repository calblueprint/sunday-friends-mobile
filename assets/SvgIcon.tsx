import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconType = 'chevron_down' | 'greyX' | 'addPlus' | 'downArrow';

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
  greyX: (
    <SvgXml
      xml={`
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="8.5" r="8.5" fill="#CCCCCC"/>
      <path d="M7.41759 8.45583L5.09709 5.104H7.04075L8.53817 7.56333L9.97609 5.104H11.8503L9.57942 8.42608L12.1181 12.125H10.1744L8.45884 9.29875L6.79284 12.125H4.95825L7.41759 8.45583Z" fill="#9D9D9D"/>
      </svg>
      `}
    />
  ),
  addPlus: (
    <SvgXml
      xml={`
      <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.8" d="M3.40907 2.90145V0.368888H4.58326V2.90145H7.11582V4.07563H4.58326V6.60819H3.40907V4.07563H0.876517V2.90145H3.40907Z" fill="#525454"/>
      </svg>
      `}
    />
  ),
  downArrow: (
    <SvgXml
      xml={`
      <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9.5 6L18 1" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round"/>
      </svg>
     `}
    />
  )
};

type Props = {
  type: IconType;
};

const SvgIcon: React.FC<Props> = ({ type }: Props) =>
  React.cloneElement(IconSvgs[type]);

export default SvgIcon;
