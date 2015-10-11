Template.state_home.events({
  'click #checkin_button': function(){
    //make bluetooth visible
    ble.enable(
        function() {
            console.log("Bluetooth is enabled");
        },
        function() {
            console.log("The user did *not* enable Bluetooth");
        }
    );
  },
  'click #host_button': function(){
    switchAppState('createEvent');
  },
  'click #profile_button': function(){
    switchAppState('registration');
  }
});


