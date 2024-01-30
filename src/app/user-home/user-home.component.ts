import { Component } from '@angular/core';
import { UserFeedComponent } from '../user-feed/user-feed.component';
import { UserNavigationComponent } from "../user-navigation/user-navigation.component";

@Component({
    selector: 'app-user-home',
    standalone: true,
    templateUrl: './user-home.component.html',
    styleUrl: './user-home.component.css',
    imports: [UserFeedComponent, UserNavigationComponent]
})
export class UserHomeComponent {
}
