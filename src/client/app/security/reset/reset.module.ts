import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset.component';
import { ResetRoutingModule  } from './reset-routing.module';

@NgModule({
  imports: [CommonModule, ResetRoutingModule],
  declarations: [ResetComponent],
  exports: [ResetComponent],
  providers: []
})
export class ResetModule { }
