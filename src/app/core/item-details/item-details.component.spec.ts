import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ItemDetailsComponent } from './item-details.component';
import { ItemDetailsService } from './item-details.service';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { MainPageService } from '../main-page/main-page.service';
import { AuthorDetailsService } from '../author-details/author-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;
  let itemDetailsService: ItemDetailsService;
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => 'test_key'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailsComponent],
      providers: [
        ItemDetailsService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        AuthorDetailsService,
        MainPageService,
        SearchBarService
      ],
      imports:[HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    itemDetailsService = TestBed.inject(ItemDetailsService); // Ottieni l'istanza reale del servizio
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getItemDetails and set itemInfo correctly', () => {
    const mockItemInfo = { title: 'Book 1', description: 'Description of Book 1', covers: ['cover1', 'cover2'] };
    spyOn(itemDetailsService, 'getItemDetails').and.returnValue(of(mockItemInfo));

    fixture.detectChanges();

    expect(itemDetailsService.getItemDetails).toHaveBeenCalled();
    expect(component.itemInfo).toEqual(mockItemInfo);
  });

  it('should check if a value is an object correctly', () => {
    expect(component.isObject({})).toBeTrue();
    expect(component.isObject([])).toBeTrue();
    expect(component.isObject(null)).toBeFalse();
    expect(component.isObject(123)).toBeFalse();
    expect(component.isObject('test')).toBeFalse();
  });
});
