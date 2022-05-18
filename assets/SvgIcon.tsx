import * as React from "react";
import { SvgXml } from "react-native-svg";

export type IconType =
  | "chevron_back"
  | "chevron_down"
  | "chevron_right"
  | "chevron_up"
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
  | "invite_add"
  | "invite_delete"
  | "headSmiley"
  | "parentSmiley"
  | "childSmiley"
  | "sfLogo"
  | "passwordHidden"
  | "redX"
  | "greenCheck"
  | "tierActive"
  | "tierInactive";

const IconSvgs: Record<IconType, React.ReactElement> = {
  chevron_back: (
    <SvgXml
      xml={`
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.94199 11.4998L13.7016 17.2594L15.0576 15.9053L10.6493 11.4998L15.0576 7.09532L13.7025 5.74023L7.94199 11.4998Z" fill="#525454"/>
</svg>

      `}
    ></SvgXml>
  ),

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
  chevron_up: (
    <SvgXml
        xml={`
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5005 6.90625L15.5089 11.9146L14.3314 13.0938L10.5005 9.26042L6.67052 13.0938L5.49219 11.9154L10.5005 6.90625Z" fill="#A9A9A9"/>
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

  invite_delete: (
    <SvgXml
      xml={`<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4998 18.3337C8.2891 18.3356 6.16832 17.4583 4.60509 15.8951C3.04185 14.3318 2.16452 12.2111 2.16651 10.0003V9.83366C2.23466 6.49384 4.28967 3.51712 7.38848 2.26954C10.4873 1.02196 14.0316 1.7444 16.3948 4.10532C18.7802 6.48872 19.4941 10.0748 18.2035 13.19C16.9128 16.3053 13.8719 18.3356 10.4998 18.3337ZM10.4998 11.1753L12.6582 13.3337L13.8332 12.1587L11.6748 10.0003L13.8332 7.84199L12.6582 6.66699L10.4998 8.82532L8.34151 6.66699L7.16651 7.84199L9.32484 10.0003L7.16651 12.1587L8.34151 13.3337L10.4998 11.1762V11.1753Z" fill="#A9A9A9"/>
    </svg>
    `}
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
  headSmiley: (
    <SvgXml
      xml={`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21.0663" cy="22.2948" r="17.0663" fill="#E6ECFE" stroke="#B5C4F4" stroke-width="2"/>
      <circle cx="13.5569" cy="20.9429" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
      <circle cx="28.0425" cy="20.9429" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
      <path d="M18.0132 27.6287C18.5703 29.8572 22.4703 29.8572 23.0275 27.6287" stroke="#525454" stroke-width="0.626786" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.95814 14.1199L3 8.05995H7.40724L6.85633 3.10181L10.7127 5.85633L12.9163 2L15.6708 10.8145C13.4672 14.3403 9.61086 14.4872 7.95814 14.1199Z" fill="#FFF2C3" stroke="#FFE381" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
    />
  ),

  parentSmiley: (
    <SvgXml
      xml={`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21.0663" cy="21.0663" r="17.0663" fill="#E6ECFE" stroke="#B5C4F4" stroke-width="2"/>
    <circle cx="13.5567" cy="19.7144" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
    <circle cx="28.0423" cy="19.7144" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
    <path d="M18.0132 26.4001C18.5703 28.6287 22.4703 28.6287 23.0275 26.4001" stroke="#525454" stroke-width="0.626786" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `}
    />
  ),

  childSmiley: (
    <SvgXml
      xml={`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21.0663" cy="21.0663" r="17.0663" fill="#DDF3E1" stroke="#ADDBB6" stroke-width="2"/>
    <rect width="16.7143" height="2.22857" transform="translate(12.4424 18.6001)" fill="#DDF3E1"/>
    <circle cx="13.5567" cy="19.7144" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
    <circle cx="28.0423" cy="19.7144" r="0.557143" fill="#525454" stroke="#525454" stroke-width="1.11429"/>
    <path d="M18.0132 26.4001C18.5703 28.6287 22.4703 28.6287 23.0275 26.4001" stroke="#525454" stroke-width="0.626786" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
    />
  ),

  sfLogo: (
    <SvgXml
      xml={`<svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.8926 25.1939C8.89487 25.5307 8.99319 25.8599 9.17603 26.1428C9.35888 26.4257 9.61864 26.6505 9.92482 26.7909C10.0573 26.8527 10.1971 26.8972 10.3409 26.9233H10.3923V27.1935C10.3923 27.1935 10.3734 27.7177 10.3653 28.5446C10.2246 28.5319 10.0853 28.5066 9.94914 28.4689C9.351 28.3161 8.81965 27.971 8.43686 27.4867C8.05408 27.0024 7.84108 26.4056 7.83066 25.7884C7.82475 25.5586 7.73675 25.3385 7.58259 25.168C7.42844 24.9975 7.21833 24.8878 6.9903 24.8589C6.85848 24.844 6.72501 24.8572 6.59865 24.8976C6.4723 24.9379 6.35592 25.0046 6.25715 25.0932C6.15839 25.1817 6.07948 25.2902 6.0256 25.4114C5.97173 25.5326 5.94412 25.6638 5.94457 25.7965C5.95808 27.38 7.04434 28.6229 7.85228 29.8821C8.35373 30.6669 8.78332 31.4953 9.13579 32.3573C9.40601 32.9869 9.62218 33.63 9.82214 34.2839H2.52637V7.72461H10.3923V23.4375H10.3166C10.173 23.4658 10.0333 23.5111 9.9005 23.5726C9.59552 23.7188 9.33863 23.9491 9.16008 24.2363C8.98152 24.5235 8.88872 24.8557 8.8926 25.1939Z" fill="#098D45"/>
      <path d="M40.9241 10.873V37.435H33.939C34.4907 35.9597 35.1725 34.5364 35.9764 33.1819C36.8979 31.6011 38.3516 30.096 38.3354 28.1505C38.3335 27.9954 38.299 27.8425 38.234 27.7017C38.169 27.5609 38.075 27.4354 37.9582 27.3334C37.8414 27.2314 37.7044 27.1552 37.5562 27.1098C37.4079 27.0643 37.2517 27.0506 37.0978 27.0697C36.8296 27.1119 36.5856 27.2492 36.4104 27.4567C36.2353 27.6641 36.1407 27.9277 36.144 28.1991C36.1415 29.0365 35.8208 29.8416 35.2468 30.4512C34.6728 31.0609 33.8884 31.4294 33.0527 31.4822V29.5907C33.5687 29.545 34.0488 29.3077 34.3985 28.9256C34.7482 28.5435 34.9421 28.0443 34.9421 27.5263C34.9421 27.0083 34.7482 26.5092 34.3985 26.1271C34.0488 25.745 33.5687 25.5077 33.0527 25.4619V10.873H40.9241Z" fill="#FED719"/>
      <path d="M11.2002 36.6289C11.2218 36.7829 11.2272 36.8559 11.2002 36.8316V36.6289Z" fill="#253C85"/>
      <path d="M18.6583 18.1317C18.6586 18.7338 18.8303 19.3234 19.1533 19.8315C19.4763 20.3397 19.9372 20.7454 20.4822 21.0014C20.5471 21.0311 20.6119 21.0581 20.6795 21.0824V24.0845L20.4822 24.0494C19.4133 23.7663 18.467 23.1399 17.7889 22.2664C17.1107 21.393 16.7383 20.321 16.729 19.2152C16.732 18.8004 16.5849 18.3984 16.3147 18.0835C16.0445 17.7686 15.6696 17.5621 15.259 17.5021C15.0226 17.4731 14.7826 17.4945 14.5551 17.5649C14.3275 17.6354 14.1174 17.7532 13.9387 17.9108C13.76 18.0683 13.6167 18.2619 13.5182 18.4788C13.4198 18.6958 13.3684 18.9311 13.3675 19.1693C13.3756 21.9984 15.3077 24.2385 16.7533 26.5029C17.6372 27.9134 18.3932 29.4001 19.0123 30.9452C19.1924 31.3992 19.3726 31.8576 19.5527 32.3206H12.1164C12.4747 31.5358 12.8733 30.7701 13.3108 30.0265C14.0998 28.6754 15.3401 27.3919 15.3239 25.7274C15.3231 25.5948 15.2941 25.4639 15.2389 25.3434C15.1836 25.2229 15.1034 25.1155 15.0035 25.0283C14.9035 24.9412 14.7862 24.8763 14.6593 24.838C14.5324 24.7996 14.3988 24.7887 14.2673 24.806C14.039 24.8429 13.8315 24.9606 13.6827 25.1377C13.534 25.3147 13.4537 25.5394 13.4567 25.7706C13.4544 26.4179 13.2294 27.0446 12.8195 27.5456C12.4097 28.0465 11.8398 28.3911 11.2058 28.5214V26.8704C11.563 26.7555 11.8746 26.5302 12.0956 26.227C12.3166 25.9237 12.4357 25.5582 12.4357 25.1829C12.4357 24.8077 12.3166 24.4421 12.0956 24.1389C11.8746 23.8356 11.563 23.6103 11.2058 23.4954V1.73242H20.6795V15.1783L20.4822 15.262C19.9368 15.5174 19.4755 15.923 19.1525 16.4313C18.8294 16.9396 18.658 17.5294 18.6583 18.1317Z" fill="#253C85"/>
      <path d="M30.8046 27.5267C30.8023 27.8851 30.8956 28.2377 31.0748 28.5481C31.2878 28.9206 31.6118 29.2173 32.0016 29.3966C32.1248 29.4527 32.2533 29.4961 32.3853 29.5263V31.4529C32.2605 31.4379 32.1368 31.4144 32.0151 31.3827C31.3156 31.2027 30.6944 30.7985 30.2464 30.2319C29.7984 29.6654 29.5484 28.9676 29.5346 28.2455C29.5344 27.9737 29.4358 27.7111 29.2569 27.5064C29.0781 27.3017 28.8311 27.1688 28.5618 27.1322C28.4076 27.115 28.2515 27.1307 28.1039 27.1782C27.9562 27.2258 27.8203 27.3041 27.7051 27.4081C27.59 27.512 27.4982 27.6392 27.4358 27.7812C27.3734 27.9232 27.3418 28.0769 27.3431 28.232C27.3431 30.0829 28.6293 31.5394 29.5778 33.0121C30.1609 33.9332 30.6627 34.9033 31.0775 35.9114C31.604 37.1998 32.0304 38.5269 32.3529 39.8809H21.7092C21.7713 39.3567 21.8497 38.8352 21.9415 38.3218C22.6792 34.2226 24.3573 30.4342 26.5001 26.8296C27.9268 24.4247 30.1587 22.1414 30.1587 19.169C30.1589 18.9319 30.1087 18.6975 30.0117 18.4812C29.9146 18.2649 29.7728 18.0716 29.5957 17.9141C29.4185 17.7566 29.2099 17.6384 28.9837 17.5673C28.7576 17.4963 28.5189 17.4739 28.2835 17.5018C27.8727 17.5617 27.4974 17.7681 27.2268 18.083C26.9561 18.3978 26.8084 18.7998 26.8108 19.2149C26.7959 20.5424 26.2586 21.8105 25.3154 22.7447C24.3721 23.6788 23.0988 24.2037 21.7713 24.2058C21.6605 24.2058 21.5497 24.2058 21.4417 24.2058V21.274C21.5689 21.2904 21.6971 21.2985 21.8254 21.2983C22.6489 21.2742 23.4307 20.9302 24.0047 20.3391C24.5787 19.7481 24.8998 18.9566 24.8998 18.1327C24.8998 17.3088 24.5787 16.5174 24.0047 15.9263C23.4307 15.3353 22.6489 14.9913 21.8254 14.9672C21.697 14.9657 21.5688 14.9738 21.4417 14.9915V4.88281H32.3961V25.4974C32.2543 25.5283 32.1165 25.5755 31.9854 25.6379C31.6286 25.8069 31.3277 26.0746 31.1184 26.4094C30.9091 26.7442 30.8002 27.1319 30.8046 27.5267Z" fill="#CE238F"/>
      </svg>
      `}
    />
  ),

  passwordHidden: (
    <SvgXml
      xml={`
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.4812 13.3663L10.3837 11.2688C9.47882 11.6808 8.49424 11.8885 7.5 11.877C6.47492 11.8897 5.46045 11.6685 4.53375 11.2301C3.81543 10.8796 
				3.1704 10.3956 2.63313 9.80383C2.06281 9.19249 1.61456 8.47779 1.3125 7.6982L1.25 7.50195L1.31562 7.30445C1.76738 6.15213 2.52766 5.14643 3.51312 
				4.39758L1.875 2.75945L2.75813 1.87695L13.3638 12.4826L12.4825 13.3663H12.4812ZM4.3975 5.28258C3.5987 5.84253 2.96791 6.6099 2.57313 7.50195C3.41964 
				9.45502 5.37242 10.6936 7.5 10.627C8.15615 10.6323 8.80847 10.5267 9.42937 10.3145L8.30437 9.18945C8.05396 9.3122 7.77888 9.37633 7.5 9.37695C6.46716 
				9.37047 5.63148 8.53479 5.625 7.50195C5.6253 7.22243 5.68943 6.94667 5.8125 6.6957L4.3975 5.28258ZM12.4075 9.7582L11.5375 8.88883C11.9035 8.47502 
				12.2035 8.00723 12.4269 7.50195C11.5815 5.54794 9.62797 4.30888 7.5 4.37695C7.34562 4.37695 7.19063 4.38258 7.04063 4.3932L5.9375 3.28883C6.45102 
				3.17897 6.97487 3.1247 7.5 3.12695C8.52507 3.11423 9.53955 3.33547 10.4663 3.77383C11.1846 4.12429 11.8296 4.60832 12.3669 5.20008C12.9369 5.81068 
				13.3852 6.5245 13.6875 7.3032L13.75 7.50195L13.6844 7.69945C13.3918 8.46075 12.9588 9.16036 12.4081 9.76195L12.4075 9.7582Z" fill="#A9A9A9"/>
				</svg>
			
			`}
    />
  ),
  redX: (
    <SvgXml
      xml={`
				<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.42024 4.82L1.14424 0.0879999H3.88824L6.00224 3.56L8.03224 0.0879999H10.6782L7.47224 4.778L11.0562 10H8.31224L5.89024 6.01L3.53824 10H0.948242L4.42024 4.82Z" fill="#E94444"/>
				</svg>
  		`}
    />
  ),
  greenCheck: (
    <SvgXml
      xml={`
				<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 4.75L4.5 9.25L13 0.75" stroke="#098D45" stroke-width="2"/>
				</svg>
			`}
    />
  ),
  tierActive: (
    <SvgXml
      xml={`
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.50032 17.3327C3.90005 17.3276 0.172044 13.5996 0.166992 8.99936V8.8327C0.258602 4.25314 4.02915 0.605994 8.60922 0.666764C13.1893 0.727534 16.8617 4.47344 16.8318 9.05381C16.8019 13.6342 13.0808 17.3318 8.50032 17.3327ZM4.67532 8.6577L3.50033 9.8327L6.83366 13.166L13.5003 6.49936L12.3253 5.31603L6.83366 10.8077L4.67532 8.6577Z" fill="#253C85"/>
        </svg>
			`}
    />
  ),
  tierInactive: (
    <SvgXml
      xml={`
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.50032 17.3327C3.90005 17.3276 0.172044 13.5996 0.166992 8.99936V8.8327C0.258602 4.25314 4.02915 0.605994 8.60922 0.666764C13.1893 0.727534 16.8617 4.47344 16.8318 9.05381C16.8019 13.6342 13.0808 17.3318 8.50032 17.3327ZM4.67532 8.6577L3.50033 9.8327L6.83366 13.166L13.5003 6.49936L12.3253 5.31603L6.83366 10.8077L4.67532 8.6577Z" fill="#A9A9A9"/>
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
