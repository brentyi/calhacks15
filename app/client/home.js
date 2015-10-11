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

    ble.startScan([],
        function(device) {
            var x = device.id;
            alert(x);
        },
        function() {
            alert("It failed!!");
        }
    );
  },
  'click #host_button': function(){
    switchAppState('createEvent');
    MacAddress.getMacAddress(
        function(macAddress) {
            alert(macAddress);
        },
        function(fail) {
            alert(fail);
        }
    );
  },
  'click #profile_button': function(){
    switchAppState('registration');
  }
});


