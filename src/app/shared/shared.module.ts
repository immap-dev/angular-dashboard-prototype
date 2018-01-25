import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

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
