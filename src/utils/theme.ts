export const defaultTheme = {
    token: {
        colorPrimary: 'var(--clr_gray_1000)',
        fontFamily: 'var(--primary_font_family)'
    },
    components: {
        Button: {
            colorPrimaryBg: 'var(--clr_gray_1000)',
            colorPrimaryHover: 'var(--clr_gray_900)',
            boxShadow: 'none',
        },
        Typography: {
            titleMarginTop: 4,
            titleMarginBottom: 4,
            fontWeightStrong: 700,
        },
        Table: {
            headerBg: 'var(--clr_gray_200)',
            headerColor: 'var(--clr_gray_1000)',
            fontWeightStrong: 600
        },
        Input: {
            controlHeight: 40,
            activeShadow: 'none',
        },
        Select: {
            optionSelectedBg: 'var(--clr_gray_200)',
            optionActiveBg: 'var(--clr_gray_200)'
        },
        Menu: {
            darkItemBg: 'var(--clr_gray_1000)',
            darkItemHoverBg: 'var(--clr_gray_900)',
            darkItemSelectedBg: 'var(--clr_gray_900)',
            darkSubMenuItemBg: 'var(--clr_gray_1000)'
        }
    }
};