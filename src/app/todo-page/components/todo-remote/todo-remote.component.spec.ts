import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRemoteComponent } from './todo-remote.component';

describe('TodoRemoteComponent', () => {
  let component: TodoRemoteComponent;
  let fixture: ComponentFixture<TodoRemoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoRemoteComponent]
    });
    fixture = TestBed.createComponent(TodoRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
