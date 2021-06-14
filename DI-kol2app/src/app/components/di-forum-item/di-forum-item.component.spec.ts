import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIForumItemComponent } from './di-forum-item.component';

describe('DIForumItemComponent', () => {
  let component: DIForumItemComponent;
  let fixture: ComponentFixture<DIForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DIForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
