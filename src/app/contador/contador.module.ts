import { NgModule } from "@angular/core";
import { ContadorComponet } from './contador/app.contador.component';

@NgModule({
    declarations:[
        ContadorComponet
    ],
    exports:[
        ContadorComponet
    ]
})
export class ContadorModule{
    
}