import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageTypes} from "../models/enums/message-types";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {
  }

  showMessage(message: string, action: string, type: MessageTypes) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', type],
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
