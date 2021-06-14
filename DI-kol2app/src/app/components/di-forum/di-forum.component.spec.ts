import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIForumComponent } from './di-forum.component';

describe('DIForumComponent', () => {
  let component: DIForumComponent;
  let fixture: ComponentFixture<DIForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DIForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
