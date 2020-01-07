import { Injectable } from '@angular/core';

import { BillboardMedia } from '../models/billboardMedia';
import billboard from './__data__/billboards';

@Injectable({
  providedIn: 'root',
})
export class BillboardService {
  getBillboard(): BillboardMedia {
    return billboard;
  }
}
