import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  @ViewChild('postForm') form: any;
  currentPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;
  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {
    this._postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id == cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });
  }
  removePost(post: Post) {
    this._postsService.removePost(post.id).subscribe(() => {
      this.posts.forEach((cur, index) => {
        if (post.id == cur.id) {
          this.posts.splice(index, 1);
          this.isEdit = false;
        }
      });
    });
  }
}
