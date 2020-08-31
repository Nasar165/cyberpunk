import { NgModule } from '@angular/core';

import { TerminalComponent } from './terminal/terminal.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [TerminalComponent, SidebarComponent],
  imports: [],
  exports: [TerminalComponent, SidebarComponent],
})
export class SharedModule {}
