import {Component, input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {DatePipe} from '@angular/common';
import {AquaticCenter} from '../../../domain/model/aquatic-center.entity';
import {Reservations} from '../../../domain/model/reservations.entity';

@Component({
  imports: [MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    TranslatePipe,
    MatCardFooter,
    DatePipe],
  selector: 'app-aquatic-center-summary',
  styleUrl: './aquatic-center-summary.css',
  templateUrl: './aquatic-center-summary.html',
})
export class AquaticCenterSummary {
  aquaticCenter = input.required<AquaticCenter>();
  reservation = input.required<Reservations>();
}
