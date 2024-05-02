import { Component } from '@angular/core';
import Toastify from 'toastify-js';
import { Common, estado } from '../../shared/common/common.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent extends  Common {

  ck(){
    this.popup(estado.info, "Mensaje de prueba");
  }

}
