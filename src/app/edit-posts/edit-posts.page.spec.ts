import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPostsPage } from './edit-posts.page';

describe('EditPostsPage', () => {
  let component: EditPostsPage;
  let fixture: ComponentFixture<EditPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
