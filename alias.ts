import { resolve } from "path";
const r = (p: string) => resolve(__dirname, p);
const alias = {
    "@": r("./src/"),
};
export default alias;
