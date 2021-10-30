import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNumberOfUsersComponent } from './user-number-of-users.component';

describe('UserNumberOfUsersComponent', () => {
  let component: UserNumberOfUsersComponent;
  let fixture: ComponentFixture<UserNumberOfUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNumberOfUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNumberOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
