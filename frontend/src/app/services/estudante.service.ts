import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estudante} from "../models/Estudante";
import {Observable} from "rxjs";
import {environment} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }



  public autenticar(estudante: any): Observable<any> {
    return this.http.post(`${environment.API}/user/auth`, estudante);
  }

  public criarEstudante(estudante: Estudante): Observable<any> {
    const user = { register: estudante.matricula, password: estudante.senha, email: estudante.email, course: estudante.curso,
      administrator: estudante.administrador}

    return this.http.post(`${environment.API}/user`, user, { responseType: 'text' });
  }

  public editarEstudante(estudante: Estudante): Observable<any> {
    const user = { register: estudante.matricula, password: estudante.senha, email: estudante.email, course: estudante.curso,
      administrator: estudante.administrador}

    return this.http.put(`${environment.API}/user/${user.register}`, user);
  }

  public getEstudante(register: string): Observable<any> {
    return this.http.get(`${environment.API}/user/${register}`);
  }

  public getEstudanteLogado(): Estudante {
    const estudanteString = localStorage.getItem("ESTUDANTE")
    const estudante: Estudante = estudanteString !== null ? JSON.parse(estudanteString) : new Estudante();
    return estudante;
  }

  public isAutenticado(): boolean {
    const matricula = localStorage.getItem("MATRICULA")
    return matricula !== null
  }

  public isAdministrador(): boolean {
    const estudanteString = localStorage.getItem("ESTUDANTE")
    const estudante: Estudante = estudanteString !== null ? JSON.parse(estudanteString) : new Estudante();
    return estudante.administrador
  }

}
