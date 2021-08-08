declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module "*.css" {
    const content: any;
    export default content;
}

declare module "*.less" {
    const content: any;
    export default content;
}

declare module "*.wless" {
    const content: any;
    export default content;
}

declare module "*.link" {
    const content: any;
    export default content;
}

declare namespace JSX {
    interface IntrinsicElements {
        "button-f": any,
        "select-f": any,
        "option-f": any,
        "input-f": any,
        "card-f": any,
        "checkgroup-f": any,
        "checkbox-f": any,
        "breadcrumb-f": any,
        "row-f": any,
        "col-f": any,
        "drop-down-f": any,
        "drop-item-f": any,
        "menu-f": any,
        "sub-menu-f": any,
        "menu-item-f": any,
        "tips-f": any,
        "close-f": any,
        "popover-f": any,
        "txt-f": any,
        "group-f": any,
        "img-f": any,
    }
}
