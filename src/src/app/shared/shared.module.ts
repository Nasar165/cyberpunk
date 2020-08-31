import { NgModule } from '@angular/core';

import { TerminalComponent } from './terminal/terminal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConnectionComponent } from '../connection/connection.component';

@NgModule({
  declarations: [TerminalComponent, SidebarComponent, ConnectionComponent],
  imports: [],
  exports: [TerminalComponent, SidebarComponent, ConnectionComponent],
})
export class SharedModule {}
