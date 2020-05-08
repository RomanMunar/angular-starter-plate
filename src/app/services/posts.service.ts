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
  usersUrl: string = 'https://jsonplaceholder.typicode.com/user';
  posts: Post[];
  constructor(private _http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this._http.post<Post>(this.postsUrl, post, httpOptions);
  }
  updatePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this._http.put<Post>(url, post, httpOptions);
  }
  removePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this._http.delete<Post>(url, httpOptions);
  }
}
