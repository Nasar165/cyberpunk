import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeTerminalComponent } from './fake-terminal.component';

describe('FakeTerminalComponent', () => {
  let component: FakeTerminalComponent;
  let fixture: ComponentFixture<FakeTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
