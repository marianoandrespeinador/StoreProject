import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loadedFeature = 'recipe';

    onNavigate(feature:string) {
        this.loadedFeature = feature;
    }

}
