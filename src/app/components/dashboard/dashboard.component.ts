import { Component } from '@angular/core';
import { Common, estado } from '../../shared/common/common.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent extends Common {
  public palabras: any[] = [];
  constructor(private firestore: AngularFirestore) {
    super();

  }
  ck() {
    this.popup(estado.info, "Mensaje de prueba");
  }
  write() {
    const ref = this.firestore.collection('ahorcadoPalabras');
    const palabras: string[] = [
      "Elefante",
      "Hospital",
      "Maestro",
      "Vacaciones",
      "Lapiz",
      "Fragil",
      "Excavador",
      "Mariposa",
      "Resplandor",
      "Universo",
      "Pimiento",
      "Tomates",
      "Caballos",
      "Camiones",
      "Velocidad",
      "Aspirina",
      "Lenguaje",
      "Escritor",
      "Bastante",
      "Trabajo"
    ];
    for (var i = 0; i < palabras.length; i++) {
      ref.add({ id: i + 2, Nombre: palabras[i] });
    }
  }
  async read() {
    const ref = this.firestore.collection('ahorcadoPalabras');
    const result = await ref.get().toPromise();

    if (result && !result.empty) { // Verifica que snapshot no sea null o undefined o este Vacio
      result.forEach((item) => {
        const data = item.data() as any; // Especifica que los datos son de tipo any
        console.log(data.id); // Accede a la propiedad Nombre
      });
    } else {
      console.log('Error al obtener el snapshot.'); // Manejar el caso donde snapshot es null o undefined
    }
  }


}
