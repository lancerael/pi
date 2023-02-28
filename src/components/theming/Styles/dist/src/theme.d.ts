/// <reference types="react" />
import { ThemeType } from './themes';
export declare const baseTheme: {
    fonts: string[];
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
};
export declare const getTheme: (themeName?: ThemeType) => {
    fonts: string[];
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
    colors: {
        light: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
        dark: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
    } | {
        light: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
        dark: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
    } | {
        light: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
        dark: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
    } | {
        light: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
        dark: {
            bg: string;
            text: string;
            textSoft: string;
            textStrong: string;
            subtle: string;
            border: string;
            shadow: string;
            input: string;
            outline: string;
            mark: string;
            special: string;
            specialBg: string;
            specialText: string;
            specialShadow: string;
            specialMark: string;
            light: string;
            dark: string;
        };
    };
};
export declare const Theme: ({ children, themeName, theme, }: any) => JSX.Element;
