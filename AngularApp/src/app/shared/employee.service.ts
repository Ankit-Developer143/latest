import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





import { Employee } from './employee.model';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];
  readonly baseURL = 'http://localhost:3000/employee'


  constructor(private http:HttpClient) { }


  postEmployee(emp:Employee){
    return this.http.post(this.baseURL,emp)
  }
  getEmployeedata(){
    return this.http.get(this.baseURL)
  }
  updateEmployee(id){
    return this.http.put(this.getUrlById(id),id);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.getUrlById(id))
  }


  getUrlById(id:any){
    return `${this.baseURL}/${id}`
  }


}
