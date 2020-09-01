import { NgModule } from '@angular/core';

import { TerminalComponent } from './terminal/terminal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConnectionComponent } from './connection/connection.component';
import { FakeTerminalComponent } from './fake-terminal/fake-terminal.component';

@NgModule({
  declarations: [
    TerminalComponent,
    SidebarComponent,
    ConnectionComponent,
    FakeTerminalComponent,
  ],
  imports: [],
  exports: [
    TerminalComponent,
    SidebarComponent,
    ConnectionComponent,
    FakeTerminalComponent,
  ],
})
export class SharedModule {}
