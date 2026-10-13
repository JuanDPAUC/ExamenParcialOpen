import {BaseEntity} from '../../../shared/domain/model/base-entity';
import {AquaticCenter} from './aquatic-center.entity';

export class Reservations implements BaseEntity {
  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get aquaticCenterId(): number {
    return this.#aquaticCenterId;
  }

  set aquaticCenterId(value: number) {
    this.#aquaticCenterId = value;
  }

  get activityType(): string {
    return this.#activityType;
  }

  set activityType(value: string) {
    this.#activityType = value;
  }

  get participantName(): string {
    return this.#participantName;
  }

  set participantName(value: string) {
    this.#participantName = value;
  }

  get participants(): number {
    return this.#participants;
  }

  set participants(value: number) {
    this.#participants = value;
  }

  get weatherTemperature(): number {
    return this.#weatherTemperature;
  }

  set weatherTemperature(value: number) {
    this.#weatherTemperature = value;
  }

  get reserverdAt(): string {
    return this.#reserverdAt;
  }

  set reserverdAt(value: string) {
    this.#reserverdAt = value;
  }

  get aquaticCenter(): AquaticCenter | null {
    return this.#aquaticCenter;
  }

  set aquaticCenter(value: AquaticCenter | null) {
    this.#aquaticCenter = value;
  }
  #id: number;
  #aquaticCenterId: number;
  #activityType: string;
  #participantName: string;
  #participants : number;
  #weatherTemperature: number;
  #reserverdAt: string;
  #aquaticCenter: AquaticCenter | null;

  constructor(reservations: { id:number, aquaticCenterId:number, activityType:string, participantName:string,
    participants:number, weatherTemperature:number , reservedAt:string, aquaticCenter?: null
  }) {
    this.#id = reservations.id;
    this.#aquaticCenterId = reservations.aquaticCenterId;
    this.#activityType = reservations.activityType;
    this.#participantName = reservations.participantName;
    this.#participants =reservations.participants;
    this.#weatherTemperature = reservations.weatherTemperature;
    this.#reserverdAt = reservations.reservedAt;
    this.#aquaticCenter = reservations.aquaticCenter ?? null;



  }
}
