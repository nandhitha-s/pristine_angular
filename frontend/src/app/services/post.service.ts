import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/api/posts';  

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      map(posts => posts.map(post => {
      
        const blob = new Blob([post.image], { type: 'image/jpeg' });
        post.imageUrl = URL.createObjectURL(blob);
        return post;
      }))
    );
  }
}
