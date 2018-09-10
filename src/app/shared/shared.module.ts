import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent} from '../header/header.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownlodButtonComponent } from './downlod-button/downlod-button.component';
import { DashboardService } from '../dashboards/dashboards.service';
import { ExtendedFormComponent } from './extended-form/extended-form.component';
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
		DownlodButtonComponent,
		ExtendedFormComponent
	],	

    exports: [
        FlexLayoutModule,
        MaterialModule,
        HeaderComponent,
        DatePickerComponent,
        DownlodButtonComponent,
        ExtendedFormComponent
    ],
    // providers:[HeaderComponent]
    providers:[DashboardService]


})

export class SharedModule {}
