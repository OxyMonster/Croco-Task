import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContentMainComponent } from './games-content-main.component';

describe('GamesContentMainComponent', () => {
  let component: GamesContentMainComponent;
  let fixture: ComponentFixture<GamesContentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesContentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
