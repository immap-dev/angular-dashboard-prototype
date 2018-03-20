import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent} from '../header/header.component';
// export { HeaderComponent};

@NgModule({
	imports: [
	CommonModule,
        FlexLayoutModule,
        MaterialModule,
        
    ],
	declarations:[
		HeaderComponent
	],	

    exports: [
        FlexLayoutModule,
        MaterialModule,
        HeaderComponent
    ],
    providers:[HeaderComponent]

})

export class SharedModule {}
