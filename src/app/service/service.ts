import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  /* ============ Pipeline api call Url function ================ */
  //  getList() {
  //     return this.http.get(ApiConfig.apiUrl + '' + ApiConfig.apiPath + '' + SettingConfig.setting_get_pipeline_url);
  // }
  registerData(message) {
      return this.http.post('http://localhost:8000/api/register', message);
  }
  loginData(message) {
    return this.http.post('http://localhost:8000/api/login', message);
   }
   getEmpdata(){
    return this.http.get('http://localhost:8000/api/emp_data');
   }

   updateStatus( data: any){
    return this.http.put('http://localhost:8000/api/update_emp', data);
   }

   postTask(data: any) {
    return this.http.post('http://localhost:8000/api/post_task', data);
    }
  // deletePipeline(id: any) {
  //     // return this.http.delete( + '/' + id);
  // }
  // updatePipeline(id, data) {
  //     return this.http.put( + '/' + id, data);
  // }

}
