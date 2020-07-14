import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComplexBottomSheetComponent } from './complex-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { DataService } from './data.service';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatBottomSheetModule,
        MatListModule,
        SpacerModule,
    ],
    declarations: [ComplexBottomSheetComponent],
    providers: [DataService],
})
export class ComplexBottomSheetModule {}