import { TestBed } from '@angular/core/testing';

import { MiPaginaService } from './mi-pagina.service';

describe('MiPaginaService', () => {
  let service: MiPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
