import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Blog } from '../blog';
@Component({
selector: 'app-blog',
templateUrl: './blog.component.html',
styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
posts: Blog[];
selectedBlog: Blog = { id : null , type: null, author: null, title: null, detail: null, postdate: null}

constructor(private apiService: ApiService) {
this.apiService.readPosts().subscribe((posts: Blog[])=>{
this.posts = posts;
console.log(this.posts);
}) }

ngOnInit() {
}

selectPost(post: Blog){
this.selectedBlog = post;
}

activatediv(id)
{
for(let i=1; i<=4; i++)
{
let eleid="tab"+i;
document.getElementById(eleid).classList.add("hide");
document.getElementById(eleid).classList.remove("show");
}

let eleid2="tab"+id;
document.getElementById(eleid2).classList.add("show");

}

}
