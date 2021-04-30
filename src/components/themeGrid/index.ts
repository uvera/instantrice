export interface ThemeData {
  name: string;
  instantWM: InstantWMData;
  instantMENU: InstantMENUData;
}

export interface MenuSchema {
  fg?: string;
  bg?: string;
  detail?: string;
}

export interface InstantMENUData {
  norm?: MenuSchema;
  fade?: MenuSchema;
  highlight?: MenuSchema;
  hover?: MenuSchema;
  sel?: MenuSchema;
  out?: MenuSchema;
  green?: MenuSchema;
  red?: MenuSchema;
  yellow?: MenuSchema;
}

export interface InstantWMData {
  minimizedColor?: string;
  bgColor?: string;
  hoverShadowColor?: string;
  hoverBgColor?: string;
  minimize?: string;
  darkMinimize?: string;
  darkActiveTag?: string;
  activeTag?: string;
  hoverFocus?: string;
  darkHoverFocus?: string;
  darkFocus?: string;
  focus?: string;
  border?: string;
  activeBorder?: string;
  close?: string;
  darkClose?: string;
  hoverClose?: string;
  darkHoverClose?: string;
}

export interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ThemeData;
}
