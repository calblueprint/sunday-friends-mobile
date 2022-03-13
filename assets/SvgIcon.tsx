import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconType = 'chevron_down' | 'greyX' | 'addPlus' | 'downArrow' | 'chevronLeft' | 'smallHeadSmiley' | 'dependentSmiley' | 'profileHeadSmiley';

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
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5001 20.0838C7.95773 20.0861 5.51884 19.0772 3.72112 17.2794C1.9234 15.4817 0.914465 13.0428 0.916752 10.5005V10.3088C0.995132 6.46801 3.35839 3.04478 6.92201 1.61007C10.4856 0.175351 14.5616 1.00616 17.2793 3.72122C20.0225 6.46213 20.8435 10.5861 19.3592 14.1686C17.8749 17.7511 14.3779 20.0861 10.5001 20.0838ZM10.5001 11.8517L12.9822 14.3338L14.3334 12.9826L11.8513 10.5005L14.3334 8.01838L12.9822 6.66713L10.5001 9.14922L8.018 6.66713L6.66676 8.01838L9.14884 10.5005L6.66676 12.9826L8.018 14.3338L10.5001 11.8527V11.8517Z" fill="#A9A9A9"/>
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
  smallHeadSmiley: (
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
  dependentSmiley: (
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
};

type Props = {
  type: IconType;
};

const SvgIcon: React.FC<Props> = ({ type }: Props) =>
  React.cloneElement(IconSvgs[type]);

export default SvgIcon;
