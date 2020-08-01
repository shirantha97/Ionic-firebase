import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPostsPage } from './add-posts.page';

describe('AddPostsPage', () => {
  let component: AddPostsPage;
  let fixture: ComponentFixture<AddPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
