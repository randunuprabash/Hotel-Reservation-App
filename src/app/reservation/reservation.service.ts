import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = []

  getReservations() : Reservation[]{
    return this.reservations
  }

  getReservation(id : String ) : Reservation | undefined{
    return this.reservations.find(res => res.id === id)
  }

  addReservation(reservation : Reservation) : void{
    this.reservations.push(reservation)
  }

  deleteReservation(id : String) : void{
      let index = this.reservations.findIndex(res => res.id === id)
      this.reservations.splice(index,1)
  }

  updateReservation(reservation : Reservation) : void{
      let index = this.reservations.findIndex(res => res.id === reservation.id)
      this.reservations[index] = reservation
  }

}
