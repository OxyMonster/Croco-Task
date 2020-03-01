import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContentRightComponent } from './games-content-right.component';

describe('GamesContentRightComponent', () => {
  let component: GamesContentRightComponent;
  let fixture: ComponentFixture<GamesContentRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesContentRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
