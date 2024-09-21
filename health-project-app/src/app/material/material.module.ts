import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatStepperModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatStepperModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatExpansionModule
  ]
})
export class MaterialModule {
}

