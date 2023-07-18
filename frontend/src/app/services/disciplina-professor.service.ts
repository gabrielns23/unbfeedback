import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class DisciplinaProfessorService {

  constructor(private http: HttpClient) { }

  public getDisciplinasProfessores(): Observable<any> {
    return this.http.get(`${environment.API}/discipline-professor`);
  }

  public getDisciplinas(): Observable<any> {
    return this.http.get(`${environment.API}/discipline-professor/disciplines`);
  }

  public getDepartamentos(): Observable<any> {
    return this.http.get(`${environment.API}/discipline-professor/departments`);
  }

}
