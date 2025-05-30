import { FormControl } from "@angular/forms";

export interface User {
    id?: FormControl<number | null>;
    nome: FormControl<string | null>;
    email: FormControl<string | null>;
    consented: FormControl<Array<string> | null>;
}
