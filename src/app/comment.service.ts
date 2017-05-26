import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Comment } from './comment'

/*
This might be a little muddled doing comments and comment comments together, but that seems out of the scope
*/

@Injectable()
export class CommentService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private commentsUrl = 'api/comments'; // url to get comments for a comment

  getPhotoComments(commentID: number): Promise<Comment[]> {
    const url = this.commentsUrl + '/?entityType=photo&entityId=' + commentID;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        // console.log(response);
        let parsed = []  as Comment[];
        response.json().data.forEach(comment => {
          parsed.push(this.parse(comment)); 
        });
        return parsed
      }).catch(this.handleError);
  }

  getComments(): Promise<Comment[]> {
    return this.http.get(this.commentsUrl)
      .toPromise()
      .then(response => {
        let parsed = []  as Comment[];
        response.json().data.forEach(comment => {
          parsed.push(this.parse(comment)); 
        });
        return parsed
      }).catch(this.handleError);
  }

  getComment(id: number): Promise<Comment> {
    const url = this.commentsUrl + '/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => this.parse(response.json().data) as Comment)
      .catch(this.handleError);
  }

  createComment(comment: Comment): Promise<Comment> {
    return this.http
      .post(this.commentsUrl, JSON.stringify(comment), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Comment)
      .catch(this.handleError);
  }
 
  updateComment(comment: Comment): Promise<Comment> {
    const url = this.commentsUrl + '/' + comment.id;
    return this.http
      .put(url, JSON.stringify(comment), { headers: this.headers })
      .toPromise()
      .then(() => comment)
      .catch(this.handleError);
  }
 
  deleteComment(comment: Comment): Promise<void> {
    const url = this.commentsUrl + '/' + comment.id;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private parse(comment: Comment): Comment {
    comment.datetime = new Date(comment.datetime)
    return comment;
  }

}
