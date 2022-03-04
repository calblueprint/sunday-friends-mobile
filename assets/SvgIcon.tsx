import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconType =
  | "chevron_down"

const IconSvgs: Record<IconType, React.ReactElement> = {
    chevron_down: (
      <SvgXml xml={`
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13.0937L4.9917 8.08542L6.1692 6.90625L10 10.7396L13.83 6.90625L15.0084 8.08458L10 13.0937Z" fill="#A9A9A9"/>
      </svg>
      `}>
      </SvgXml>
    )
}

type Props = {
    type: IconType;
  };

const SvgIcon: React.FC<Props> = ({ type }: Props) => {
    return React.cloneElement(IconSvgs[type]);
}

export default SvgIcon