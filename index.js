const msg_container = document.querySelector( "#msg-container" )

msg_container.innerHTML = ""
for ( let i = 0; i < 20; i++ ) {
  const newMsg = document.createElement( "div" )
  newMsg.innerHTML =
    `
  <div class="py-1 flex items-center overflow-x-hidden border-b border-gray-200 mr-2 hover:shadow-md">
    <div class="p-2 flex justify-center items-center rounded-full hover:bg-gray-200 inline">
      <input class="w-4 h-4 cursor-pointer" type="checkbox">
    </div>
    <span
      class="material-icons text-gray-400 rounded-full hover:bg-gray-200 cursor-pointer p-1">star_border</span>
    <span
      class="material-icons text-gray-400 rounded-full hover:bg-gray-200 cursor-pointer p-1">label_important</span>
    <p class="sender font-medium">Cambly</p>
    <p class="content ml-16 text-md overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Corrupti eligendi voluptates omnis nostrum dolores.</p>
    <p class="time text-sm font-bold ml-32">2:23 PM</p>
  </div>
  `
  msg_container.appendChild( newMsg )
}