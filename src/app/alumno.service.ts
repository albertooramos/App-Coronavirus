import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/alumnos';

  constructor(private http: HttpClient) { }

  getAlumno(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAlumno(alumno: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, alumno);
  }

  updateAlumno(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAlumno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAlumnosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
