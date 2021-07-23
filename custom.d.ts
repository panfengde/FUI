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
        "button-f": any
    }
}
