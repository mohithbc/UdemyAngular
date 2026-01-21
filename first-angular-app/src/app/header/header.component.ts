import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    //template: '<h1>Welcome to the Header Component</h1>',// this is not recommended for larger templates we usually use templateUrl
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}