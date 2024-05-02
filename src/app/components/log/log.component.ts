import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';

import { Usuario, UsuarioSign } from '../../shared/interfaces/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  @ViewChild('CheckDoor') checkDoor: ElementRef | undefined;
  @ViewChild('VerPass') verPass: ElementRef | undefined;

  public controlForm: FormGroup;
  public passValid: boolean;
  public usuario: Usuario;
  public usuarioSign: UsuarioSign | undefined;

  constructor(private auth: AuthService,
    private router: Router
  ) {
    this.usuario = {} as Usuario;
    this.passValid = false;

    this.controlForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passRep: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  logIn(){
    this.auth.loginEmailPass(this.usuario);
  }
  register(usuario: Usuario) {
    this.auth.regiterEmailPass(usuario);

  }
  logInGoogle(){
    this.auth.loginWithGoogle();
  }



  registrar(): void {
    this.controlForm.markAllAsTouched();
    const pass = this.controlForm.get('pass')?.value;
    const passRep = this.controlForm.get('passRep')?.value;
    if (pass != passRep) {
      this.passValid = true;
      return;
    }

    if (this.controlForm.valid && pass == passRep) {
      this.register({ email: this.controlForm.value.email, pass: this.controlForm.value.pass });
      this.checkDoor!.nativeElement.checked = false;
      return;
    }
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement, passwordInputRep: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInputRep.type = passwordInputRep.type === 'password' ? 'text' : 'password';
  }
  resetValidator(): void {
    if (this.passValid == true)
      this.passValid = false;
  }

  limpiar(): void {
    this.controlForm.reset();
    const checkbox: HTMLInputElement = this.verPass!.nativeElement;
    checkbox.checked = false;
    this.passValid = false;

    this.usuario={}as Usuario;
  }

}