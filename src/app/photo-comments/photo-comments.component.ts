import 'rxjs/add/operator/switchMap'
import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Comment } from '../comment';
import { Photo } from '../photo';

import { CommentService } from '../comment.service'

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit, AfterViewChecked {

  @Input() photo: Photo;

  title: string = 'Comments';

  comments: Comment[];
  newComment: Comment;
  
  constructor (
    private commentService: CommentService
  ) {  }

  newUsernameValid: Boolean = true;
  newContentValid: Boolean = true;
  createComment(comment: Comment): void {
    
    // some validations
    this.newUsernameValid = comment.username != null && comment.username.length>0;
    this.newContentValid = comment.content != null && comment.content.length>0;

    if (!this.newUsernameValid || !this.newContentValid) {
      alert('Please fill out all the comment fields')
      return;
    }

    comment.entityType = 'photo';
    comment.entityId = this.photo.id;
    comment.datetime = new Date();

    this.commentService.createComment(comment)
      .then(comment => {
        this.comments.push(comment);
        this.newComment = new Comment();
      });
  }

  ngOnInit() {
    this.newComment = new Comment();
  }

  ngAfterViewChecked() {
    // console.log(this.photo);
    if (this.photo) {
      this.commentService.getPhotoComments(this.photo.id).then(comments => this.comments = comments);
      // this.commentService.getComments().then(comments => this.comments = comments);
    }
  }

}
