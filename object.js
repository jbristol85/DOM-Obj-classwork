var hotel = { 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false,
  
  roomsAvail: function(){
     return this.rooms - this.roomsBooked;
  }
    
};

   document.getElementById("clickMe").onclick = function(){
    document.getElementById("name").innerHTML = hotel.name;
    document.getElementById("total").innerHTML = hotel.rooms;
    document.getElementById("avail").innerHTML = hotel.roomsAvail();
        };