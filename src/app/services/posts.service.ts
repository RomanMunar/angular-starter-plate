import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/Post';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[];
  constructor(private _http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this._http.post<Post>(this.postsUrl, post, httpOptions);
  }
}
