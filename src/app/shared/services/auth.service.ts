import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/user';
import { Common,estado } from '../common/common.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends Common {
    public userData: any;
    public isLoged: boolean =true;
    public userEmail: string | null | undefined = null;
    constructor(
        private Auth: AngularFireAuth, // Servicio de firebase
        private router: Router,        // Ruteos
        private ngZone: NgZone         // Asegurar que el código se ejecute dentro de Angular
    ) {
        super();
        // Se ejecuta cada vez que se cree un componente, verifica el estado del servicio 
        this.Auth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));

            } else {
                localStorage.removeItem('user');

            }
        });
    
        this.Auth.onAuthStateChanged((user) => {
            if (user) {
                this.router.navigate(['dashboard']);
                this.isLoged = true;
            } else {
                localStorage.removeItem("user");
                this.router.navigate(['log']);
                this.isLoged = false;
            }
        });
    }

    loginEmailPass(usuario :Usuario) {
        return this.Auth.signInWithEmailAndPassword(usuario.email, usuario.pass)
            .then(userCredential => {
                this.userData = userCredential.user;
                this.userEmail = usuario.email;
                this.Observador();
            })
            .catch((error:Error) => {
                this.popup(estado.dangger, 'El usuario o contraceña es incorrecto \n'+error.message );
            });
    }
    loginWithGoogle(){
        return this.Auth.signInWithPopup(new GoogleAuthProvider())
        .then((result)=>{this.userEmail = result.user?.email; this.Observador()})
        .catch((error:Error)=>{
            this.popup(estado.dangger, 'No se pudo conectar con GoogleAcount \n'+error.message );

        });
    }
    regiterEmailPass(usuario:Usuario){
        return this.Auth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
        .then((userCredential)=>{
            this.userData=userCredential.user
            this.Observador()
        })
        .catch(error=>{
            this.popup(estado.dangger, 'No se pudo establecer una conexión con el servicio. \n'+error.message );
        })
    }
    logout(){
        return this.Auth.signOut().then(()=>{
            localStorage.removeItem("user");
            this.router.navigate(['log']);
        }).catch(error=>{
            this.popup(estado.dangger, 'No se pudo establecer una conexión con el servicio \n'+error.message );
        });
    }

    //Informa si hay un usuario logeado
    // isLogged():boolean{
    //     const user = localStorage.getItem("user");

    //     return user!=null;
    // }
    
    //Si el usuario esta logeado Redirige de forma segura
    Observador(): void {
        this.Auth.authState.subscribe(userState => {
            userState && this.ngZone.run(() => this.router.navigate(['dashboard']))
        });
    }
}
