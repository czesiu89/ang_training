// import { Component } from '@angular/core';

// @Component({
//     selector: 'pm-app',
//     template: `
//         <h1>Angular2: Getting Started</h1>
//     `
// })
// export class AppComponent { }

import { Component } from '@angular/core'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `

})
export class AppComponent {
    pageTitle: string = 'Acme Product Managment'
}