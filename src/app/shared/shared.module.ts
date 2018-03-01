import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent} from '../header/header.component';
export { HeaderComponent};

@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule,
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
    ]
})

export class SharedModule {}
