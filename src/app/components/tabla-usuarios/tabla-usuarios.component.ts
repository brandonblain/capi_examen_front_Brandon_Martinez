import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.sass']
})
export class TablaUsuariosComponent implements OnInit {

  users:any;
  edad:any;

  dataUsers:any;

  constructor(
    private UserService: UsuariosService,
  ) { }

  ngOnInit(){
    this.getUsuarios();
  }

  getUsuarios(){
    this.UserService.getUsers().subscribe(
      (data:any)=>{
        if (data != undefined || data != null) {
          console.log(JSON.stringify(data))
          this.dataUsers=data as string[];
          console.log(this.dataUsers)
          this.users=this.dataUsers.Domicilio;
          this.edad=this.dataUsers.edad;
        }
    },
    (err:any)=>{
      console.log('error',err)
    });
  }

}
