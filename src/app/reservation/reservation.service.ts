import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = []

  constructor(){
    let savedReservation = localStorage.getItem("reservations")
    this.reservations = savedReservation? JSON.parse(savedReservation) : []
  }

  getReservations() : Reservation[]{
    return this.reservations
  }

  getReservation(id : String ) : Reservation | undefined{
    return this.reservations.find(res => res.id === id)
  }

  addReservation(reservation : Reservation) : void{
    this.reservations.push(reservation)
    localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

  deleteReservation(id : String) : void{
      let index = this.reservations.findIndex(res => res.id === id)
      this.reservations.splice(index,1)
      localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

  updateReservation(reservation : Reservation) : void{
      let index = this.reservations.findIndex(res => res.id === reservation.id)
      this.reservations[index] = reservation
      localStorage.setItem("reservations",JSON.stringify(this.reservations))
  }

}
