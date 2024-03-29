/// <reference types="vite/client" />

declare module "react-dom/client" {
    // typing module default export as `any` will allow you to access its members without compiler warning
    var createRoot: any;
    export {createRoot};
}

declare module '*.jpg';
declare module '*.svg';