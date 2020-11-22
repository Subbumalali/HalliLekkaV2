import { NgModule } from '@angular/core';
import { MatTableModule,MatMenuModule, MatButtonModule, MatIconModule,MatSelectModule,MatInputModule,MatDatepickerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

const materialComponent=[MatTableModule,MatMenuModule,MatButtonModule,MatIconModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatDatepickerModule]

@NgModule({
  declarations: [],
  imports: [
    materialComponent
  ],
  exports:[materialComponent]
})
export class MaterialModule { }
