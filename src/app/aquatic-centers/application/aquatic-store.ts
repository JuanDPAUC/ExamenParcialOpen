import {HttpClient} from '@angular/common/http';
import {AquaticCenter} from '../domain/model/aquatic-center.entity';
import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {Reservations} from '../domain/model/reservations.entity';
import {AquaticCenterApi} from '../infrastructure/aquatic-center-api';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class AquaticStore {

  private readonly aquaticCenterSignal= signal<AquaticCenter[]>([]);
  readonly aquaticCenters= this.aquaticCenterSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);

  private readonly reservationSignal= signal<Reservations[]>([]);
  readonly reservations= this.reservationSignal.asReadonly();

  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);


  readonly error = this.errorSignal.asReadonly();

  private readonly destroyRef = inject(DestroyRef);

  constructor(private aquaticCenterApi: AquaticCenterApi) {
    this.loadAquaticCenters();
    this.loadReservations();
  }

  private loadAquaticCenters(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.aquaticCenterApi.getAquaticCenters().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: aquaticCenters => {
        console.log(aquaticCenters);
        this.aquaticCenterSignal.set(aquaticCenters);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load aquatic center '));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadReservations(): void {
    this.aquaticCenterApi.getReservations().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: reservations => {
        this.reservationSignal.set(reservations);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load reservations'));
      }
    });
  }








  private formatError(error: any, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found') ? `${fallback}: Not found` : error.message;
    }
    return fallback;
  }


}
