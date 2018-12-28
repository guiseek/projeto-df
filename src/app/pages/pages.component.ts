import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, AuthService } from '../shared';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private profile$: Observable<Profile>;
  private profile: Profile;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.profile = this.authService.getAuth();
    AuthService.$profile.subscribe(profile => {
      this.profile = profile;
    })
  }

}
