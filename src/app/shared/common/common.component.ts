import Toastify from 'toastify-js';


export class Common {

constructor(){

}

    popup(e : estado, mensaje: string): void {
        Toastify({
            text: mensaje,
            duration: 2000, // Duración en milisegundos
            close: true, // Botón de cierre
            gravity: "top", // Posición de la notificación (top, bottom, left, right)
            position: 'center', // Alineación dentro de la posición
            style: { background: e}
        }).showToast();
    }

}
export enum estado {
    dangger = '#DC3545',
    success = '#198754',
    alert = '#FFC107',
    info = '#0D6EFD'
  }
  