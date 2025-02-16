import {Component, DestroyRef, inject, OnInit, output} from '@angular/core';
import {debounceTime} from 'rxjs';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filter',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  filteredValue = output<string>();
  destroyRef = inject(DestroyRef)
  filterForm = new FormGroup({
    filterByICAO: new FormControl<string>('')
  });

  ngOnInit() {
    this.filterForm.controls['filterByICAO'].valueChanges
      .pipe(debounceTime(1000),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((formData) => {
      this.filteredValue.emit(formData ?? '');
    });
  }
}
