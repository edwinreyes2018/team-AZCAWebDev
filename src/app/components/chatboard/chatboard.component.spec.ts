import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboardComponent } from './chatboard.component';

describe('ChatboardComponent', () => {
  let component: ChatboardComponent;
  let fixture: ComponentFixture<ChatboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
