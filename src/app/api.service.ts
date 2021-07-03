
import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class ApiService {
PHP_API_SERVER = "http://localhost/myapp/api";
constructor(private httpClient: HttpClient) {}
readPosts(): Observable<Blog[]>{
return this.httpClient.get<Blog[]>(`${this.PHP_API_SERVER}/blog.php`);
}
}