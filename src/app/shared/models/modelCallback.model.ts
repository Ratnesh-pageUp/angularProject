import { DialogResult } from "../enums/dialogResult.enum";

/*
 * This class is for the callback called by modals after they are closed
 * If a modal is closed with confirmed action the callback sends DialogResult.Confirm and the resulting model
 * If it is closed with cancel action the callback sends DialogResult.Cancel and empty model
*/

export interface ModalCallback {
     dialogResult: DialogResult;
     model: any;
}