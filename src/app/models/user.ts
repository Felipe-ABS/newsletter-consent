import { ConsentsTo } from "../enum/consents";

export interface User {
    id: number;
    nome: string;
    email: string;
    consented: Array<ConsentsTo>;
}
