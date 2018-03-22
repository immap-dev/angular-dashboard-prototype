import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent} from '../header/header.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownlodButtonComponent } from './downlod-button/downlod-button.component';
// export { HeaderComponent};

@NgModule({
	imports: [
	CommonModule,
        FlexLayoutModule,
        MaterialModule,FormsModule, ReactiveFormsModule
        
    ],
	declarations:[
		HeaderComponent,
		DatePickerComponent,
		DownlodButtonComponent
	],	

    exports: [
        FlexLayoutModule,
        MaterialModule,
        HeaderComponent,
        DatePickerComponent,
        DownlodButtonComponent
    ],
    // providers:[HeaderComponent]

})

export class SharedModule {}
