import { ApiService } from './../services';
import { Meta } from './../interfaces';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export class ListComponent<Type> {
  public offset = 0;
  public perPage = 10;
  public resource: Type[];
  public meta: Meta;
  public service: ApiService<Type>;
  public queryString: string = "%";
  public $meta: Subject<Meta> = new Subject<Meta>();

  constructor(
    service: ApiService<Type>,
    protected mainField: string
  ) {
    this.service = service;
  }

  updateData() {
    return this.service.query(
      this.mainField,
      this.offset,
      this.perPage,
      `${this.mainField} like '${this.queryString}'`
    )
    .pipe(
      map((response) => {
        this.meta = response.meta;
        this.resource = response.resource;
        return response;
      })
    );
  }

  next(meta?) {
    meta = (meta) ? meta : this.meta;
    this.$meta.next(meta);
  }
}