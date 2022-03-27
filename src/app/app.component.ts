import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy  {
  categoryForm: any;
  categoryCount: any;
  userForm: any;
  
  constructor(private appService: AppService){}
  title = 'categoryFilter';
  
  /**
   * userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });
  */

  categories: any = [];
  categoriesCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addCategory(this.categoryForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.categoryCount = this.categoryCount + 1;
      console.log(this.categoryCount);
      this.userForm.reset();
    });
  }

  getAllCategories() {
    this.appService.getAllCategories().pipe(takeUntil(this.destroy$)).subscribe((categories: any) => {
        this.categories = categories;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
