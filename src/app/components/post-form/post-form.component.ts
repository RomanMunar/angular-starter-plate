import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  post: Post = {
    id: null,
    title: '',
    body: '',
  };
  showPostForm: boolean = true;
  @ViewChild('postForm') form: any;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {}
  onSubmit({ value, valid }: { value: Post; valid: boolean }) {
    if (!valid) return 'Form is not valid';

    const { title, body } = value;
    this._postsService
      .savePost({ title, body } as Post)
      .subscribe((post) => this.newPost.emit(post));
    this.form.reset();
  }
}
