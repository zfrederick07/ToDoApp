import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemCreateComponent } from './to-do-item-create.component';

describe('ToDoItemCreateComponent', () => {
  let component: ToDoItemCreateComponent;
  let fixture: ComponentFixture<ToDoItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
