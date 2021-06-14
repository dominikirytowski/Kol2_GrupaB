import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIForumDetailsComponent } from './di-forum-details.component';

describe('DIForumDetailsComponent', () => {
  let component: DIForumDetailsComponent;
  let fixture: ComponentFixture<DIForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DIForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
