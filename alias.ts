import { resolve } from "path";
const r = (p: string) => resolve(__dirname, p);
const alias = {
    "@src": r("./src/"),
};
export default alias;
