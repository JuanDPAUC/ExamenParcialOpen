import {Component, computed, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {AquaticCenter} from '../../../domain/model/aquatic-center.entity';
import {Reservations} from '../../../domain/model/reservations.entity';

@Component({
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  selector: 'app-aquatic-center-summary',
  styleUrl: './aquatic-center-summary.css',
  templateUrl: './aquatic-center-summary.html',
})
export class AquaticCenterSummary {
  aquaticCenter = input.required<AquaticCenter>();
  reservations = input.required<Reservations[]>();

  centerReservations = computed(() =>
    this.reservations().filter(reservation => reservation.aquaticCenterId === this.aquaticCenter().id)
  );
}
