var entities = require('entities'),
  spawn = require('spawn');
  var utils = require('utils');
  var players = utils.players();

var entityNames = [];
for (var name in entities) {
  entityNames.push(name);
}

var previous_id= ""


function check_for_chaos() {



    var chaos_commands = scload("T:/spigotmc/scriptcraft/plugins/poot.json")


    server.consoleSender.sendMessage(chaos_commands.id + "/" + previous_id)
    if (chaos_commands.id!==previous_id) {
        previous_id= chaos_commands.id;

        server.consoleSender.sendMessage("Nouvelle commande : " + chaos_commands.command)
        spawn(chaos_commands.command, players[0].location)
    
    } else {
        previous_id= chaos_commands.id
        server.consoleSender.sendMessage("Nothing new")
    
    }
}



setInterval(check_for_chaos, 500)

echo(players)